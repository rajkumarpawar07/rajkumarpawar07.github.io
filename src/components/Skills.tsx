
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
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
              🚀 Skills & Technologies
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              My Technical Arsenal
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A comprehensive toolkit spanning cloud infrastructure, development, and modern technologies
            </p>
          </div>
          
          <div className="space-y-16">
            <SkillsSection />
            <TechnologiesSection />
          </div>
        </div>
      </div>
    </section>
  );
}
