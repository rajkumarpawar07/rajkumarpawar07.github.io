
import { useState, useEffect } from "react";
import { Menu, X, Youtube, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
    { name: "Timeline", href: "#work-experience", hasNew: true },
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Story", href: "#certifications" },
    { name: "Tips", href: "#contact", hasNew: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center py-3 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className={`max-w-4xl w-full mx-auto ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-md" 
          : "bg-black/60 backdrop-blur-md"
      } rounded-full px-6 transition-all duration-300`}>
        <div className="flex items-center justify-between h-12">
          <a href="#home" className="flex items-center gap-2">
            <span className="font-body text-xl font-bold italic bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text relative">
              reality
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"></span>
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-accent font-body relative group"
              >
                {link.name}
                {link.hasNew && (
                  <span className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="relative">
              <Button variant="ghost" size="sm" className="text-sm font-medium font-body">
                More
                <span className="ml-1">▼</span>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Sun className="h-5 w-5" />
            </Button>
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
                    <span className="font-body text-xl font-bold italic bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                      reality
                    </span>
                  </a>
                </div>
                
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium py-2 transition-colors hover:text-accent font-body relative"
                    >
                      {link.name}
                      {link.hasNew && (
                        <span className="absolute top-2 -right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                      )}
                    </a>
                  ))}
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
