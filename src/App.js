
import './App.css';
import './normalize.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Main from './component/Main_Screen/Main/Main'
import News from './component/Main_Screen/News/News'
import Profile from './component/Main_Screen/Profile/Profile'
import SitePage from './component/SitePage';
import FormSign from './component/Form_Sign/FormSign';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loginAction } from './store/login.reducer';


function App() {

  const dataServer = useSelector((state) => state.mongodb)
  //создание новой переменной, которая вытягивает значение 
  //авторизации из localStorage
  const [token, setToken] = useState(() => {
  //если в localStorage есть значение token(который отвечает,
  // зарегистрирован пользователь или нет), которое равно true, то 
  // в локальное значание возращается true
    if (JSON.parse(localStorage.getItem('token'))) {
      return true
    }
    //если в localSrorage нет значения token, или есть, но он равен false,
    //то создается token c ключом false, а в локальное значение возращается false
    else {
      localStorage.setItem('token', false)
      return false
    }
  })
  const isAuth = useSelector((state) => state.login.auth)
  const dispatch = useDispatch()



  useEffect(() => {
    //перезагружка страницы после каждого изменения локального token
    if (token) { dispatch(loginAction(dataServer)) }
  },[token]
  )


  console.log('token1', token)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SitePage isAuth={isAuth} />}>
          <Route index element={<Main />} />
          <Route path='news' element={<News />} />
          <Route
            path="profile"
            element={!isAuth ? (
              <Navigate replace to="/login" />
            ) : (
              <Profile />
            )
            }
          />
          <Route path='login' element={<FormSign />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
