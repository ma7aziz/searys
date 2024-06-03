import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav aria-label="Main Navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>

  ) 

}

export default Header;