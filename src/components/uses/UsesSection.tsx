import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import { usesData } from '../../data/uses';
import './UsesSection.css';

export const UsesSection: React.FC = () => {
  return (
    <section className="section-wrapper">
      <SectionTitle>Stack & Gear</SectionTitle>

      <div className="uses-grid">
        {usesData.map((cat, idx) => (
          <div className="uses-card dashed-box" key={idx}>
            <h3 className="uses-category-title">{cat.category}</h3>

            <div className="uses-list">
              {cat.items.map((item, itemIdx) => (
                <div className="uses-item" key={itemIdx}>
                  <span className="uses-label">{item.label}</span>
                  <span className="uses-sep">/</span>
                  <span className="uses-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UsesSection;
