
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Hero() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full-Stack Developer with Cloud Engineering & DevOps Expertise";
  const animationSpeed = 50; // ms per character
  
  // Typing animation effect
  useEffect(() => {
    if (!isAnimating) return;
    
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, animationSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      // Once typing is complete, wait before starting over
      const timeout = setTimeout(() => {
        setDisplayText("");
      }, 3000);
      
      return () => clearTimeout(timeout);
    }
  }, [displayText, isAnimating]);

  // Start animation when component mounts
  useEffect(() => {
    setIsAnimating(true);
    return () => setIsAnimating(false);
  }, []);

  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up font-anime">
            Rajkumar Pawar
          </h1>
          
          <div className="flex justify-center items-center mb-8 text-xl md:text-2xl animate-slide-up animation-delay-100">
            <span className="font-bold transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 font-anime">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200 font-anime">
            Code, Cloud & Scalability – My Passion, Your Solution
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up animation-delay-300">
            <Button className="anime-button min-w-[160px] font-anime" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button variant="outline" className="min-w-[160px] font-anime" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 animate-fade-in animation-delay-400">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Anime-themed decorative elements */}
      <div className="absolute top-1/4 left-8 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-8 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-300"></div>
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/5 rounded-full animate-spin-slow"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/5 rounded-full animate-spin-slow"></div>
    </section>
  );
}
