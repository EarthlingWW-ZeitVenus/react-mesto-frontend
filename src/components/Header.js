import { Link, Switch, Route } from 'react-router-dom';
import React from 'react';
import logo from '../images/logo.svg';


function Header({userEmail, onSignOut}) {

  const cssForLink = {
    color: "white",
    textDecoration: "none"
  }


  return (
    <header className="header header_align_center">
      <img className="logo" src={logo} alt="логотип шапки сайта" />
      <div
        style={{
          fontSize: "18px",
          lineHeight: "22px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Switch>
          <Route exact path="/">
            <p>{userEmail}</p>
            <button
              style={{
                marginLeft: "24px",
                background: "black",
                color: "white",
                border: "none",
                cursor: "pointer"
              }}
              onClick={onSignOut}
            >
              Выйти
            </button>
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