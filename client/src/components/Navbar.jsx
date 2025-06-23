import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // hamburger icons

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="main-header">
      <div className="container nav-container">
        <div className="logo-brand">
          <NavLink to="/admin" onClick={closeMenu}>Nedariya Amir</NavLink>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`navbar ${isOpen ? "active" : ""}`}>
          <ul>
            <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/service" onClick={closeMenu}>Services</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>

            {isLoggedIn ? (
              <li><NavLink to="/logout" onClick={closeMenu}>Logout</NavLink></li>
            ) : (
              <>
                <li><NavLink to="/register" onClick={closeMenu}>Register</NavLink></li>
                <li><NavLink to="/login" onClick={closeMenu}>Login</NavLink></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
