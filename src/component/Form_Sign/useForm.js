import { useState, useEffect } from "react";
import { loginAction, inputLoginError } from "../../store/login.reducer";
import { addUserAction } from "../../store/mongodb";

export const useForm = (ValidateForm, dispatch, stateOnServer) => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmitSignIn = (e) => {
    e.preventDefault();
    const { errorValidation } = ValidateForm(data, dispatch);
    if (!errorValidation) {
      for (let i = 0; i < stateOnServer.length; i++) {
        if (
          stateOnServer[i].email === data.email &&
          stateOnServer[i].password === data.password
        ) {
          dispatch(loginAction(data));
          window.localStorage.setItem("token", true);
        } else dispatch(inputLoginError("The entered data is incorrect"));
      }
    }
  };

  const onSubmitSignUp = (e) => {
    e.preventDefault();
    const { errorValidation } = ValidateForm(data, dispatch);

    if (!errorValidation) {
      let adressMatch = false;
      for (let i = 0; i < stateOnServer.length; i++) {
        if (stateOnServer[i].email === data.email) {
           adressMatch = true;
          dispatch(inputLoginError("The user with this email exists"));
          break;
        }
      }
      if (!adressMatch) {
        dispatch(loginAction(data));
        dispatch(addUserAction(data));
        window.localStorage.setItem("token", true);
      }
    }
  };
  return { data, handleChange, onSubmitSignIn, onSubmitSignUp };
};
