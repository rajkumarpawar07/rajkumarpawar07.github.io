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
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out flex justify-center ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className={`max-w-4xl w-full mx-4 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border border-border/40"
          : "bg-background/60 backdrop-blur-lg border border-border/20"
      } rounded-2xl px-6 transition-all duration-300 shadow-sm`}>
        <div className="flex items-center justify-between h-14">
          <a href="#home" className="flex items-center gap-2">
            <span className="font-anime text-lg font-semibold text-foreground">
              Rajkumar
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-9 w-9 hover:bg-accent/10"
                >
                  <Sun className="h-4 w-4" />
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
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col h-full py-4">
                <div className="mb-8">
                  <a href="#home" className="flex items-center gap-2">
                    <span className="font-anime text-xl font-semibold text-foreground">
                      Rajkumar
                    </span>
                  </a>
                </div>
                
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-base font-medium py-2 px-3 rounded-lg transition-colors hover:bg-accent/10"
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