import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,NavLink } from "react-router-dom";
import "./FormSign.css";
import FormSign from "./FormSign";
import { useForm } from "./useForm.js";
import { ValidateForm } from "./validation";


function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.login);
  const stateOnServer = useSelector((state) => state.mongodb);

  const { data, handleChange, onSubmitSignIn } = useForm(
    ValidateForm,
    dispatch,
    stateOnServer
  );

  //при правильных данный, перенаправление на страницу Профиля
  useEffect(() => {
    if (state.auth) {
      navigate("/profile");
    }
  });

  return (
    <>
      <FormSign
        state={state}
        data={data}
        handleChange={handleChange}
        onSubmitSignIn={onSubmitSignIn}
        buttonTitle = {"Sign in"}
        formTitle={"Authorization"}

      />
       <div>
        You are not registred? Register <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </>
  );
}

export default SignIn;
