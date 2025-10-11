
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
      title: "Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "February 2025 - February 2028",
      description: "Demonstrated ability to deploy applications, monitor operations, and manage enterprise solutions on Google Cloud Platform.",
      skills: [
        "Cloud Architecture",
        "Cloud Computing",
        "Cloud Security",
        "Cloud Storage",
        "Compute Engine",
        "GKE (Kubernetes Engine)",
        "Google Cloud Platform (GCP)",
        "Identity and Access Management (IAM)",
        "Infrastructure as Code (IaC)",
        "Networking",
        "Pub/Sub",
        "Cloud SQL"
      ],
      image: "https://images.credly.com/size/680x680/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png",
      credentialUrl: "https://www.credly.com/badges/ffaa6376-9b1d-4b4a-8f7b-a162d27ad403/public_url"
    },
    {
    "title": "Associate Data Practitioner",
    "issuer": "Google Cloud",
  "date": "May 2025 - May 2028",
  "description": "Validates fundamental skills to secure, manage, and analyze data, build models, and extract insights to solve business problems on Google Cloud.",
    "skills": [
      "BigQuery",
      "Data Analysis",
      "Data Engineering",
      "Data Management",
      "Data Modeling",
      "Data Security",
      "Google Cloud Platform (GCP)",
      "Machine Learning Basics",
      "SQL",
      "Cloud Storage",
      "Data Pipeline",
      "Business Intelligence"
    ],
    "image": "https://images.credly.com/size/680x680/images/3e3f6d8b-b37e-4a3d-93d0-6f2bafa5f03c/blob",
    "credentialUrl": "https://www.credly.com/badges/dc0581e0-be77-41e1-97d8-6c248706503f/public_url"
  },
  {
    "title": "Microsoft Certified: Azure Administrator Associate",
    "issuer": "Microsoft",
    "date": "June 2025 - June 2026",
    "description": "Demonstrates skills in implementing, managing, and monitoring Azure environments, including virtual networks, storage, compute, identity, security, and governance.",
    "skills": [
      "Azure Portal",
      "Azure Resource Manager",
      "Virtual Machines",
      "Azure Storage",
      "Azure Active Directory",
      "Virtual Networks",
      "Azure Monitor",
      "Backup and Recovery",
      "Azure Security",
      "Role-Based Access Control (RBAC)",
      "Azure Policy",
      "Cost Management"
    ],
    "image": "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    "credentialUrl": "https://learn.microsoft.com/en-us/users/rajkumarpawar-1332/credentials/d7351a2b47a5b269"
  },
  {
    "title": "Microsoft Certified: DevOps Engineer Expert",
    "issuer": "Microsoft",
    "date": "June 2025 - June 2026",
    "description": "Design and implement processes and communications, Design and implement a source control strategy, Design and implement build and release pipelines.",
    "skills": [
      "Azure Data Factory",
      "Azure Synapse Analytics",
      "Azure Databricks",
      "Azure Data Lake",
      "Azure Stream Analytics",
      "Data Pipeline",
      "ETL/ELT",
      "Data Warehousing",
      "SQL",
      "PySpark",
      "Data Security",
      "Performance Optimization"
    ],
    "image": "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-expert-badge.svg",
    "credentialUrl": "https://learn.microsoft.com/en-us/users/rajkumarpawar-1332/credentials/74bfeea03dacb779"
  },
  {
    "title": "Professional Cloud Architect",
    "issuer": "Google Cloud",
    "date": "April 2025 - April 2027",
    "description": "Demonstrates ability to design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives.",
    "skills": [
      "Cloud Architecture",
      "Solution Design",
      "Infrastructure Design",
      "Google Cloud Platform (GCP)",
      "Compute Engine",
      "Cloud Storage",
      "Networking",
      "Security & Compliance",
      "Cost Optimization",
      "Migration Strategy",
      "High Availability",
      "Disaster Recovery"
    ],
    "image": "https://images.credly.com/size/680x680/images/71c579e0-51fd-4247-b493-d2fa8167157a/image.png",
    "credentialUrl": "https://www.credly.com/badges/e89135e6-60f6-4d68-ad16-ef5867c2947d/public_url"
  },
      {
      title: "Professional Cloud DevOps Engineer",
      issuer: "Google Cloud",
      date: "April 2025 - April 2027",
      description: "Professional Cloud DevOps Engineers implement processes throughout the systems development lifecycle using Google-recommended methodologies and tools.",
      skills: [
        "CI/CD",
        "Cloud Computing",
        "Cloud Security",
        "DevOps",
        "Google Cloud Platform (GCP)",
        "Infrastructure as Code (IaC)",
        "Infrastructure Automation",
        "Kubernetes",
        "Scalability",
        "Site Reliability Engineering (SRE)",
        "System Monitoring"
      ],
      
      image: "https://images.credly.com/size/680x680/images/05e71e7e-92a1-4821-8530-4176b2e3c4b4/image.png",
      credentialUrl: "https://www.credly.com/badges/47746152-7cfc-4ed2-92ca-7066198d1279"
    },
  {
    "title": "Professional Machine Learning Engineer",
    "issuer": "Google Cloud",
    "date": "May 2025 - May 2027",
    "description": "Demonstrates expertise in designing, building, and productionizing ML models to solve business challenges using Google Cloud technologies.",
    "skills": [
      "Machine Learning",
      "TensorFlow",
      "Vertex AI",
      "ML Pipeline",
      "Model Training",
      "Model Deployment",
      "MLOps",
      "AutoML",
      "BigQuery ML",
      "AI Platform",
      "Model Monitoring",
      "Feature Engineering"
    ],
    "image": "https://images.credly.com/size/680x680/images/05e71e7e-92a1-4821-8530-4176b2e3c4b4/image.png",
    "credentialUrl": "https://www.credly.com/badges/624784ca-410f-4fbe-8cad-d171c21728a9/public_url"
  },
  {
    "title": "Professional Data Engineer",
    "issuer": "Google Cloud",
    "date": "May 2025 - May 2027",
    "description": "Demonstrates ability to design, build, operationalize, secure, and monitor data processing systems with a focus on security, compliance, and reliability.",
    "skills": [
      "BigQuery",
      "Data Engineering",
      "Dataflow",
      "Dataproc",
      "Pub/Sub",
      "Cloud Storage",
      "Data Pipeline",
      "ETL/ELT",
      "Data Warehousing",
      "Cloud SQL",
      "Bigtable",
      "Data Security"
    ],
    "image": "https://images.credly.com/size/680x680/images/2d613ff8-8879-430b-b2d8-925fa29785e8/image.png",
    "credentialUrl": "https://www.credly.com/badges/1bf9cdc0-e003-4190-aaac-ac2fb2c279c6/public_url"
  },
  {
    "title": "Professional Cloud Network Engineer",
    "issuer": "Google Cloud",
    "date": "May 2025 - May 2027",
    "description": "Demonstrates skills in implementing and managing network architecture, including hybrid connectivity, network security, and network optimization on Google Cloud.",
    "skills": [
      "Cloud Networking",
      "VPC",
      "Cloud Load Balancing",
      "Cloud CDN",
      "Cloud Interconnect",
      "Cloud VPN",
      "Firewall Rules",
      "Network Security",
      "Hybrid Connectivity",
      "Network Monitoring",
      "Traffic Management",
      "DNS"
    ],
    "image": "https://images.credly.com/size/680x680/images/08a802bf-f2fa-44fb-8110-92acf6195738/image.png",
    "credentialUrl": "https://www.credly.com/badges/be48dc7c-9bbc-4a80-9e31-4ee26a4cada2/public_url"
  },
  {
    "title": "Professional Cloud Developer",
    "issuer": "Google Cloud",
    "date": "May 2025 - May 2027",
    "description": "Demonstrates proficiency in building scalable and highly available applications using Google Cloud tools and best practices for cloud-native application development.",
    "skills": [
      "Application Development",
      "Cloud Functions",
      "Cloud Run",
      "App Engine",
      "GKE (Kubernetes Engine)",
      "Cloud Build",
      "CI/CD",
      "API Development",
      "Microservices",
      "Container Development",
      "Serverless Computing",
      "Cloud Debugging"
    ],
    "image": "https://images.credly.com/size/680x680/images/614465c6-1d80-4ae6-a323-753de224422a/image.png",
    "credentialUrl": "https://www.credly.com/badges/5a02edc3-bf1b-405c-9f1a-e523474f9e94/public_url"
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
           {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
              🎖️ Certifications
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Professional Certifications
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Industry-recognized certifications validating my cloud engineering expertise and continuous learning commitment.
            </p>
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
                    
                    {/* <div className="flex flex-wrap gap-2 mb-5">
                      {cert.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground font-body"
                        >
                          {skill}
                        </span>
                      ))}
                    </div> */}
                    
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
