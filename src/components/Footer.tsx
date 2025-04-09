
import { Code, Github, Heart, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"> 
            <div className="mb-6 md:mb-0">
              <a href="#home" className="flex items-center gap-2 mb-4">
                <Code className="h-6 w-6 text-accent" />
                <span className="font-display text-xl font-bold">Rajkumar Pawar</span>
              </a>
              
              <p className="text-muted-foreground max-w-md">
                Building the digital future, one line of code at a time.
                Let's create something amazing together.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <h3 className="text-sm font-semibold mb-4">Navigation</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold mb-4">Social</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
                    >
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold mb-4">Contact</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="rajkumarpawar0707@gmail.com" 
                      className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          
          <div className="pt-8 border-t border-border text-center sm:flex sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Rajkumar Pawar. All rights reserved.
            </p>
            
            <p className="mt-4 sm:mt-0 text-sm text-muted-foreground flex items-center justify-center gap-1">
              Made with 
              <Heart className="h-4 w-4 text-accent animate-pulse" />
              and code
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
