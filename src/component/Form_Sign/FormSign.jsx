
import { useEffect,  useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { inputEmailError, loginAction, inputPasswordError, inputEmailIntroduceRight, inputPasswordIntroduceRight, inputLoginError } from "../../store/login.reducer";
import './FormSign.css';

function FormSign() {
    const [data, setData] = useState({ email: '', password: '' })
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const state = useSelector((state) => state.login)
    const stateOnServer = useSelector((state) => state.mongodb)


    // функция проверки, заполнена форма или нет.
    const validateForm = (value) => {
        let hasError = false, error = '';

        if (value === "") {
            hasError = true
            error = "Пустое поле. Пожайлуста, введите данные"
        } else {
            hasError = false;
            error = ''
        }

        return { hasError, error }
    }


    //проверка ввода данных в форму, если совпадает, то пользователь логиниться
    // если же нет, то высвечивается сообщение о том, что произошла ошибка
    const emailAuth = (stateOnServer, value) => {
        if (stateOnServer.email === value.email && stateOnServer.password.toString() === value.password) {
            dispatch(loginAction(value))
            window.localStorage.setItem('token', true)
        } else { debugger
            dispatch(inputLoginError('Неверные данные. Повторите еще раз'))
        }
    }

    //отработка функции при нажании на кнопку ''Войти''
    const loginSubmit = (event) => {
        event.preventDefault();
        


        const validateFormEmail = validateForm(data.email)
        const validateFormPassword = validateForm(data.password)


        if (validateFormEmail.hasError) {
            dispatch(inputEmailError(validateFormEmail.error))
        } else {
            dispatch(inputEmailIntroduceRight)
        }

        if (validateFormPassword.hasError) {
            dispatch(inputPasswordError(validateFormPassword.error))
        } else {
            dispatch(inputPasswordIntroduceRight)
        }

        if (!validateFormEmail.hasError && !validateFormPassword.hasError) {
            emailAuth(stateOnServer, data)
        }


    }

    //при правильных данный, перенаправление на страницу Профиля
    useEffect(() => {
        if (state.auth) {
            navigate('/profile');
        }
    })
    console.log(state)
    return (
        <div className="form_sign">
             Вход в профиль
            <form >
               
                <div>
                    <input
                        type='text'
                        name='email'
                        placeholder="Введите почту" value={data.email}
                        onChange={e => setData({ ...data, email: e.target.value })}
                        autoComplete="email"
                        className={state.emailForm.validateEmail ? "active" : "active_error"} />
                    {!state.emailForm.validateEmail && <div className='validation_error'>{state.emailForm.errorEmail}</div>}
                </div>

                <div>
                    <input type='password'
                        name='password'
                        placeholder="Введите пароль"
                        value={data.password}
                        onChange={e => setData({ ...data, password: e.target.value })}
                        autoComplete="current-password"
                        className={state.passwordForm.validatePassword ? "active" : "active_error"} />
                    {!state.passwordForm.validatePassword && <div className='validation_error'>{state.passwordForm.errorPassword}</div>}
                </div>
                {state.errorLogin.length > 0 && <div className='validation_error'>{state.errorLogin}</div>}
                <button onClick={loginSubmit}>Войти</button>
            </form>
        </div>
    );
}

export default FormSign;