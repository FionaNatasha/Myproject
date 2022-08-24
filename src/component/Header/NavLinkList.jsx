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
     <NavLink to='/'>MAIN</NavLink>
     <NavLink to='/news'>TOURS</NavLink>
     <NavLink to='/profile'>PROFILE</NavLink>
     {props.isAuth&&<NavLink to='/signin' onClick={logOut}>LOGOUT</NavLink>}
    </>
  );
}

export default NavLinkList;
