import React from 'react';
import AuthWithForm from './AuthWithForm';


function Login({ onLogin }) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailChange(evt) {
    setEmail(evt.target.value)
  };

  function handlePasswordChange(evt) {
    setPassword(evt.target.value)
  };

  function handleSubmit(evt) {
    debugger;
    evt.preventDefault();
    onLogin({email, password});
  };

  
  return (
    <AuthWithForm
      name="login"
      title="Вход"
      buttonText="Войти"
      onSubmit={handleSubmit}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
    />
  )
}


export default Login;