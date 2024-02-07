import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = () => {
  return;
  <>
    <nav>
      <div className="nav_container">
        <input type="text" placeholder="Search" className="search_input" />
      </div>
      <div className="profile_container">
        <a href="#">
          <FiHeart className="nav_icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav_icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav_icons" />
        </a>
      </div>
    </nav>
  </>;
};

export default Nav;
