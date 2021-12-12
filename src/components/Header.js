import "./Header.css";
import punkLogo from "../assets/header/punkLogo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="punklogo" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="searchicon" />
        </div>
        <input placeholder="Collection" className="searchInput"/>
          </div>
          
          <div className="headerItems">
              <p>Drops</p>
              <p>Marketplace</p>
              <p>Create</p>
          </div>

          <div className="headerActions">
              <div className="themeSwitchContainer">
                  <img src={themeSwitchIcon} alt="" />
              </div>
          </div>

          <div className="loginButton">
                GET IN
          </div>
          
    </div>
  );
};

export default Header;
