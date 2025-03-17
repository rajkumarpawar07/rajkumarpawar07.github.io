
import { useRef, useEffect } from "react";
import { Briefcase, Building, Calendar, Code } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function WorkExperience() {
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

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechNova Solutions",
      duration: "2021 - Present",
      description: "Leading the development of scalable microservices architecture using Node.js, TypeScript, and React. Mentoring junior developers and implementing CI/CD pipelines.",
      achievements: [
        "Reduced application load time by 40% through optimized API design and caching strategies",
        "Spearheaded migration from monolith to microservices, improving system reliability by 99.9%",
        "Implemented automated testing that increased code coverage from 65% to 92%"
      ],
      technologies: ["React", "Node.js", "TypeScript", "Docker", "AWS", "GraphQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc.",
      duration: "2018 - 2021",
      description: "Developed and maintained web applications for enterprise clients using JavaScript, React, and Express.js. Collaborated with design and product teams to implement new features.",
      achievements: [
        "Built a customer portal that increased user engagement by 60%",
        "Redesigned database schema that improved query performance by 35%",
        "Integrated third-party APIs to enhance application functionality"
      ],
      technologies: ["JavaScript", "React", "Express.js", "MongoDB", "Redux", "Jest"]
    },
    {
      title: "Frontend Developer",
      company: "CreativeWeb Studios",
      duration: "2016 - 2018",
      description: "Created responsive user interfaces for client websites and web applications. Worked with design team to translate mockups into functional websites.",
      achievements: [
        "Developed 12+ client websites with modern, responsive designs",
        "Implemented accessibility improvements that met WCAG 2.1 standards",
        "Created reusable component library that increased development efficiency"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Sass", "Bootstrap"]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef} 
      className="py-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
            Work Experience
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            My Professional Journey
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mb-12">
            A showcase of my professional experience and the impact I've made at various companies throughout my career.
          </p>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border border-border hover:border-accent/20 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/10 text-accent shrink-0">
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.slice(0, 3).map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-secondary/70">
                            <Code className="h-3 w-3 mr-1" />
                            {tech}
                          </Badge>
                        ))}
                        {exp.technologies.length > 3 && (
                          <Badge variant="outline">+{exp.technologies.length - 3} more</Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Building className="h-4 w-4 text-accent" />
                        {exp.company}
                      </div>
                      
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-accent" />
                        {exp.duration}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="achievements" className="border-b-0">
                        <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline">
                          Key Achievements
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 pl-5 list-disc marker:text-accent">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-muted-foreground">{achievement}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
