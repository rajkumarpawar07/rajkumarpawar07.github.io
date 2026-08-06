import React from 'react';
import UsesSection from '../../components/uses/UsesSection';
import Footer from '../../components/footer/Footer';

export const UsesLayout: React.FC = () => {
  return (
    <div className="app-container">
      <UsesSection />
      <Footer />
    </div>
  );
};

export default UsesLayout;
