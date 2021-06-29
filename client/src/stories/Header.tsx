import React, { useContext } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Context } from "../index";

export interface HeaderProps {
  isAuth: boolean,
}

export const Header: React.FC<HeaderProps> = ({ isAuth }) => {
  const { store } = useContext(Context);

  const logout = () => {
    store.logout()
  }

  return (
    <Router>
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <Link className="header__left" to="/">Главная</Link>
            {!isAuth && (
              <div className="header__right">
                <div className="header__login">
                  <Link to="/Login">Войти</Link>
                </div>
                <div className="header__signup">
                  <Link to="/SignUp">Зарегистрироваться</Link>
                </div>
              </div>
            )}

            {isAuth && (
              <div className="header__logout" onClick={logout}>
                Выйти
              </div>
            )}

          </div>
        </div>
      </div>
    </Router>
  );
}
