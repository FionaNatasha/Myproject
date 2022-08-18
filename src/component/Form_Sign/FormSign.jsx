import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./FormSign.css";
import {useForm} from './useForm.js'
import {ValidateForm} from "./validation";

function FormSign() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.login);
  const stateOnServer = useSelector((state) => state.mongodb);

  const {data, handleChange, onSubmitSignIn} = useForm(ValidateForm,dispatch,stateOnServer)


  //при правильных данный, перенаправление на страницу Профиля
  useEffect(() => {
    if (state.auth) {
      navigate("/profile");
    }
  });
 
  return (
    <div className="form_sign">
      Вход в профиль
      <form>
        Login
        <div>
          <input
            type="text"
            name="email"
            placeholder="Введите почту"
            value={data.email}
            onChange={handleChange}
            autoComplete="email"
            className={
              state.emailForm.validateEmail ? "active" : "active_error"
            }
          />
          {!state.emailForm.validateEmail && (
            <div className="validation_error">{state.emailForm.errorEmail}</div>
          )}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Введите пароль"
            value={data.password}
            onChange={handleChange}
            autoComplete="current-password"
            className={
              state.passwordForm.validatePassword||!!state.errorLogin ? "active" : "active_error"
            }
          />
          {!state.passwordForm.validatePassword && (
            <div className="validation_error">
              {state.passwordForm.errorPassword}
            </div>
          )}
        </div>
        {state.errorLogin.length > 0 && (
          <div className="validation_error">{state.errorLogin}</div>
        )}
        <button onClick={onSubmitSignIn}>Sign in</button>
      </form>
    </div>
  );
}

export default FormSign;
