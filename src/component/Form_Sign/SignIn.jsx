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
    <div className="form">
      <FormSign
        state={state}
        data={data}
        handleChange={handleChange}
        onSubmitSignIn={onSubmitSignIn}
        buttonTitle = {"Sign in"}
        formTitle={"Authorization"}

      />
       <div className="navlink_redirect">
        Are you not registred? Register <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </div>
  );
}

export default SignIn;
