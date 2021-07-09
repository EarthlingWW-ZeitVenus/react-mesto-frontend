import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';


function EditProfilePopup(props) {

  console.log('Этот код выполнился в теле EditProfilePopup');

    
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  //Для первичной установки данных пользователя в поля формы при
  //монтировании компонента и/или при изменении данных пользователя
  //в глобальном стейте-контексте
  React.useEffect(() => {
    if(currentUser) {
    setName(currentUser.name);
    setDescription(currentUser.about);
    }
    else{
      setName('');
      setDescription('');
    }
  }, [currentUser, props.isOpen]);

  function handleChangeName(event) {
    setName(event.target.value);
  };
  function handleChangeDescription(event) {
    setDescription(event.target.value);
  };
  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateUser({
      name,
      about: description
    });
  }


  return (
    <PopupWithForm isOpen={props.isOpen} name="profile" title="Редактировать профиль" onClose={props.onClose} buttonText="Сохранить" onSubmit={handleSubmit}>
      <input className="popup__input popup__input_field_full-name" id="full-name" name="name" type="text" minLength="2" maxLength="40" value={name} onChange={handleChangeName} required />
      <span className="popup__input-error popup__input-error_field_full-name" id="full-name-error"></span>
      <input className="popup__input popup__input_field_profession" id="profession" name="about" type="text" minLength="2" maxLength="200" value={description} onChange={handleChangeDescription} required />
      <span className="popup__input-error popup__input-error_field_profession" id="profession-error"></span>
    </PopupWithForm>
  )  
}


export default EditProfilePopup;