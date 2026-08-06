import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '../../data/projects';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Projects.css';

export const Projects: React.FC = () => {
  return (
    <section className="section-wrapper">
      <SectionTitle>My Projects</SectionTitle>

      <div className="projects-grid">
        {featuredProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>

      <div className="projects-more-bar">
        <NavLink to="/projects" className="more-projects-btn">
          More Projects <FaArrowRight />
        </NavLink>
      </div>
    </section>
  );
};

export default Projects;
