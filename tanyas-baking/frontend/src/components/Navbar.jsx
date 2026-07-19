import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function LogoBadge() {
  return (
      <img 
        src = "/images/TanyaBaking logo.jpg"
        alt = "Bakery logo"
        className="logo-badge" 
      />
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <LogoBadge />
          Tanya's Baking
        </NavLink>

        <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          ☰
        </button>

        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/classes" onClick={() => setOpen(false)}>Classes</NavLink></li>
          <li className="dropdown">
            <NavLink to="/our-cakes" onClick={() => setOpen(false)}>Our Cakes</NavLink>
            <span className="dropdown-caret">▾</span>
            <ul className="dropdown-menu">
              <li><NavLink to="/our-cakes/birthday-cakes" onClick={() => setOpen(false)}>Birthday Cakes</NavLink></li>
              <li><NavLink to="/our-cakes/wedding-cakes" onClick={() => setOpen(false)}>Wedding Cakes</NavLink></li>
              <li><NavLink to="/our-cakes/theme-cakes" onClick={() => setOpen(false)}>Theme Cakes</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
          <li className="navbar-search" aria-hidden="true">🔍</li>
        </ul>
      </div>
    </nav>
  );
}
