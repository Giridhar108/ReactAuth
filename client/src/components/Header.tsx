import React, { useContext } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../scss/style.scss'

export interface HeaderProps {
  isAuth: boolean,
  onLogout: () => void,
}

export const Header: React.FC<HeaderProps> = ({ isAuth, onLogout }) => {

  const logout = () => {
    onLogout()
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
