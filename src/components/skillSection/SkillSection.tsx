import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import {
  SiOpenjdk,
  SiGo,
  SiDart,
  SiCplusplus,
  SiPython,
  SiFlutter,
  SiAndroid,
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiArgo,
  SiHelm,
  SiGrafana,
  SiPrometheus,
  SiOpentelemetry,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { FaMicrosoft } from 'react-icons/fa6';
import './SkillSection.css';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const skills: SkillItem[] = [
  { name: 'Java', icon: <SiOpenjdk />, color: '#f89820' },
  { name: 'Golang', icon: <SiGo />, color: '#00add8' },
  { name: 'Dart', icon: <SiDart />, color: '#0175c2' },
  { name: 'C++', icon: <SiCplusplus />, color: '#00599c' },
  { name: 'Python', icon: <SiPython />, color: '#3776ab' },
  { name: 'Flutter', icon: <SiFlutter />, color: '#02569b' },
  { name: 'Android', icon: <SiAndroid />, color: '#3ddc84' },
  { name: 'React Native', icon: <SiReact />, color: '#61dafb' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#5fa04e' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#f5820d' },
  { name: 'GraphQL', icon: <SiGraphql />, color: '#e10098' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169e1' },
  { name: 'Google Cloud', icon: <SiGooglecloud />, color: '#4285f4' },
  { name: 'AWS', icon: <FaAws />, color: '#ff9900' },
  { name: 'Azure', icon: <FaMicrosoft />, color: '#0078d4' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ed' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326ce5' },
  { name: 'Terraform', icon: <SiTerraform />, color: '#844fba' },
  { name: 'Jenkins', icon: <SiJenkins />, color: '#d24939' },
  { name: 'ArgoCD', icon: <SiArgo />, color: '#ef7b4d' },
  { name: 'Helm', icon: <SiHelm />, color: '#0f1689' },
  { name: 'Grafana', icon: <SiGrafana />, color: '#f46800' },
  { name: 'Prometheus', icon: <SiPrometheus />, color: '#e6522c' },
  { name: 'OpenTelemetry', icon: <SiOpentelemetry />, color: '#425cc7' },
];

export const SkillSection: React.FC = () => {
  const skillRows = [skills.slice(0, 13), skills.slice(13)];

  return (
    <section className="section-wrapper">
      <SectionTitle>My Skills</SectionTitle>

      <div className="skills-rows" aria-label="Technology skills">
        {skillRows.map((row, rowIndex) => {
          const loopingSkills = [...row, ...row];
          return (
            <div className={`skills-marquee ${rowIndex === 1 ? 'skills-marquee-reverse' : ''}`} key={rowIndex}>
              <div className="skills-track">
                {loopingSkills.map((skill, idx) => (
                  <span className="skill-pill" key={`${skill.name}-${idx}`} aria-hidden={idx >= row.length}>
                    <span className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="skill-name">{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillSection;
