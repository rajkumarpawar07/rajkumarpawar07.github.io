import React from 'react';
import AllProjects from '../../components/projects/AllProjects';
import Footer from '../../components/footer/Footer';

export const ProjectsLayout: React.FC = () => {
  return (
    <div className="app-container">
      <AllProjects />
      <Footer />
    </div>
  );
};

export default ProjectsLayout;
