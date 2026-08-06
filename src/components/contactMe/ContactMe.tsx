import React from 'react';
import { FiMail } from 'react-icons/fi';
import { socialLinks } from '../../data/socialLinks';
import './ContactMe.css';

const EMAIL = 'rajkumarpawar0707@gmail.com';

export const ContactMe: React.FC = () => {
  return (
    <div className="contact-row">
      <a href={`mailto:${EMAIL}`} className="btn-outline email-btn" id="email-me-btn">
        <FiMail className="email-icon" /> Email Me
      </a>
      <span className="contact-divider" aria-hidden="true"></span>
      <div className="contact-icon-row">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-btn"
            title={link.name}
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
