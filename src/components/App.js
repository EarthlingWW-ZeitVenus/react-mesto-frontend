import React from 'react';
import { Route, Switch, useHistory} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
// import EnvironmentContext from '../contexts/EnvironmentContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';

//ToDo:
// 1. Не забыть поменять в header заголовок с name на email
// 2. Не забыть удалить отовсюду urlParameter
// 3. Навести порядок, разбить на секции и дать описание
// 4. Удалить отовсюду EnvironmentContext и файл, что содержит это внутри
// 5. Подумать насчет того, чтобы логика handleChangePassword и handleChangeEmail не срабатывала на глобальных стейтах password и email в App,
// это создает лишние операции рендеринга всех дочерних компонентов и самого компонента App
// 6. Был какой-то прием в теории, позволяющий при изменении стейта избирательно рендерить только определенные компоненты, надо посмотреть его
// 7. Удалить все ненужные файлы, те что закоментированы в index.css
// 8. Везде убрать пропсы, использовать деструктуризацию


function App() {

  const history = useHistory();
  
  //Реакт-хуки состояний
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  // const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  // const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [cards, setCards] = React.useState([]);
  // const [urlParameter, setUrlParameter] = React.useState(url);
  const [infotooltipData, setInfotooltipData] = React.useState({message:"", status:""});
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const history = useHistory();
  // console.log(`значение urlParameter внутри App сейчас такое ${urlParameter}`);
  
  //Разные функции компонента App:

  //Регистрация пользователя
  function onRegister({email, password}) {
    debugger;
    api.register(email, password)
      .then(res => {
        setCurrentUser({ ...currentUser, email, password });
        debugger;
        console.log(`Код выполнился в блоке then, результат - ${res}`);
        setInfotooltipData({
          message: 'Вы успешно зарегистрировались!',
          status: 'success'
        });
        history.push('/sign-in');
      })
      .catch(res => {
        console.log(`Код выполнился в блоке catch, результат - ${res}`);
        setInfotooltipData({
          message: 'Что-то пошло не так! Попробуйте ещё раз.',
          status: 'error'
        });
      })
  }


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
  //Сохранение текущего относительного пути для использования в других компонентах
  // const handleUrlParameter = (urlParameter) => {
  //   setUrlParameter(urlParameter);
  // };
  //Флаги-семафоры для проверки состояния "открыт/закрыт" для каждого попапа
  // const handleCaseLogin = () => {
  //   setIsLoginPopupOpen(true);
  // };
  // const handleCaseRegister = () => {
  //   setIsRegisterPopupOpen(true);
  // };
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
    setInfotooltipData({message:"", status:""});
  };

  //Эксперимент для улучшения понимания процессов
  console.log('Этот код выполнился в теле App');

  //Хук осуществляющий запрос данных с сервера
  React.useEffect(() => {
    //Тут выполняется код при рендере любого компонета Main или самого Main (если не указан конкретный компонент в конце)
    Promise.all( [api.getProfile(), api.getAllCards()] )
    .then(([currentUserObj, initialCards]) => {
      setCurrentUser(currentUserObj);
      setCards(initialCards);
      console.log(currentUserObj);
    })
    .catch(err => catchResponse(err));
    console.log('Этот код выполнился в теле App, внутри хука useEffect c параметром []');
    // console.log(currentUser);
    //return () => {
    //Код внутри return выполнится при удалении любого или указанного компонета Main
    //}
  }, []);//После запятой указывается конкретный компонет или компоненты в массиве,
  //если массив пустой то этот код исполнится один раз, если нет ничего будет рендерится
  // при каждом изменении любого компонента внутри родителя или самого родителя

  
  // React.useEffect(() => {
  //   setUrlParameter(url);
    // console.log(`значение url внутри App такое - ${url}`);

  // }, [url]);

  // React.useEffect(() => {
  //   console.log('Этот код выполнился в теле App, внутри хука useEffect c параметром [url]');
 
  // }, [url]);


  return (
    <CurrentUserContext.Provider value={currentUser}>

      {/* <EnvironmentContext.Provider value={{urlParameter, handleUrlParameter}}> */}

      <div className="page page_content_paddings">

        <Header />

        <Switch>

          <Route exact path="/">
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} forwardMainOnCardClick={handleCardClick} forwardMainOnCardLike={handleCardLike} forwardMainOnCardDelete={handleCardDelete} cards={cards}/>
          </Route>

          <Route path="/sign-in">
            <Login />
            <InfoTooltip/>
          </Route>

          <Route path="/sign-up">
            <Register onRegister={onRegister}/>
            <InfoTooltip isOpen={Boolean(infotooltipData.message)} onClose={closeAllPopups} infotooltipData={infotooltipData}/>
          </Route>

        </Switch>
      
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddCard}/>

        <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да"/>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      </div>

      {/* </EnvironmentContext.Provider> */}

    </CurrentUserContext.Provider>
  );
};


export default App;