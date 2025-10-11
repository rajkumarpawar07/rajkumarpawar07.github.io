
import { useRef, useEffect } from "react";
import { AboutHeading } from "./about/AboutHeading";
import { AboutBio } from "./about/AboutBio";
import { AboutImageGallery } from "./about/AboutImageGallery";

export function About() {
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
      id="about" 
      ref={sectionRef} 
      className="py-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <AboutHeading />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <AboutBio />
            </div>
            <div className="space-y-8">
              <AboutImageGallery />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
