function FormSign(props) {
  let { state, data, handleChange, onSubmitSignIn, buttonTitle, formTitle } =
    props;
  return (
    <div className="form_sign">
      <form>
        <div>{formTitle}</div>
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
              state.passwordForm.validatePassword || !!state.errorLogin
                ? "active"
                : "active_error"
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
        <button onClick={onSubmitSignIn}>{buttonTitle}</button>
      </form>
    </div>
  );
}

export default FormSign;
