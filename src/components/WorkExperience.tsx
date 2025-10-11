
import { useRef, useEffect, useState } from "react";
import { Briefcase, Building, Calendar, Code, ChevronDown, MapPin } from "lucide-react";
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
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
        "Rabobank: Designed and implemented reusable Terraform modules and infrastructure-as-code for Rabobank's cloud platforms, enabling consistent provisioning and reducing manual configuration errors by 80%. Developed Terraform code for provisioning Google Cloud infrastructure (VPCs, subnets, IAM, storage, and compute resources) aligned with organizational security policies. Built and maintained CI/CD pipelines in Azure DevOps to validate, plan, and apply Terraform code, ensuring automated testing and compliance before production rollouts. Collaborated with cross-functional teams to enable multi-cloud DevOps practices across GCP and Azure, improving deployment speed and reliability.",
        "Best Buy: Spearheaded the setup of Google Cloud infrastructure for Best Buy's AI-based customer support, configuring Vertex AI, Cloud Functions, and Pub/Sub to support over 2M daily customer interactions across 1,000+ stores. Built and maintained automated data pipelines using Cloud Dataflow to process 50,000+ daily customer interactions, assisted in training custom Gemini models using Vertex AI Workbench, and monitored system performance to ensure 99.9% uptime for production workloads. Managed GKE cluster configurations and monitoring including implementing auto-scaling policies for handling peak loads of 10,000 concurrent sessions, optimized API performance through Cloud CDN configuration reducing response times from 3.2 seconds to 400ms. Supported testing the APIs that connected our AI chatbot with Best Buy's Salesforce system, configuring IAM policies for 200+ user access management, and troubleshooting daily operational issues to maintain seamless data flow across platforms."
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
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
              💼 Work Experience
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              My Professional Journey
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Building impactful solutions across cloud infrastructure, AI, and full-stack development
            </p>
          </div>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-8 top-8 -translate-x-1/2 items-center justify-center">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-accent border-4 border-background z-10 transition-all duration-300 group-hover:scale-150 group-hover:border-accent/50" />
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-accent animate-ping opacity-75" />
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="md:ml-20">
                    <Card className="anime-card overflow-hidden border-accent/10 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
                      <CardContent className="p-0">
                        {/* Header Section with Gradient */}
                        <div className="relative p-6 pb-4 bg-gradient-to-br from-accent/5 via-transparent to-transparent border-b border-accent/10">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            {/* Title and Company */}
                            <div className="flex-1">
                              <div className="flex items-start gap-4 mb-3">
                                {/* Company Logo */}
                                <div className="relative flex-shrink-0">
                                  <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-accent/20 bg-background p-1.5 transition-all duration-300 group-hover:border-accent/40 group-hover:scale-105">
                                    <img 
                                      src={exp.companyLogo} 
                                      alt={exp.company} 
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                </div>
                                
                                {/* Title and Company Info */}
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-xl lg:text-2xl font-bold mb-1.5 group-hover:text-accent transition-colors">
                                    {exp.title}
                                  </h3>
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1.5 font-medium">
                                      <Building className="h-4 w-4 text-accent" />
                                      {exp.company}
                                    </div>
                                    <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/30" />
                                    <div className="flex items-center gap-1.5">
                                      <Calendar className="h-4 w-4 text-accent" />
                                      {exp.duration}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Technologies - Desktop */}
                            <div className="flex flex-wrap gap-2 lg:max-w-xs">
                              {exp.technologies.slice(0, 4).map((tech, i) => (
                                <Badge 
                                  key={i} 
                                  variant="secondary" 
                                  className="bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
                                >
                                  <Code className="h-3 w-3 mr-1" />
                                  {tech}
                                </Badge>
                              ))}
                              {exp.technologies.length > 4 && (
                                <Badge variant="outline" className="border-accent/30">
                                  +{exp.technologies.length - 4}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Description - Optional */}
                        {/* <div className="px-6 py-3 bg-muted/30">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>
                        </div> */}
                        
                        {/* Achievements Accordion */}
                        <div className="px-6 py-4">
                          <Accordion 
                            type="single" 
                            collapsible 
                            className="w-full"
                            value={expandedIndex === index ? `achievements-${index}` : undefined}
                            onValueChange={(value) => setExpandedIndex(value ? index : null)}
                          >
                            <AccordionItem value={`achievements-${index}`} className="border-none">
                              <AccordionTrigger className="py-3 px-4 -mx-4 rounded-lg hover:bg-accent/5 hover:no-underline transition-all group/trigger">
                                <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                                  <Briefcase className="h-4 w-4" />
                                  <span>Key Achievements & Impact</span>
                                  <Badge variant="secondary" className="ml-2 text-xs">
                                    {exp.achievements.length}
                                  </Badge>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="pt-4 pb-2">
                                <ul className="space-y-4">
                                  {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold mt-0.5">
                                        {i + 1}
                                      </span>
                                      <span className="text-muted-foreground flex-1">
                                        {achievement}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                                
                                {/* All Technologies */}
                                <div className="mt-6 pt-4 border-t border-accent/10">
                                  <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                                    Technologies Used
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, i) => (
                                      <Badge 
                                        key={i} 
                                        variant="outline" 
                                        className="text-xs border-accent/20 hover:bg-accent/5 transition-colors"
                                      >
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom animation keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
