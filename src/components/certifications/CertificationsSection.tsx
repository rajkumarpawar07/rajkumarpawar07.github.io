import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import { certificationsData } from '../../data/certifications';
import { GcpLogo, AzureLogo } from './CloudLogos';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const expertCerts = certificationsData.filter((cert) => cert.tier === 'expert');
const associateCerts = certificationsData.filter((cert) => cert.tier === 'associate');

const renderCertCard = (cert: (typeof certificationsData)[number], tierClass: string, idx: number) => (
  <a
    key={idx}
    href={cert.badgeUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={`cert-card polished-card ${tierClass}`}
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
);

export const CertificationsSection: React.FC = () => {
  return (
    <section className="section-wrapper">
      <SectionTitle>Certifications</SectionTitle>

      <div className="certs-groups">
        <div className="certs-group">
          <span className="certs-group-label">Professional &amp; Expert</span>
          <div className="certs-grid">
            {expertCerts.map((cert, idx) => renderCertCard(cert, 'expert-tier', idx))}
          </div>
        </div>

        <div className="certs-group">
          <span className="certs-group-label">Associate</span>
          <div className="certs-grid">
            {associateCerts.map((cert, idx) => renderCertCard(cert, '', idx))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
