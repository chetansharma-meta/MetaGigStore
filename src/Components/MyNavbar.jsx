import './nav.css';
import SearchBar from './Searchbar';


function MyNavbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="navbar__search">
          <SearchBar />
        </div>
        <div className="navbar__login">
          <button>Login</button>
        </div>
      </nav>
    </>
  );
}

export default MyNavbar;
