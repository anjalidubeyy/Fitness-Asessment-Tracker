import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Import styles

const Header = () => {
  return (
    <header className="header">
      <div className="logo">FAT</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact-us">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
