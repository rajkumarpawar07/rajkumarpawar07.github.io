import { useState, useEffect } from "react";
import { Menu, X, Youtube, Sun } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Work", href: "#work-experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3" : "py-6"
      }`}
    >
      <div className={`max-w-5xl w-full mx-auto px-6 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      } transition-all duration-500`}>
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="group flex items-center gap-2">
            <span className="font-anime text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent group-hover:from-primary/80 group-hover:to-primary/50 transition-all duration-300">
              Rajkumar
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
              </a>
            ))}
            
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 rounded-full hover:bg-accent/10 transition-colors duration-300"
                >
                  <Sun className="h-5 w-5" />
                  <span className="sr-only">Adjust brightness</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Adjust Brightness</h4>
                  <BrightnessControl />
                </div>
              </PopoverContent>
            </Popover>
          </div>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col h-full py-6">
                <div className="mb-8">
                  <a href="#home" className="flex items-center gap-2">
                    <span className="font-anime text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      Rajkumar
                    </span>
                  </a>
                </div>
                
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-base font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:bg-accent/10 hover:translate-x-1"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                
                <div className="mt-6 px-2">
                  <h4 className="text-sm font-medium mb-2">Adjust Brightness</h4>
                  <BrightnessControl />
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-center gap-6 pt-8">
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}