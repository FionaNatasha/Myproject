import { NavLink } from 'react-router-dom';
import './header.css';
import NavLinkList from './NavLinkList';

function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <NavLink to='/'>
                    AitishNik
                    </NavLink>
                </div>
                <div className="nav_link">
                   <NavLinkList {...props}/>
                </div>
            </div>
        </header>
    );
}

export default Header;