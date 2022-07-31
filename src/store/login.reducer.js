const TYPE_ACTION = {
    SET_MAIL: 'SET_MAIL',
    INPUT_ERROR_EMAIL: 'INPUT_ERROR_EMAIL',
    INPUT_ERROR_PASSWORD: 'INPUT_ERROR_PASSWORD',
    INPUT_ERROR_LOGIN: 'INPUT_ERROR_LOGIN',
    INPUT_RIGHT_EMAIL: 'INPUT_RIGHT_EMAIL',
    INPUT_RIGHT_PASSWORD: 'INPUT_RIGHT_PASSWORD',
    LOGOUT: 'LOGOUT'
}

const inisialState = {
    emailForm: {
        email: '',
        validateEmail: true,
        errorEmail: ''
    },
    passwordForm: {
        password: '',
        validatePassword: true,
        errorPassword: ''
    },
    errorLogin: '',
    auth: false
}

const login = (state = inisialState, action) => {
     switch (action.type) {
        case TYPE_ACTION.SET_MAIL://если пользователь зарегистрирован
            return {
                ...state,
                emailForm: {
                    ...state.emailForm,
                    email: action.payload.email,
                    validateEmail: true,
                    errorEmail: ''
                },
                passwordForm: {
                    ...state.passwordForm,
                    password: action.payload.password,
                    validatePassword: true,
                    errorPassword: ''
                },
                auth: true,
                errorLogin: ''
            };
        case TYPE_ACTION.INPUT_ERROR_EMAIL://ошибка при вводе почты, при валидации
            return {
                ...state,
                emailForm: {
                    ...state.emailForm,
                    validateEmail: false,
                    errorEmail: action.payload
                },
            };
        case TYPE_ACTION.INPUT_RIGHT_EMAIL://почта введена правльно, при валидации
            return {
                ...state,
                emailForm: {
                    ...state.emailForm,
                    validateEmail: true,
                    errorEmail: ''
                },
            };
        case TYPE_ACTION.INPUT_RIGHT_PASSWORD://пароль введен правильно, при валидации
            return {
                ...state,
                passwordForm: {
                    ...state.passwordForm,
                    validatePassword: true,
                    errorPassword: ''
                },
            };

        case TYPE_ACTION.INPUT_ERROR_PASSWORD://неверно введен пароль, при валидации
            return {
                ...state,
                passwordForm: {
                    ...state.passwordForm,
                    validatePassword: false,
                    errorPassword: action.payload
                },
            };
        case TYPE_ACTION.INPUT_ERROR_LOGIN://неверно введен пароль или имя пользователя
            return {
                ...state,
                errorLogin: action.payload,
            };
        case TYPE_ACTION.LOGOUT:// выход из профиля
            return {
                ...state,
                emailForm: {
                    ...state.emailForm,
                    email: '',
                    validateEmail: true,
                    errorEmail: ''
                },
                passwordForm: {
                    ...state.passwordForm,
                    password: '',
                    validatePassword: true,
                    errorPassword: ''
                },
                auth: false,
                errorLogin: ''

            }
        default: return state

    }
}

export const loginAction = (payload) => {
    return {
        type: TYPE_ACTION.SET_MAIL,
        payload
    }
}

export const inputEmailError = (payload) => {
    return {
        type: TYPE_ACTION.INPUT_ERROR_EMAIL,
        payload
    }
}

export const inputEmailIntroduceRight = {

    type: TYPE_ACTION.INPUT_RIGHT_EMAIL,


}

export const inputPasswordIntroduceRight = {

    type: TYPE_ACTION.INPUT_RIGHT_PASSWORD,


}
export const inputPasswordError = (payload) => {
    return {
        type: TYPE_ACTION.INPUT_ERROR_PASSWORD,
        payload
    }
}
export const inputLoginError = (payload) => {
    return {
        type: TYPE_ACTION.INPUT_ERROR_LOGIN,
        payload
    }
}
export const logOutAction = {
    type: TYPE_ACTION.LOGOUT
}
export default login