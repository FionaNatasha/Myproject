//имитирование сервера, но котором храняться данные об имени пользователя и пароля
const ADD_USER = "ADD_USER"

const inisialState = [
  { email: "Admin@mail.ru", password: "12345", id: "12qw" },
  { email: "Admssn@mail.ru", password: "123sa35", id: "12yw" },
];

const mongodb = (state = inisialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return[...state.concat(action.payload)]
    default:
      return state;
  }
};

export const addUserAction = (payload) => {
  return{
    type:ADD_USER,
    payload
  }
}

export default mongodb;
