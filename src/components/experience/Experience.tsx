import React, { useState } from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import ExperienceCard, { ExperienceEntryProps } from './ExperienceCard';
import './Experience.css';

const experiencesData: Omit<ExperienceEntryProps, 'isExpanded' | 'onToggle'>[] = [
  {
    company: 'Accenture',
    role: 'Associate Software Engineer',
    dates: 'Sep 2024 - Present',
    status: 'active',
    link: 'https://www.linkedin.com/in/rajkumarpawar07/',
    logo: '/images/companies/accenture.png',
    description: [
      '**Project: Agentic Documentation Assistant** (Dec 2025 - Present)',
      'Architected a production Agentic AI system using Google Agent Development Kit (ADK) and Model Context Protocols (MCPs) to retrieve precise answers from internal Confluence documentation, cutting manual lookup time by 70%.',
      'Built reusable Terraform IaC modules and Azure DevOps CI/CD pipelines for GCP platform, standardising provisioning across 10+ services, migrating auth to Workload Identity Federation to eliminate credential leakage, and reducing manual config errors by 80%.',
      'Engineered security data pipelines with Azure Data Factory in production; automated scheduling via Apache Airflow achieving 99.5%+ pipeline uptime.',
      '**Project: RAG-powered aircraft maintenance tool (Charlie)** (Sep 2024 - Dec 2025)',
      'Designed and deployed a production RAG-powered aircraft maintenance tool (Charlie) on Google Cloud (Vertex AI, Gemini, BigQuery) for Europe’s one of the biggest airline company’s 15,000+ engineers, enabling technicians to search part numbers, diagnose damage, and retrieve repair procedures across 550+ aircraft from Airbus, Boeing, GE, and CFM, reducing lookup time by ~60%.',
      'Architected a hybrid retrieval engine combining Vertex AI Vector Search (semantic), BM25 keyword matching (exact P/N), and BigQuery structured lookups with Reciprocal Rank Fusion and cross-encoder re-ranking, safety-critical responses with full source traceability meeting EASA Part 145 and EU AI Act compliance.',
      'Built an end-to-end document ingestion pipeline integrating OpenText Documentum with event-driven sync, ATA chapter-aware intelligent chunking, and attribute-based access control (ABAC) enforcing document-level ACLs across retrieval and generation, ensuring only approved, revision-controlled documentation surfaces to authorized roles.',
      'Implemented a multi-layer grounding verification framework with automated quality gates (near-zero hallucination rate, >99.5% part number accuracy, >95% faithfulness) within the Google GenAI Factory, accelerating development-to-production cycles by 35% through reusable RAG templates and CI/CD-integrated evaluation pipelines.',
    ],
  },
  {
    company: 'Argan Technology Services',
    role: 'Software Engineer Intern',
    dates: 'Nov 2023 - Jun 2024',
    status: 'done',
    link: 'https://github.com/rajkumarpawar07',
    logo: '/images/companies/argan.png',
    description: [
      'Engineered AEGIS, a full-stack HR management system (Flutter, FastAPI, MongoDB) for 50+ employees across 3 departments, reducing administrative tasks by 30% and publishing the app to the Google Play Store.',
      'Built major features like employee live location tracking, payroll management, time and attendance, leave management and automated backend deployment (GitHub Actions CI/CD) for FastAPI services on AWS EC2.',
    ],
  },
];

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="section-wrapper">
      <SectionTitle>Work Experience</SectionTitle>

      <div className="experience-box dashed-box">
        {experiencesData.map((exp, idx) => (
          <ExperienceCard
            key={idx}
            {...exp}
            isExpanded={expandedIndex === idx}
            onToggle={() => handleToggle(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
