//имитирование сервера, но котором храняться данные об имени пользователя и пароля

const inisialState = [
  { email: "Admin@mail.ru", password: "12345", id: "12qw" },
  { email: "Admssn@mail.ru", password: "123sa35", id: "12yw" },
];

const mongodb = (state = inisialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mongodb;
