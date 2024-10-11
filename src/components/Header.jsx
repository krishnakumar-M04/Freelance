import { NavLink } from "react-router-dom";
import "../components/Header.scss";
const Header = () => {
  return (
    <>
      <nav className="header-nav fixed top-0 left-0 right-0 z-10 cursor-pointer flex flex-wrap justify-between items-center bg-white shadow-md">
        
        <NavLink to="/" className="name">Aqura</NavLink>
              <ul className="flex flex-wrap mr-16 "  >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/team">Team</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
