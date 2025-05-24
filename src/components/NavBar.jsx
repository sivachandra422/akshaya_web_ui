import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Akshaya</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/mirror' ? 'active' : ''}`} to="/mirror">Mirror</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/capsules' ? 'active' : ''}`} to="/capsules">Capsules</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/vitals' ? 'active' : ''}`} to="/vitals">Vitals</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/journal' ? 'active' : ''}`} to="/journal">Journal</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}