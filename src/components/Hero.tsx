
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium animate-fade-in">
            Software Engineer & Developer
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            Crafting Digital Experiences with Code & Creativity
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-100">
            Hi, I'm a passionate software engineer who transforms ideas into elegant, 
            efficient solutions. I specialize in building modern web applications with
            cutting-edge technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up animation-delay-200">
            <Button className="anime-button min-w-[160px]" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button variant="outline" className="min-w-[160px]" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 animate-fade-in animation-delay-300">
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
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 w-24 h-24 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-300"></div>
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/5 rounded-full animate-spin-slow"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/5 rounded-full animate-spin-slow"></div>
    </section>
  );
}
