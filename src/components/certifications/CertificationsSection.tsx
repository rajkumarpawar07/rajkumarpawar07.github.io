import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import { certificationsData } from '../../data/certifications';
import { GcpLogo, AzureLogo } from './CloudLogos';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

export const CertificationsSection: React.FC = () => {
  return (
    <section className="section-wrapper">
      <SectionTitle>Certifications</SectionTitle>

      <div className="certs-grid">
        {certificationsData.map((cert, idx) => (
          <a
            key={idx}
            href={cert.badgeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`cert-card dashed-box ${cert.provider.toLowerCase()}`}
          >
            <div className="cert-icon-box">
              {cert.provider === 'GCP' ? (
                <GcpLogo className="provider-icon gcp" />
              ) : (
                <AzureLogo className="provider-icon azure" />
              )}
            </div>

            <div className="cert-info">
              <span className="cert-provider-label">{cert.provider} credential</span>
              <h4 className="cert-title">{cert.title}</h4>
            </div>

            <div className="cert-badge-link">
              <FaAward />
              <FaExternalLinkAlt className="ext-icon" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
