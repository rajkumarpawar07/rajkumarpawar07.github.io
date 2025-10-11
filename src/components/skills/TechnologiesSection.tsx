
import React from "react";
import { Code2, Cloud, Database, Hammer, Smartphone, GitBranch } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TechnologiesSection() {
  // Flatten all technologies into a single array with category info
  const allTechnologies = [
    // Languages
    {name: "Java", logo: "https://cdn.worldvectorlogo.com/logos/java-4.svg", category: "Languages"},
    {name: "Golang", logo: "https://cdn.worldvectorlogo.com/logos/golang-1.svg", category: "Languages"},
    {name: "Dart", logo: "https://cdn.worldvectorlogo.com/logos/dart.svg", category: "Languages"},
    {name: "C++", logo: "https://cdn.worldvectorlogo.com/logos/c.svg", category: "Languages"},
    {name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg", category: "Languages"},
    
    // Mobile & Frontend
    {name: "Flutter", logo: "https://cdn.worldvectorlogo.com/logos/flutter-logo.svg", category: "Mobile"},
    {name: "Android", logo: "https://cdn.worldvectorlogo.com/logos/android-logomark.svg", category: "Mobile"},
    {name: "React Native", logo: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg", category: "Mobile"},
    
    // Backend & Databases
    {name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", category: "Backend"},
    {name: "Firebase", logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg", category: "Backend"},
    {name: "GraphQL", logo: "https://cdn.worldvectorlogo.com/logos/graphql-logo-2.svg", category: "Backend"},
    {name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", category: "Database"},
    {name: "MySQL", logo: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg", category: "Database"},
    {name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg", category: "Database"},
    
    // Cloud
    {name: "Google Cloud", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg", category: "Cloud"},
    {name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg", category: "Cloud"},
    {name: "Azure", logo: "https://cdn.worldvectorlogo.com/logos/azure-2.svg", category: "Cloud"},
    
    // DevOps
    {name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker-4.svg", category: "DevOps"},
    {name: "Kubernetes", logo: "https://cdn.worldvectorlogo.com/logos/kubernets.svg", category: "DevOps"},
    {name: "Terraform", logo: "https://www.svgrepo.com/show/374122/terraform.svg", category: "DevOps"},
    {name: "Jenkins", logo: "https://cdn.worldvectorlogo.com/logos/jenkins-1.svg", category: "DevOps"},
    {name: "ArgoCD", logo: "https://icon.icepanel.io/Technology/svg/Argo-CD.svg", category: "DevOps"},
    {name: "Helm", logo: "https://www.svgrepo.com/show/448231/helm.svg", category: "DevOps"},
    
    // Monitoring
    {name: "Grafana", logo: "https://cdn.worldvectorlogo.com/logos/grafana.svg", category: "Monitoring"},
    {name: "Prometheus", logo: "https://www.svgrepo.com/show/354219/prometheus.svg", category: "Monitoring"},
    {name: "Opentelemetry", logo: "https://opentelemetry.io/img/logos/opentelemetry-horizontal-color.svg", category: "Monitoring"},
  ];

  return (
    <div>
      {/* Section Title */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 text-accent">
          <Code2 className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Tech Stack</h3>
          <p className="text-sm text-muted-foreground">{allTechnologies.length}+ technologies</p>
        </div>
      </div>

      {/* Compact Technologies Grid */}
      <Card className="border-accent/10 bg-card/30 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2">
            {allTechnologies.map((tech, index) => (
              <div 
                key={index}
                className="group relative flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 border border-accent/10 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 hover:scale-105 hover:shadow-md"
                style={{
                  animation: `fadeInScale 0.4s ease-out ${index * 0.02}s both`
                }}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
                
                {/* Tooltip showing category */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-accent text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
