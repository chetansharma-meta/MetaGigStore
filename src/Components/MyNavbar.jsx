import './nav.css';
import MainLogo from '../Assets/MetaGigStore_Full_White.png'



function MyNavbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={MainLogo} alt="MetaGigStore"/>
        </div>
        <div className="navbar__search">
          
        </div>
        <div className="navbar__login">
          <button>Login</button>
        </div>
      </nav>
    </>
  );
}

export default MyNavbar;
