
import { useRef, useEffect, useState } from "react";
import { Code, Database, Layout, Layers, Server, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [autoPlay, setAutoPlay] = useState(true);
  
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

  // Gallery images
  const galleryImages = [
    {
      src: "/lovable-uploads/ec25773d-152e-4ee7-a4da-051fabdfae5f.png",
      alt: "Me working on a project"
    },
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      alt: "Coding session"
    },
    {
      src: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1000&auto=format&fit=crop",
      alt: "At a tech conference"
    },
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
      alt: "Client meeting"
    }
  ];

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
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium font-anime">
            About Me
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-anime text-white">
            Code, Cloud & Scalability – My Passion, Your Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-6 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-md opacity-70 animate-pulse"></div>
                <Avatar className="h-40 w-40 border-4 border-background relative">
                  <AvatarImage 
                    src="/lovable-uploads/ec25773d-152e-4ee7-a4da-051fabdfae5f.png" 
                    alt="Profile photo" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl">ME</AvatarFallback>
                </Avatar>
              </div>
              
              <p className="text-muted-foreground mb-6 text-center md:text-left font-body">
                I'm a software engineer with a passion for building efficient, scalable, and 
                elegant solutions to complex problems. With a background in computer science 
                and years of hands-on experience, I've developed a deep understanding of 
                modern software practices.
              </p>
              
              <p className="text-muted-foreground mb-6 text-center md:text-left font-body">
                My journey in tech started when I wrote my first line of code as a teenager. 
                Since then, I've been constantly learning and adapting to new technologies 
                and methodologies. I believe in writing clean, maintainable code that stands 
                the test of time.
              </p>
              
              <p className="text-muted-foreground text-center md:text-left font-body">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or enjoying anime. I'm always open to new opportunities 
                and challenges.
              </p>
              
              {/* Photo Gallery */}
              <div className="mt-12 w-full">
                <h3 className="text-xl font-semibold mb-6 font-anime text-center md:text-left">My Journey</h3>
                <div className="relative rounded-lg overflow-hidden bg-card/60 backdrop-blur-sm border border-border p-1">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                    autoplay={autoPlay}
                    onMouseEnter={() => setAutoPlay(false)}
                    onMouseLeave={() => setAutoPlay(true)}
                  >
                    <CarouselContent>
                      {galleryImages.map((image, index) => (
                        <CarouselItem key={index} className="basis-full">
                          <div className="relative overflow-hidden rounded-md aspect-video">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 border-none text-white" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 border-none text-white" />
                  </Carousel>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 font-anime">My Skills & Expertise</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/60 backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-accent/5"
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/10 text-accent">
                      {skill.icon}
                    </div>
                    <span className="font-medium font-body">{skill.name}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mt-8 mb-6 font-anime">Technologies I Work With</h3>
              
              <div className="flex flex-wrap gap-2">
                {[
                  {name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg"},
                  {name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg"},
                  {name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"},
                  {name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"},
                  {name: "GraphQL", logo: "https://cdn.worldvectorlogo.com/logos/graphql.svg"},
                  {name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"},
                  {name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg"},
                  {name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg"},
                  {name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker-3.svg"},
                  {name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg"}
                ].map((tech, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-body"
                  >
                    <img src={tech.logo} alt={tech.name} className="h-4 w-4" />
                    {tech.name}
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
