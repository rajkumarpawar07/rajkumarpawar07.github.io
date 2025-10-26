import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Sun, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BrightnessControl } from "@/components/BrightnessControl";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["home", "projects", "work-experience", "certifications", "skills", "about", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Work", href: "#work-experience", id: "work-experience" },
    { name: "Certifications", href: "#certifications", id: "certifications" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <nav className="container mx-auto px-4 max-w-7xl">
        <div 
          className={`relative rounded-2xl transition-all duration-500 ${
            isScrolled 
              ? "bg-background/50 backdrop-blur-2xl border border-accent/30 shadow-xl shadow-accent/10"
              : "bg-gradient-to-r from-background/5 via-background/10 to-background/5 backdrop-blur-md border border-white/10"
          }`}
        >
          <div className="flex items-center justify-between h-16 px-6">
            {/* Logo */}
            <a 
              href="#home" 
              className="group flex items-center gap-3 relative z-10"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-accent via-accent/80 to-accent/60 shadow-lg shadow-accent/30 group-hover:shadow-accent/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Code2 className="h-5 w-5 text-white" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent group-hover:from-accent group-hover:via-accent/90 group-hover:to-accent/70 transition-all duration-300">
                Rajkumar Pawar
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl group ${
                    activeSection === link.id
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span 
                    className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      activeSection === link.id
                        ? "bg-gradient-to-r from-accent/15 via-accent/10 to-accent/15 scale-100 border border-accent/20"
                        : "bg-accent/5 scale-0 group-hover:scale-100"
                    }`}
                  />
                  {activeSection === link.id && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse" />
                  )}
                </a>
              ))}
            </div>
            
            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Brightness Control */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 rounded-xl hover:bg-accent/10 hover:text-accent transition-all duration-300 hover:scale-105"
                  >
                    <Sun className="h-4 w-4" />
                    <span className="sr-only">Adjust brightness</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 bg-background/95 backdrop-blur-xl border-accent/30 shadow-xl">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Adjust Brightness</h4>
                    <BrightnessControl />
                  </div>
                </PopoverContent>
              </Popover>
              
              {/* CTA Button */}
              <a href="#contact">
                <Button 
                  className="h-10 px-5 bg-gradient-to-r from-accent via-accent/90 to-accent/80 hover:from-accent/90 hover:via-accent/80 hover:to-accent/70 text-white font-semibold rounded-xl shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 border border-white/10"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Get In Touch
                </Button>
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-9 w-9 rounded-lg hover:bg-accent/10"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] bg-background/95 backdrop-blur-2xl border-accent/30"
              >
                <div className="flex flex-col h-full py-6">
                  {/* Mobile Logo */}
                  <div className="mb-8 pb-6 border-b border-accent/10">
                    <a href="#home" className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent/70 shadow-lg">
                        <Code2 className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-bold text-xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Rajkumar
                      </span>
                    </a>
                  </div>
                  
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-2 flex-1">
                    {navLinks.map((link, index) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className={`flex items-center justify-between text-base font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                          activeSection === link.id
                            ? "bg-accent/10 text-accent translate-x-1"
                            : "hover:bg-accent/5 hover:translate-x-1"
                        }`}
                        style={{
                          animation: `slideInRight 0.3s ease-out ${index * 0.05}s both`
                        }}
                      >
                        <span>{link.name}</span>
                        {activeSection === link.id && (
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        )}
                      </a>
                    ))}
                  </nav>
                  
                  {/* Mobile Brightness Control */}
                  <div className="mb-6 p-4 rounded-xl bg-accent/5 border border-accent/10">
                    <h4 className="text-sm font-semibold mb-3">Brightness</h4>
                    <BrightnessControl />
                  </div>
                  
                  {/* Mobile CTA */}
                  <a href="#contact" className="w-full">
                    <Button 
                      className="w-full h-12 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white font-semibold rounded-xl shadow-lg shadow-accent/25 transition-all duration-300"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Get In Touch
                    </Button>
                  </a>
                  
                  {/* Mobile Social Links */}
                  <div className="mt-6 pt-6 border-t border-accent/10">
                    <div className="flex items-center justify-center gap-4">
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                        aria-label="GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}