import React from 'react';
// import { useRouteMatch } from 'react-router-dom';
import AuthWithForm from './AuthWithForm';
// import EnvironmentContext from '../contexts/EnvironmentContext';

// import React from 'react';
// <input className="login__input login__input_field_email" id="email" name="email" type="email" placeholder="Email" minLength="5" value={cardTitle} onChange={handleChangeTitle} required />

//ToDo: посмотреть на закоментированную строчки сверху, сделать такие-же подходящие функции и стейты
function Login({isOpen, onLogin}) {
  console.log('Этот код выполнился в теле Login');

  function onSubmit() {

  }
//   const { url } = useRouteMatch();
//   const {urlParameter, handleUrlParameter} = React.useContext(EnvironmentContext);

//   React.useEffect(() => {
    // onLogin();
    // console.log(`Пропс изОпен в теле Логин сейчас такой - ${isOpen}`);
    // if ( !(urlParameter === '/sign-in') ) {  
    // console.log('Этот код должен выполянтся не более одного раза в теле Login, внутри хука useEffect без параметров');
    // handleUrlParameter(url);
    // };
    // console.log(urlParameter);
//   }, );
  
  return (
    <AuthWithForm name="login" title="Вход" buttonText="Войти" onSubmit={onSubmit} />
  )
}


export default Login;