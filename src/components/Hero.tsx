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
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-700 to-purple-700 rounded-full opacity-100"></div>
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-background relative">
                <img 
                  src="/lovable-uploads/ec25773d-152e-4ee7-a4da-051fabdfae5f.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-anime leading-tight">
              Hi, I'm <span className="text-gradient-anime">Rajkumar Pawar</span>,
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-anime leading-tight">
            Full-Stack Developer with Cloud Engineering & DevOps Expertise.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl font-body">
            A software engineer with a passion for building efficient, scalable, and 
            elegant solutions to complex problems. I tell stories through code and create 
            digital experiences that people love.
          </p>
          
          <div className="flex items-center gap-6 mb-16">
            <a 
              href="https://x.com/Rajkuma83294456" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#ffffff] transition-colors relative group bg-background-black"
              aria-label="X"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
              </svg>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background-transparent px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md text-white">Twitter/X</span>
            </a>
            
            <a 
              href="https://www.instagram.com/r.rajkumarrr/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#E1306C] transition-colors relative group"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                <path d="M17.5 6.5L17.51 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background-transparent px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md text-white">Instagram</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/rajkumar-pawar-147000211/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0077B5] transition-colors relative group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background-transparent px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md text-white">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/rajkumarpawar07/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#333] dark:hover:text-[#f5f5f5] transition-colors relative group"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background-transparent px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md text-white">GitHub</span>
            </a>
            
            <a 
              href="https://www.youtube.com/@rajkumarpawar5494/featured" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#FF0000] transition-colors relative group"
              aria-label="YouTube "
            >
              <Youtube className="h-5 w-5" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background-transparent px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md text-white">YouTube</span>
            </a>
            
          
          </div>
          
         
        </div>
      </div>
      
      {/* Subtle background gradient effects */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
}
