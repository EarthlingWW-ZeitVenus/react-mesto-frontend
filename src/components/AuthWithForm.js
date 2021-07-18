import React from 'react';
import { Link } from 'react-router-dom';


function AuthWithForm({name, title, buttonText, onSubmit, onEmailChange, onPasswordChange, email, password}) {


  return (
    <div className="auth-with-form auth-with-form_transform_position">
      <h3 className="auth-with-form__title">{title}</h3>
      <form className="auth-with-form__form" id={name} name={name} onSubmit={onSubmit} noValidate>
        <fieldset className="auth-with-form__field-container">
          <input
            className="auth-with-form__input auth-with-form__input_field_email"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            minLength="5"
            onChange={onEmailChange}
            value={email}
            required
          />
          <span
            className="auth-with-form__input-error auth-with-form__input-error_field_email"
            id="auth-with-form-email-error"> 
          </span>
          <input
            className="auth-with-form__input auth-with-form__input_field_password"
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            minLength="5"
            onChange={onPasswordChange}
            value={password}
            required
          />
          <span
            className="auth-with-form__input-error auth-with-form__input-error_field_password"
            id="auth-with-form-password-error">
          </span>
        </fieldset>
        <button className="auth-with-form__submit-button" type="submit">{buttonText}</button>
      </form>
      {
        (name === 'register') &&
        <p style={{textAlign: "center", fontSize: "14px"}}>
          Уже зарегистрированы?
          <Link style={{textDecoration: "none", color: "white"}} to="/sign-in">
            Войти
          </Link>
        </p>
      }      
    </div>   
  )

}


export default AuthWithForm;