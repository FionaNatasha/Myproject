
import {
  inputEmailError,
  inputPasswordError,
  inputEmailIntroduceRight,
  inputPasswordIntroduceRight,
  
} from "../../store/login.reducer";

const ValidateForm = (values,dispatch) => {

  let errorMessage = {};
  let errorValidation = false
  const regExp = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

  if (!values.email) {
    dispatch(inputEmailError("Empty line. Please enter data"))
    errorMessage.email=true ;
  } else if (!regExp.test(values.email)) {
    dispatch(inputEmailError("Email address is invalid"));
    errorMessage.email=true;
  } else {dispatch(inputEmailIntroduceRight);
    errorMessage.email=false }

  if (!values.password) {
   dispatch(inputPasswordError( "Empty line. Please enter data"));
   errorMessage.password=true
  } else if (values.password.length <= 4) {
    dispatch(inputPasswordError("Password must be more than 4 characters"));
    errorMessage.password=true;
  } else {dispatch(inputPasswordIntroduceRight);
    errorMessage.password=false}

  if(errorMessage.email||errorMessage.password){
    errorValidation = true
  }

  return {errorValidation}
};


export {ValidateForm}