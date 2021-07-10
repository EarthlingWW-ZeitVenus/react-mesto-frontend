import { Link, Switch, Route } from 'react-router-dom';
import React from 'react';
import logo from '../images/logo.svg';
// import CurrentUserContext from '../contexts/CurrentUserContext';

//ToDo:
//1. Все такни перенести функцию defineLinkTitle в App - Header ничего не должен знать о том, открыт какой-либо попап или нет
//2. Сюда передать результат проверки наличия токена и использовать его для отрисовки доп. инфы


function Header({userEmail, onSignOut}) {

  const cssForLink = {
    color: "white",
    textDecoration: "none"
  }

  //Заменить name на email, когда сделаю регистрацию
  // const currentUser = React.useContext(CurrentUserContext);

  // function defineLinkTitle() {
  //   switch (true){
  //     case isLoginPopupOpen:
  //       return "Регистрация";
  //     case isRegisterPopupOpen:
  //       return "Войти";
  //     default:
  //       return "Войти";
  //   }
  // }

  // console.log(`Функция defineLinkTitle сейчас возвращает - ${defineLinkTitle()}`);
  // const { url } = useRouteMatch();
  // console.log(`url parameter in header - ${url}`);

  return (
    <header className="header header_align_center">
      <img className="logo" src={logo} alt="логотип шапки сайта" />
      <div style={{fontSize: "18px", lineHeight: "22px", display: "flex", alignItems: "center"}}>
        <Switch>
          <Route exact path="/">
            <p>{userEmail}</p>
            <button style={{marginLeft: "24px", background: "black", color: "white", border: "none", cursor: "pointer"}} onClick={onSignOut}>Выйти</button>
          </Route>
          <Route path="/sign-up">
            <Link style={cssForLink} to="/signin">Войти</Link>
          </Route>
          <Route path="/sign-in">
            <Link style={cssForLink} to="/signup">Регистрация</Link>
          </Route>
        </Switch>
      </div>
    </header>     
  )
}


export default Header;