
import { useRef, useEffect } from "react";
import { SkillsSection } from "./skills/SkillsSection";
import { TechnologiesSection } from "./skills/TechnologiesSection";

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium font-body">
            Skills
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-anime text-white">
            My Technical Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <SkillsSection />
            <TechnologiesSection />
          </div>
        </div>
      </div>
    </section>
  );
}
