import AuthWithForm from './AuthWithForm';
import React from 'react';


function Register({onRegister}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  function handleEmailChange(evt) {
    setEmail(evt.target.value)
  };

  function handlePasswordChange(evt) {
    setPassword(evt.target.value)
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({email, password});
  };


  return (
    <AuthWithForm
      name="register"
      title="Регистрация"
      email={email}
      password={password}
      buttonText="Зарегистрироваться"
      onSubmit={handleSubmit}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
    />
  )
}
  
  
export default Register;