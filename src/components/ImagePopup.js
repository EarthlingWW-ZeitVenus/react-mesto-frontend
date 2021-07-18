function ImagePopup({card, onClose}) {

  // console.log('Этот код выполнился в теле ImagePopup');

  return (
    <div className={`popup popup_theme_image ${card && 'popup_opened'}`}>
      <figure className='popup__image-figure'>
        <button className="popup__close-button popup__close-button_theme_image" type="button" onClick={onClose}></button>
        <img className='popup__image' src={card && card.link} alt={card && card.name} />
        <figcaption className='popup__caption'>{card && card.name}</figcaption>
      </figure>
    </div>
  )
}


export default ImagePopup;