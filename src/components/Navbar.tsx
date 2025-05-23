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
    { name: "About", href: "#about" },
    { name: "Work", href: "#work-experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out flex justify-center py-3 ${
        isScrolled ? "py-2" : "py-3"
      }`}
    >
      <div className={`max-w-3xl mx-auto ${
        isScrolled 
          ? "bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-cyan-800/50 backdrop-blur-md"
          : "bg-gradient-to-r from-purple-800/20 via-pink-800/20 to-cyan-700/20 backdrop-blur-md"
      } rounded-full px-6 transition-all duration-300`}>
        <div className="flex items-center justify-between h-12">
          <a href="#home" className="flex items-center gap-2 mr-8">
            <span className="font-anime text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              Rajkumar
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-6">
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
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-transparent transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                >
                  <Sun className="h-5 w-5 group-hover:text-accent transition-colors" />
                  <span className="sr-only">Adjust brightness</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="group flex flex-col h-full gap-3 p-4 rounded-lg bg-card/10 backdrop-blur-sm hover:bg-accent/5 cursor-pointer border-0">
                <div className="">
                  <h4 className="text-sm font-medium mb-2">Adjust Brightness</h4>
                  <BrightnessControl />
                </div>
              </PopoverContent>
            </Popover>
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