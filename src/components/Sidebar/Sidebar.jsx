import "./Sidebar.css";
import {
  FaHome,
  FaFire,
  FaGamepad,
  FaMusic,
  FaNewspaper,
  FaGraduationCap,
  FaPodcast,
  FaFilm
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="menu-item">
        <FaHome />
        <span>Home</span>
      </div>

      <div className="menu-item">
        <FaFire />
        <span>Trending</span>
      </div>

      <div className="menu-item">
        <FaMusic />
        <span>Music</span>
      </div>

      <div className="menu-item">
        <FaGamepad />
        <span>Gaming</span>
      </div>

      <div className="menu-item">
        <FaFilm />
        <span>Movies</span>
      </div>

      <div className="menu-item">
        <FaNewspaper />
        <span>News</span>
      </div>

      <div className="menu-item">
        <FaGraduationCap />
        <span>Education</span>
      </div>

      <div className="menu-item">
        <FaPodcast />
        <span>Podcasts</span>
      </div>
    </div>
  );
}

export default Sidebar;