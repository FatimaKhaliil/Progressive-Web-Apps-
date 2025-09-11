import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" data-test="navbar">
      <h1 className="logo" data-test="logo">My Liste</h1>
      
      <ul className={`nav-links ${isOpen ? 'open' : ''}`} data-test="nav-links">
        <li><Link to="/" data-test="link-home">Home</Link></li>
        <li><Link to="/about" data-test="link-about">About</Link></li>
        <li><Link to="/todos" data-test="link-todos">Todo List</Link></li>
      </ul>

      <div className="hamburger" onClick={toggleMenu} data-test="hamburger-menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
