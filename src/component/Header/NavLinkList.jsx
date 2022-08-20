import './header.css';
import {NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logOutAction } from '../../store/login.reducer';

function NavLinkList(props) {

  const dispatch = useDispatch()
  const logOut = ()=>{
  dispatch(logOutAction)
  localStorage.setItem('token',false)
  }
  return (
    <>
     <NavLink to='/'>На главную</NavLink>
     <NavLink to='/news'>Туры</NavLink>
     <NavLink to='/profile'>Профиль</NavLink>
     {props.isAuth&&<NavLink to='/signin' onClick={logOut}>Выйти</NavLink>}
    </>
  );
}

export default NavLinkList;
