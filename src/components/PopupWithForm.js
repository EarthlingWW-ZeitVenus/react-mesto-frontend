import { Link } from 'react-router-dom';


function PopupWithForm(props) {
  console.log(`Пропс изОпен в ПопапВизФорм сейчас такой - ${props.isOpen}`);

  return (
    <div className={`popup popup_theme_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className={`popup__container popup__container_theme_${props.name}`}>
        <button className={`popup__close-button popup__close-button_theme_${props.name}`} type="button" onClick={props.onClose}></button>
        {(props.name !== 'infotooltip') && <h3 className={`popup__title popup__title_theme_${props.name}`}>{props.title}</h3>}
        <form className="popup__form" id={props.name} name={props.name} onSubmit={props.onSubmit} noValidate>
          <fieldset className={`popup__form-container popup__form-container_theme_${props.name}`}>
            {props.children}
          </fieldset>
          {(props.name !== 'infotooltip') && <button className={`popup__submit-button popup__submit-button_theme_${props.name} type="submit"`}>{props.buttonText}</button>}
        </form>
        {(props.name === 'register') && <p style={{ textAlign: "center", fontSize: "14px", marginTop: "15px" }}> Уже зарегистрированы? <Link style={{ textDecoration: "none", color: "white" }} to="/sign-in">Войти</Link></p>}
      </div>

    </div>
  )

}


export default PopupWithForm;