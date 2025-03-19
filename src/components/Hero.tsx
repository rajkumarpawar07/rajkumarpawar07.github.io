
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Simple fade-in animation effect
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up font-anime">
            Rajkumar Pawar
          </h1>
          
          <div className="flex justify-center items-center mb-8 text-xl md:text-2xl">
            <div className={`font-bold transition-all duration-700 ease-in-out text-white font-anime opacity-0 ${isVisible ? 'opacity-100' : ''}`}>
              Full-Stack Developer with Cloud Engineering & DevOps Expertise
              <span className="animate-pulse inline-block ml-1">|</span>
            </div>
          </div>
          
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
