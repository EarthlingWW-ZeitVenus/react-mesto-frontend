import AuthWithForm from './AuthWithForm';
// import { useRouteMatch } from 'react-router-dom';
import React from 'react';
// import EnvironmentContext from '../contexts/EnvironmentContext';
// <input className="login__input login__input_field_email" id="email" name="email" type="email" placeholder="Email" minLength="5" value={cardTitle} onChange={handleChangeTitle} required />

//ToDo: посмотреть на закоментированную строчку, сделать такие-же подходящие функции и стейты
function Register({onRegister}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

//   const { url } = useRouteMatch();

  console.log('Этот код выполнился в теле Register');
//   console.log(`isOpen в теле Register сейчас такой - ${isOpen}`);

  function handleEmailChange(evt) {
    setEmail(evt.target.value)
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({email, password});
  }

//   const { url } = useRouteMatch();
//   const {urlParameter, handleUrlParameter} = React.useContext(EnvironmentContext);

//   React.useEffect(() => {
//     onRegister();
//   }, );


  return (
    <AuthWithForm name="register" title="Регистрация" buttonText="Зарегистрироваться" onSubmit={handleSubmit} onEmailChange={handleEmailChange} onPasswordChange={handlePasswordChange} />
  )
}
  
  
export default Register;