import './Nav.scss';

function Nav() {
  return (
    <nav className="Nav-bar">
      <div className="logo-title">
        <img src="/images/yechanKim/instagram.png" alt="instagram" />
        <h1>Instagram</h1>
      </div>
      <div className="search-box">
        <span className="material-symbols-outlined">search</span>
        <span>검색</span>
        <input className="search-input" type="text" />
      </div>
      <div className="icon-group">
        <span className="material-symbols-outlined">explore</span>
        <span className="material-symbols-outlined">favorite</span>
        <span className="material-symbols-outlined">person</span>
      </div>
    </nav>
  );
}

export default Nav;
