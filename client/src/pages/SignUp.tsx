import React, { useContext } from 'react';

import { useForm } from "react-hook-form";
import { Context } from "../index";

interface data {
  email: string;
  password: string;
  confirm_password: string;
  login: string
}

function SignUp() {
  const { register, handleSubmit, reset } = useForm();
  const { store } = useContext(Context);

  const onSubmit = (data: data) => {
    if (data.password === data.confirm_password) {
      console.log(data.login, data.email, data.password)
      store.registration(data.login, data.email, data.password)
    }
    reset();
  };

  return (
    <div className="signup container">
      <div className="signup__wrapper wrapper">
        <h2 className="signup__title title">Создай свой аккаунт</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("login")} placeholder="Введите логин" required />
          <input {...register("email")} placeholder="Введите почту" required />
          <input
            type="password"
            {...register("password")}
            placeholder="Введите пароль"
            required
          />
          <input
            type="password"
            {...register("confirm_password")}
            placeholder="Подтверждение пароля"
            required
          />

          <input className="form__check-text" type="checkbox" id="check" required />
          <label className="form__check" htmlFor="check">
            Я согласен с условиями обработки и исползования персональных данных
          </label>

          <button className="signup__btn btn" type="submit">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
