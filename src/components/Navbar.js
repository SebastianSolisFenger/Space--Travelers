import React from 'react';
import logo from '../assets/planet.png';
import routes from '../routes';

const Navbar = () => (
  <header className="containedHeader">
    <div className="logo-title">
      <img src={logo} alt="Page's Logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <nav>
      <ul className="nav-list">
        {routes.map((route) => (
          <li key={route.id}>
            <a href={route.path}>{route.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Navbar;
