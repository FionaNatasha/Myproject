import './header.css';
import NavLinkList from './NavLinkList';

function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    AitishNik
                </div>
                <div className="nav_link">
                   <NavLinkList {...props}/>
                </div>
            </div>
        </header>
    );
}

export default Header;