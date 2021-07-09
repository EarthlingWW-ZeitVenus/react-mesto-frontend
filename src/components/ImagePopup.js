function ImagePopup(props) {

  console.log('Этот код выполнился в теле ImagePopup');

  return (
    <div className={`popup popup_theme_image ${props.card && 'popup_opened'}`}>
      <figure className='popup__image-figure'>
        <button className="popup__close-button popup__close-button_theme_image" type="button" onClick={props.onClose}></button>
        <img className='popup__image' src={props.card && props.card.link} alt={props.card && props.card.name} />
        <figcaption className='popup__caption'>{props.card && props.card.name}</figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup;