import { NavLink } from "react-router-dom";
import FormSign from "./FormSign";
import { useDispatch, useSelector } from "react-redux";
import "./FormSign.css";
import { useForm } from "./useForm.js";
import { ValidateForm } from "./validation";

function SignUp(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.login);
  const stateOnServer = useSelector((state) => state.mongodb);

  const { data, handleChange, onSubmitSignIn } = useForm(
    ValidateForm,
    dispatch,
    stateOnServer
  );
 
  return (
    <>
      <FormSign
        state={state}
        data={data}
        handleChange={handleChange}
        onSubmitSignIn={onSubmitSignIn}
        buttonTitle={"Sign Up"}
        formTitle={"Registration"}
      />
      <div>
        Do you have an account<NavLink to="/signin">Sign In</NavLink>
      </div>
    </>
  );
}

export default SignUp;
