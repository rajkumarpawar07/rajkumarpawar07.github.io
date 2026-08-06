import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export const PageNotFound: React.FC = () => {
  return (
    <div className="app-container" style={{ textAlign: 'center', justifyContent: 'center', minHeight: '70vh' }}>
      <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '4rem', color: 'var(--text-primary)' }}>404</h1>
      <h2 style={{ color: 'var(--text-primary)' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-secondary)' }}>The page you are looking for does not exist or has been moved.</p>
      <div style={{ marginTop: '20px' }}>
        <NavLink to="/" className="btn-solid" style={{ display: 'inline-flex', gap: '8px' }}>
          <FaHome /> Return Home
        </NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
