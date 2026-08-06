import React from 'react';
import HeroSection from '../../components/heroSection/HeroSection';
import SkillSection from '../../components/skillSection/SkillSection';
import Experience from '../../components/experience/Experience';
import Calendar from '../../components/calendar/Calendar';
import CertificationsSection from '../../components/certifications/CertificationsSection';
import OpenSourceSection from '../../components/openSource/OpenSourceSection';
import Projects from '../../components/projects/Projects';
import Footer from '../../components/footer/Footer';

export const Home: React.FC = () => {
  return (
    <div className="app-container">
      <HeroSection />
      <SkillSection />
      <Experience />
      <Projects />
      <OpenSourceSection />
      <Calendar />
      <CertificationsSection />
      <Footer />
    </div>
  );
};

export default Home;
