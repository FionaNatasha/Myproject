//имитирование сервера, но котором храняться данные об имени пользователя и пароля

const inisialState = {
    email: "Admin",
    password: 12345,
}

const mongodb = (state = inisialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default mongodb