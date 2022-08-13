import { Outlet } from 'react-router-dom'
import Header from './Header/Header';
import Footer from './Footer/Footer';


function SitePage(props) {
    return (
        < >
            <Header {...props} />
            <Outlet />
            <Footer />
        </>
    );
}

export default SitePage;