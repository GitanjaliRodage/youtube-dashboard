import "./Navbar.css";
import { MdMenu, MdMic } from "react-icons/md";
import {
  FaYoutube,
  FaSearch,
  FaVideo,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <MdMenu className="menu-icon" />
        <FaYoutube className="youtube-icon" />
        <h2>YouTube</h2>
      </div>

      <div className="nav-center">
        <input type="text" placeholder="Search" />
        <button className="search-btn">
          <FaSearch />
        </button>
        <button className="mic-btn">
          <MdMic />
        </button>
      </div>

      <div className="nav-right">
        <FaVideo />
        <FaBell />
        <FaUserCircle />
      </div>
    </nav>
  );
}

export default Navbar;