import React from 'react';
import PopupWithForm from './PopupWithForm';


function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose }) {

  console.log('Этот код выполнился в теле EditAvatarPopup');

  const inputAvatarRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar({
      avatar: inputAvatarRef.current.value
    });
    inputAvatarRef.current.value='';
  }


  return (
    <PopupWithForm
      isOpen={isOpen}
      name="avatar"
      title="Обновить аватар"
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        ref={inputAvatarRef}
        className="popup__input popup__input_field_link-to-avatar"
        id="link-to-avatar"
        name="linktoavatar"
        type="url"
        placeholder="Укажите ссылку на новый аватар"
        required
      />
    </PopupWithForm>
  )
}


export default EditAvatarPopup;