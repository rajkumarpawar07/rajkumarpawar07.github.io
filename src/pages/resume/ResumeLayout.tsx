import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import Footer from '../../components/footer/Footer';
import './ResumeLayout.css';

const RESUME_URL = '/resume/resume.pdf';

export const ResumeLayout: React.FC = () => {
  return (
    <div className="app-container resume-page">
      <section className="resume-section">
        <SectionTitle>Resume</SectionTitle>

        
        <a href={RESUME_URL} download className="btn-outline resume-download">
          <FaDownload /> Download PDF
        </a>

        <div className="resume-viewer dashed-box">
          <iframe src={RESUME_URL} title="Rajkumar Pawar resume" className="resume-frame">
            <p>
              Your browser cannot display the resume inline.{' '}
              <a href={RESUME_URL} download>Download the PDF instead.</a>
            </p>
          </iframe>
        </div>

        <NavLink to="/" className="btn-outline resume-back">
          <FaArrowLeft /> Back to Home
        </NavLink>
      </section>
      <Footer />
    </div>
  );
};

export default ResumeLayout;
