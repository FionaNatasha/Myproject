import { NavLink, useNavigate } from "react-router-dom";
import FormSign from "./FormSign";
import { useDispatch, useSelector } from "react-redux";
import "./FormSign.css";
import { useForm } from "./useForm.js";
import { ValidateForm } from "./validation";
import { useEffect } from "react";

function SignUp(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.login);
  const stateOnServer = useSelector((state) => state.mongodb);
  const navigate = useNavigate();
  const { data, handleChange, onSubmitSignUp } = useForm(
    ValidateForm,
    dispatch,
    stateOnServer
  );

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
        onSubmitSignIn={onSubmitSignUp}
        buttonTitle={"Sign Up"}
        formTitle={"Registration"}
      />
      <div className="navlink_redirect">
        Do you have an account? <NavLink to="/signin">Sign In</NavLink>
      </div>
      </div>
  );
}

export default SignUp;
