
import { Figma, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Simple fade-in animation effect
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative pt-36 pb-12 md:pt-48 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent">
              <img 
                src="/lovable-uploads/ec25773d-152e-4ee7-a4da-051fabdfae5f.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-anime leading-tight">
              Hi, I'm <span className="text-gradient-anime">Rajkumar Pawar</span>,
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-anime leading-tight">
            Full-Stack Developer with Cloud Engineering & DevOps Expertise
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl font-body">
            A software engineer with a passion for building efficient, scalable, and 
            elegant solutions to complex problems. I tell stories through code and create 
            digital experiences that people love.
          </p>
          
          <div className="flex items-center gap-6 mb-16">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                <path d="M17.5 6.5L17.51 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            
            <a 
              href="https://figma.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Figma"
            >
              <Figma className="h-5 w-5" />
            </a>
          </div>
          
          <p className="text-lg mb-4 font-body">
            Building what I love at <a href="#work-experience" className="text-accent hover:underline">my projects</a>
          </p>
          
          <div className="flex flex-wrap gap-8 items-center">
            <img src="/lovable-uploads/c1eea56e-ff12-40c5-aa19-4e6c440e24a0.png" alt="Companies" className="max-h-8 opacity-70" />
          </div>
        </div>
      </div>
      
      {/* Subtle background gradient effects */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
}
