import React, { useState } from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">PARTS INFO</div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <nav className="nav">
        <ul className="nav-links">
        <i className="fas fa-search"></i>
        <i className="fas fa-shopping-cart"></i>
        <i className="fas fa-user"></i>          
        </ul>
      </nav>
      <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
        <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      {mobileMenuOpen && (
        <nav className="mobile-nav">
          <ul className="mobile-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#search"><i className="fas fa-search"></i></a></li>
            <li><a href="#cart"><i className="fas fa-shopping-cart"></i></a></li>
            <li><a href="#profile"><i className="fas fa-user"></i></a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
