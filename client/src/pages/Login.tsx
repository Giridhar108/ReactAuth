import React, { useContext } from 'react';

import { BrowserRouter as Router, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../index";

function Login() {
  const { register, handleSubmit, reset } = useForm();
  const { store } = useContext(Context);


  const onSubmit = (data: any) => {
    console.log(data);
    store.login(data.login, data.password)
    reset();
  };

  return (

      <div className="login container">
        <div className="login__wrapper wrapper">
          <h2 className="login__title title">С возвращением</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("login")} placeholder="Введите логин" />
            <input type="password" {...register("password")} placeholder="Введите пароль" />

            <button className="login__btn btn" type="submit">
              Войти
            </button>
          </form>
          <Link className="login__link-recoverypass link-recoverypass" to="/RecoveryPass">Забыли пароль?</Link>
          <p className="login__text-signup text-signup">Еще нет аккаунта?</p>
          <Link className="login__link-signup link-signup" to="/SignUp">Зарегистрируйтесь</Link>
        </div>
      </div>
    
  );
}

export default Login;
