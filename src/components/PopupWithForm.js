function PopupWithForm(props) {

  return (
    <div className={`popup popup_theme_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className={`popup__container popup__container_theme_${props.name}`}>
        <button className={`popup__close-button popup__close-button_theme_${props.name}`} type="button" onClick={props.onClosePopup}></button>
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" id={props.name} name={props.name} onSubmit={props.onSubmit} noValidate>
          <fieldset className="popup__form-container">
            {props.children}
          </fieldset>
          <button className={`popup__submit-button popup__submit-button_theme_${props.name} type="submit"`}>{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
  
}
  
  
export default PopupWithForm;