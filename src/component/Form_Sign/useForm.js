import { useState, useEffect } from "react";
import { loginAction, inputLoginError } from "../../store/login.reducer";

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
        ) {dispatch(loginAction(data))
           window.localStorage.setItem("token", true);
           window.localStorage.setItem("id", '23');
        } else dispatch(inputLoginError("The entered data is incorrect"))
      }
    }
  };

  return { data, handleChange, onSubmitSignIn };
};
