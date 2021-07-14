import React from 'react';
import PopupWithForm from './PopupWithForm';



function AddPlacePopup({ isOpen, onAddCard, onClose }) {

  console.log('Этот код выполнился в теле AddPlacePopup');

  const [cardTitle, setCardTitle] = React.useState('');
  const [cardUrl, setCardUrl] = React.useState('');

  function handleChangeTitle(event) {
    setCardTitle(event.target.value);
  };
  function handleChangeUrl(event) {
    setCardUrl(event.target.value);
  };
  function handleSubmit(event) {
    event.preventDefault();
    onAddCard(cardTitle, cardUrl);
  }

  React.useEffect(() => {
    setCardTitle('');
    setCardUrl('');
  }, [isOpen]);


  return (
    <PopupWithForm
      isOpen={isOpen}
      name="place"
      title="Новое место"
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_field_place-title"
        id="place-title"
        name="placetitle"
        type="text"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        value={cardTitle}
        onChange={handleChangeTitle}
        required
      />
      <span
        className="popup__input-error popup__input-error_field_place-title"
        id="place-title-error"
      >
      </span>
      <input
        className="popup__input popup__input_field_link-to-image"
        id="link-to-image" name="linktoimage"
        type="url"
        placeholder="Ссылка на картинку"
        value={cardUrl}
        onChange={handleChangeUrl}
        required
      />
      <span
        className="popup__input-error popup__input-error_field_link-to-image"
        id="link-to-image-error">
      </span>
    </PopupWithForm>
  )
}


export default AddPlacePopup;