import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-left">© {new Date().getFullYear()} Rajkumar Pawar</p>
        <p className="footer-right">
          Designed & Made with <FaHeart className="heart-icon" /> by Rajkumar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
