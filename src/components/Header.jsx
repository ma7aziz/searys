import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <nav className="navigation" aria-label='main-navigation'>
      <Link to="/">
      
      <img loading="lazy" src={logo} alt="" className="nav-logo" />
      </Link>

      <ul className='nav-links'>
        <li><Link className='nav-link' to="/">Home</Link></li>
        <li><Link className='nav-link' to="/about">Services</Link></li>
        <li><Link className='nav-link' to="/about">About</Link></li>
        <li><Link className='nav-link' to="/contact">Contact</Link></li>
      </ul>
    </nav>



    
  )

}

export default Header;