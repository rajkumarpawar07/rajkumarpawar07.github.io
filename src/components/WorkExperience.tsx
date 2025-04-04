
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
      title: "Associate Software Engineer",
      company: "Accenture",
      companyLogo: "https://cdn.freelogovectors.net/wp-content/uploads/2023/05/accenture_logo-freelogovectors.net_.png",
      duration: "September 2024 - Present",
      description: "Developing scalable microservices architecture using Node.js, TypeScript, and React. Mentoring junior developers and implementing CI/CD pipelines.",
      achievements: [
        "Developed a scalable microservices architecture using Node.js, TypeScript, and React. Mentored junior developers and implemented CI/CD pipelines.",
        "Led the development of a new feature that increased user engagement by 20%.",
        "Implemented a new logging system that reduced the time it takes to diagnose and fix issues by 50%."
      ],
      technologies: ["Google Cloud", "Kubernetes", "Terraform", "Docker", "AWS", "SNS"]
    },
    {
      title: "Software Developer Intern",
      company: "Cogent Web Services ",
      companyLogo: "https://cwservices.co.in/assets/cws_logo.png",
      duration: "March 2024 – September 2024",
      description: "Developed a scalable microservices architecture using Node.js, TypeScript, and React. Mentored junior developers and implemented CI/CD pipelines.",
      achievements: [
        "Built Full Stack Admin and User Real Play- game app using flutter and firebase with 99% downtime using firebase streams.",
        "Optimized the Demandium Provider App, resulting in a 10% reduction in loading time. Google Play Store Link",
        "Worked On Bike, Taxi Booking App for both User and Driver that uses flutter and PHP."
      ],
      technologies: ["Flutter", "Android", "Firebase", "PHP"]
    },
    {
      title: "Software Engineer Intern",
      company: "Argan Technology Services Pvt Ltd ",
      companyLogo: "https://argantechnology.com/wp-content/uploads/2024/12/logo.png",
      duration: "November 2023 – June 2024",
      description: "Developed and maintained web applications for enterprise clients using JavaScript, React, and Express.js. Collaborated with design and product teams to implement new features.",
      achievements: [
        "Engineered AEGIS, an HR management system that streamlined operations for 50+ employees across 3 departments, resulting in a 30% reduction in administrative tasks. Google Play Store Link",
        "Created a remote punching feature using Google Maps API, enabling real-time location tracking for 20+ field employees. Implemented polyline drawing to visualize daily routes, covering an average of 100 km per.",
      
      ],
      technologies: ["Node.js","Flutter", "AWS","React", "JIRA"]
    },
    
  ];

  return (
    <section 
      id="work-experience" 
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
          
          {/* <p className="text-muted-foreground max-w-2xl mb-12">
            A showcase of my professional experience and the impact I've made at various companies throughout my career.
          </p> */}
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="anime-card flex flex-col h-full gap-3 p-4 rounded-lg bg-card/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-accent/5 cursor-pointer">
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
                      
                        <img src={exp.companyLogo} alt={exp.company} className="h-5 w-5 rounded-full p-0.5 bg-gray-100" />
                        {exp.company}
                      </div>
                      
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-accent" />
                        {exp.duration}
                      </div>
                    </div>
                    
                    {/* <p className="text-muted-foreground mb-4">{exp.description}</p> */}
                    
                    <Accordion type="single" defaultValue="achievements" className="w-full">
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
