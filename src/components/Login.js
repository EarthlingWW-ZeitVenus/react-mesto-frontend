import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import AuthWithForm from './AuthWithForm';
// import { useHistory } from 'react-router-dom';
// import EnvironmentContext from '../contexts/EnvironmentContext';

// import React from 'react';
// <input className="login__input login__input_field_email" id="email" name="email" type="email" placeholder="Email" minLength="5" value={cardTitle} onChange={handleChangeTitle} required />

//ToDo: посмотреть на закоментированную строчки сверху, сделать такие-же подходящие функции и стейты
function Login({ onLogin }) {
  console.log('Этот код выполнился в теле Login');

  // const history = useHistory();

  const { url } = useRouteMatch();

  console.log(url);

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
    // setEmail('');
    // setPassword('');
    onLogin({email, password});
  };


  // React.useEffect(() => {
  //   debugger;
  //   if(!isLoggedIn) {
  //   setEmail('');
  //   setPassword('');
  //   }
  // }, [isLoggedIn]);


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