// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css'

const Header = () => {
  return (
    <header className="header">
      <h1>Movie Explorer</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
  );

};

export default Header;
