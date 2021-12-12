import './Header.css';
import punkLogo from '../assets/header/punkLogo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img src={punkLogo} className='punkLogo' alt="punklogo" />
        </div>
        </div>
    );    
}

export default Header;