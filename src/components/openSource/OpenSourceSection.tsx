import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import SectionTitle from '../sectionTitle/SectionTitle';
import './OpenSourceSection.css';

const REPOSITORY_URL = 'https://github.com/vitali87/code-graph-rag';

export const OpenSourceSection: React.FC = () => (
  <section className="section-wrapper">
    <SectionTitle>Open-source contributions </SectionTitle>
    <a href={REPOSITORY_URL} target="_blank" rel="noopener noreferrer" className="open-source-card dashed-box">
      <span className="open-source-icon"><FaGithub /></span>
      <span className="open-source-copy">
        <strong>vitali87/code-graph-rag</strong>
        <span>Open-source contribution · Code graph RAG for repositories</span>
      </span>
      <FaExternalLinkAlt className="open-source-external" aria-hidden="true" />
    </a>
  </section>
);

export default OpenSourceSection;
