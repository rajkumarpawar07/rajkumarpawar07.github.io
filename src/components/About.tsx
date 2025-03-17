
import { useRef, useEffect } from "react";
import { Check, Code, Database, Layout, Layers, Server } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: "Frontend Development", icon: <Layout className="h-5 w-5" /> },
    { name: "Backend Development", icon: <Server className="h-5 w-5" /> },
    { name: "Database Design", icon: <Database className="h-5 w-5" /> },
    { name: "API Development", icon: <Code className="h-5 w-5" /> },
    { name: "System Architecture", icon: <Layers className="h-5 w-5" /> },
    { name: "DevOps", icon: <Server className="h-5 w-5" /> },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
            About Me
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Building the Future with Code
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-6 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent/50 rounded-full blur-md opacity-70 animate-pulse"></div>
                <Avatar className="h-40 w-40 border-4 border-background relative">
                  <AvatarImage 
                    src="/lovable-uploads/ec25773d-152e-4ee7-a4da-051fabdfae5f.png" 
                    alt="Profile photo" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl">ME</AvatarFallback>
                </Avatar>
              </div>
              
              <p className="text-muted-foreground mb-6 text-center md:text-left">
                I'm a software engineer with a passion for building efficient, scalable, and 
                elegant solutions to complex problems. With a background in computer science 
                and years of hands-on experience, I've developed a deep understanding of 
                modern software development practices.
              </p>
              
              <p className="text-muted-foreground mb-6 text-center md:text-left">
                My journey in tech started when I wrote my first line of code as a teenager. 
                Since then, I've been constantly learning and adapting to new technologies 
                and methodologies. I believe in writing clean, maintainable code that stands 
                the test of time.
              </p>
              
              <p className="text-muted-foreground text-center md:text-left">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or enjoying anime. I'm always open to new opportunities 
                and challenges.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">My Skills & Expertise</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 rounded-lg border border-border transition-all hover:border-accent/50 hover:bg-accent/5"
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/10 text-accent">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mt-8 mb-6">Technologies I Work With</h3>
              
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "Next.js", "GraphQL", "MongoDB", "PostgreSQL", "AWS", "Docker", "Git"].map((tech, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm"
                  >
                    <Check className="h-3.5 w-3.5 text-accent" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
