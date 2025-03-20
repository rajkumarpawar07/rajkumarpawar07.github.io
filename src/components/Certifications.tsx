
import { useRef, useEffect } from "react";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Certifications() {
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

  const certificates = [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "May 2023",
      description: "Validated expertise in developing, deploying, and debugging cloud-based applications using AWS.",
      skills: ["AWS Lambda", "Amazon S3", "DynamoDB", "API Gateway", "CloudFormation"],
      image: "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
      credentialUrl: "https://aws.amazon.com/certification/certified-developer-associate/"
    },
    {
      title: "Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "February 2023",
      description: "Demonstrated ability to deploy applications, monitor operations, and manage enterprise solutions on Google Cloud Platform.",
      skills: ["Kubernetes", "Cloud Functions", "Google Compute Engine", "Cloud Storage", "Cloud SQL"],
      image: "https://images.credly.com/size/680x680/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png",
      credentialUrl: "https://cloud.google.com/certification/cloud-engineer"
    }
  ];

  return (
    <section 
      id="certifications" 
      ref={sectionRef} 
      className="py-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium font-anime">
            Credentials
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-anime">
                Professional Certifications
              </h2>
              <p className="text-muted-foreground max-w-2xl font-body">
                Industry-recognized certifications validating my cloud engineering expertise and continuous learning commitment.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div 
                key={index} 
                className="anime-card flex flex-col h-full gap-3 p-4 rounded-lg bg-card/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-accent/5 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden md:mb-0 mb-4 bg-card flex-shrink-0 border-2 border-accent/20 group-hover:border-accent transition-all">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover p-1"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-1 font-anime">{cert.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2 font-body">
                      {cert.issuer} • {cert.date}
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-4 font-body">
                      {cert.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      {cert.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground font-body"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2 border-accent/40 text-accent hover:bg-accent/10 hover:text-accent font-anime"
                      asChild
                    >
                      <a 
                        href={cert.credentialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Award className="mr-2 h-4 w-4" />
                        View Certification
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
