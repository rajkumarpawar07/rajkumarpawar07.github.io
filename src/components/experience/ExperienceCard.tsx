import React from 'react';
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';
import './Experience.css';

export interface ExperienceEntryProps {
  company: string;
  role: string;
  dates: string;
  status: 'active' | 'done';
  link?: string;
  logo?: string; // path to company logo image
  description: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

export const ExperienceCard: React.FC<ExperienceEntryProps> = ({
  company,
  role,
  dates,
  status,
  link,
  logo,
  description,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className={`exp-item ${isExpanded ? 'expanded' : ''}`} onClick={onToggle}>
      <span className={`exp-dot ${status}`} aria-hidden="true"></span>

      <div className="exp-main">
        <div className="exp-header">
          <div className="exp-company-line">
            <div className="exp-company-mark">
              {logo ? (
                <img src={logo} alt={`${company} logo`} className="exp-company-logo" />
              ) : (
                <span className="exp-company-initial">{company.slice(0, 1)}</span>
              )}
            </div>
            <h3 className="exp-company">
              {company}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-link"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${company} link`}
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </h3>
            <span className={`exp-status-tag ${status}`}>
              {status === 'active' ? (
                <>
                  <span className="exp-status-dot active-dot" aria-hidden="true"></span>
                  Active
                </>
              ) : (
                <>
                  <span className="exp-status-dot done-dot" aria-hidden="true"></span>
                  Done
                </>
              )}
            </span>
          </div>

          <div className="exp-end">
            <span className="exp-dates">{dates}</span>
            <span className="exp-chevron">{isExpanded ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>
        </div>

        <p className="exp-role">{role}</p>

        {isExpanded && (
          <div className="exp-bullets-container">
            <ul className="exp-bullets">
              {description.map((bullet, idx) => {
                const isProjectHeader = bullet.startsWith('**Project:');
                if (isProjectHeader) {
                  return (
                    <li key={idx} className="exp-project-header">
                      {renderFormattedText(bullet)}
                    </li>
                  );
                }
                return <li key={idx}>{renderFormattedText(bullet)}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
