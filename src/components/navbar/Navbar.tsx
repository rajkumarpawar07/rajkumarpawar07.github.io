import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './Navbar.css';

const REPO_URL = 'https://github.com/rajkumarpawar07';

export const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <div className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Projects
          </NavLink>
          <NavLink to="/resume" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Resume
          </NavLink>
        </div>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="open-source-pill"
          title="This site is open source"
        >
          <FaStar className="pill-star" />
          <span>Open-source</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
