import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';


//ToDo: Проверить, что везде где api присутствует обработка по catch
function App() {
  
  //Реакт-хуки состояний
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [cards, setCards] = React.useState([]);
  
  //Разные функции компонента App:
  // Функция для обработки ошибок
  function catchResponse(err) {
    if(err.status) {
      alert(`Сервер ответил ошибкой со статусом ${err.status}`)
    }
    else {
      alert(`Ваш запрос не ушел на сервер или сервер не ответил, ошибка ${err}`)
    };
  };
  //Изменеие лайк-статуса карточки
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeStatus(card._id, isLiked)
    .then((serverNewCard) => {
      setCards(cards => cards.map(c => c._id === card._id ? serverNewCard : c));
    })
    .catch(err => catchResponse(err));
  };
  //Удаление карточки
  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then((res) => {
      setCards(cards => cards.filter(c => c._id !== card._id));
    })
    .catch(err => catchResponse(err));
  };
  //Изменение имени и профессии пользователя
  function handleUpdateUser({name, about}) {
    api.editProfile(name, about)
    .then(newUser => {
      setCurrentUser(newUser);
      closeAllPopups();
    })
    .catch(err => catchResponse(err));
  };
  //Изменение аватара пользователя
  function handleUpdateAvatar({avatar}) {
    api.changeAvatar(avatar)
    .then(newAvatar => {
      setCurrentUser(newAvatar);
      closeAllPopups();
    })
    .catch(err => catchResponse(err));
  };
  //Добавление новой карточки
  function handleAddCard(cardTitle, cardUrl) {
    api.addCard(cardTitle, cardUrl)
    .then(newCard => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch(err => catchResponse(err));
  };
  //Флаги-семафоры для проверки состояния "открыт/закрыт" для каждого попапа
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleCardClick = (cardObj) => {
    setSelectedCard(cardObj);
  };
  //Переводит в состояние "закрыт" все попапы
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };


  //Хук осуществляющий запрос данных с сервера
  React.useEffect(() => {
    //Тут выполняется код при рендере любого компонета Main или самого Main (если не указан конкретный компонент в конце)
    Promise.all( [api.getProfile(), api.getAllCards()] )
    .then(([currentUserObj, initialCards]) => {
      setCurrentUser(currentUserObj);
      setCards(initialCards);
    })
    .catch(err => catchResponse(err));
    //return () => {
    //Код внутри return выполнится при удалении любого или указанного компонета Main
    //}
  }, []);//После запятой указывается конкретный компонет или компоненты в массиве,
  //если массив пустой то этот код исполнится один раз, если нет ничего будет рендерится
  // при каждом изменении любого компонента внутри родителя или самого родителя


  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="page page_content_paddings">

        <Header />

        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} forwardMainOnCardClick={handleCardClick} forwardMainOnCardLike={handleCardLike} forwardMainOnCardDelete={handleCardDelete} cards={cards}/>
      
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddCard}/>

        <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да"/>

        <ImagePopup card={selectedCard} onClosePopup={closeAllPopups} />

      </div>

    </CurrentUserContext.Provider>
  );
};


export default App;