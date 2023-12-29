import { NavLink } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink className="link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/page-one">
            Page 1
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/page-two">
            Page 2
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/page-three">
            Page 3
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
