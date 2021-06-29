import React, { FC, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login, RecoveryPass, SignUp, ChangePass, Main } from "./pages";
import { Header } from "./components";

import { Context } from "./index";
import { observer } from "mobx-react-lite";

import './scss/style.scss'

const App: FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])


  if (store.isLoading) {
    return <div>Загрузка...</div>
  }

  if (!store.isAuth) {
    return (
      <div>
        <Router>
          <Header isAuth={store.isAuth} onLogout={store.logout} />
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/Login" exact>
              <Login />
            </Route>
            <Route path="/SignUp" exact>
              <SignUp />
            </Route>
            <Route path="/RecoveryPass" exact>
              <RecoveryPass />
            </Route>
            <Route path="/ChangePass" exact>
              <ChangePass />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

  return (
    <Router>
      <Header isAuth={store.isAuth} onLogout={store.logout} />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default observer(App);
