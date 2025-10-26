
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { WorkExperience } from "@/components/WorkExperience";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <WorkExperience />
        <Certifications />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
