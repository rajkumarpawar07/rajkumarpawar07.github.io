
import { useState, useEffect } from "react";
import { Code, Menu, X, Youtube, Globe, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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
    { name: "About", href: "#about" },
    { name: "Work", href: "#work-experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "py-3 bg-black/80 backdrop-blur-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="font-anime text-2xl font-bold italic bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              Rajkumar
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-accent font-anime"
              >
                {link.name}
              </a>
            ))}
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="sm" className="font-anime">
                  More
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-40 p-2">
                <div className="flex flex-col gap-1">
                  <a href="#" className="px-2 py-1.5 text-sm rounded-md hover:bg-accent/10 transition-colors">
                    Resume
                  </a>
                  <a href="#" className="px-2 py-1.5 text-sm rounded-md hover:bg-accent/10 transition-colors">
                    Blog
                  </a>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
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
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Globe className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col h-full py-4">
                <div className="mb-8">
                  <a href="#home" className="flex items-center gap-2">
                    <span className="font-anime text-xl font-bold italic bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                      Rajkumar
                    </span>
                  </a>
                </div>
                
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium py-2 transition-colors hover:text-accent font-anime"
                    >
                      {link.name}
                    </a>
                  ))}
                  <a href="#" className="text-lg font-medium py-2 transition-colors hover:text-accent font-anime">
                    Resume
                  </a>
                  <a href="#" className="text-lg font-medium py-2 transition-colors hover:text-accent font-anime">
                    Blog
                  </a>
                </nav>
                
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
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
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
