import React from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="section-title-container">
      <div className="section-title-reticle">
        {/* L-shaped corner brackets — each rendered as a tiny positioned span */}
        <span className="reticle-corner tl" aria-hidden="true" />
        <span className="reticle-corner tr" aria-hidden="true" />
        <span className="reticle-corner bl" aria-hidden="true" />
        <span className="reticle-corner br" aria-hidden="true" />
        <h2 className="section-title-text">{children}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
