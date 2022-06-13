import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';
import routes from '../routes';
import './Navbar.css';

const Navbar = () => (
  <header className="containedHeader">
    <div className="logo-title">
      <img src={logo} className="img-logo" alt="Page's Logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <nav>
      <ul className="nav-list">
        {routes.map((route) => (
          <li key={route.id}>
            <NavLink to={route.path}>{route.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Navbar;
