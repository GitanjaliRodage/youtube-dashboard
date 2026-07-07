import "./Navbar.css";
import { FaBars, FaSearch, FaMicrophone, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <FaBars className="icon" />
        <h2 className="logo">YouTube</h2>
      </div>

      <div className="nav-center">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        />
        <button className="search-btn">
          <FaSearch />
        </button>
        <FaMicrophone className="icon mic" />
      </div>

      <div className="nav-right">
        <FaUserCircle className="profile" />
      </div>
    </nav>
  );
}

export default Navbar;