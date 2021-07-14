import React from 'react';


function PopupWithForm({ name, isOpen, onClose, onSubmit, children, buttonText, title }) {

  const popupWithFormRef = React.useRef();

  
  //Закрытие попапа по нажатию "Esc" и при клике по оверлею
  React.useEffect(() => {
    // debugger;
    if(!isOpen) return;
    const handleEscapeClose = (evt) => {
      if(evt.key === "Escape") {
        onClose();
      }
    };
    const handleOverlayClose = (evt) => {
      // debugger;
      if (evt.target === evt.currentTarget && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    popupWithFormRef.current.addEventListener("click", handleOverlayClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose)
    }
  }, [isOpen, onClose])
  
  
  return (
    <div
      ref={popupWithFormRef}
      className={`popup popup_theme_${name} ${isOpen && 'popup_opened'}`}
    >
      <div
        className={`popup__container popup__container_theme_${name}`}
      >
        <button
          className={`popup__close-button popup__close-button_theme_${name}`}
          type="button"
          onClick={onClose}>
        </button>
        {
          (name !== 'infotooltip') &&
          <h3 className={`popup__title popup__title_theme_${name}`}>
            {title}
          </h3>
        }
        <form
          className="popup__form"
          id={name}
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          <fieldset className={`popup__form-container popup__form-container_theme_${name}`}>
            {children}
          </fieldset>
          {
            (name !== 'infotooltip') &&
            <button className={`popup__submit-button popup__submit-button_theme_${name} type="submit"`}>
              {buttonText}
            </button>
          }
        </form>
      </div>
    </div>
  )

}


export default PopupWithForm;