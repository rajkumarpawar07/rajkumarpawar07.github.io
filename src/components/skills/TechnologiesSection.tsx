
import React from "react";

export function TechnologiesSection() {
  const technologies = [
    {name: "Java", logo: "https://cdn.worldvectorlogo.com/logos/java-4.svg"},
    {name: "Golang", logo: "https://cdn.worldvectorlogo.com/logos/golang-1.svg"},
    {name: "Dart", logo: "https://cdn.worldvectorlogo.com/logos/dart.svg"},
    {name: "C++", logo: "https://cdn.worldvectorlogo.com/logos/c.svg"},
    {name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg"},
  
    {name: "Flutter", logo: "https://cdn.worldvectorlogo.com/logos/flutter-logo.svg"},
    {name: "Android", logo: "https://cdn.worldvectorlogo.com/logos/android-logomark.svg"},
    {name: "React Native", logo: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg"},
    {name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"},
    {name: "Firebase", logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg"},
    {name: "GraphQL", logo: "https://cdn.worldvectorlogo.com/logos/graphql-logo-2.svg"},
    {name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"},
    {name: "MySQL", logo: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg"},
    {name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg"},
    {name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg"},
    {name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"},
    {name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg"},
    {name: "Google Cloud", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg"},
    {name: "DevOps", logo: "https://cdn.worldvectorlogo.com/logos/devops-2.svg"},
    {name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker-4.svg"},
    {name: "Genkins", logo: "https://cdn.worldvectorlogo.com/logos/jenkins-1.svg"},
    {name: "Grafana", logo: "https://cdn.worldvectorlogo.com/logos/grafana.svg"},
    {name: "Kubernetes", logo: "https://cdn.worldvectorlogo.com/logos/kubernets.svg"},
    {name: "Terraform", logo: "https://www.svgrepo.com/show/374122/terraform.svg"},
    {name: "ArgoCD", logo: "https://icon.icepanel.io/Technology/svg/Argo-CD.svg"},
    {name: "Prometheus", logo: "https://www.svgrepo.com/show/354219/prometheus.svg"},
    {name: "Opentelemetry", logo: "https://opentelemetry.io/img/logos/opentelemetry-horizontal-color.svg"},
    {name: "Helm", logo: "https://www.svgrepo.com/show/448231/helm.svg"},
   
   
   

  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 font-anime">Technologies I Work With</h3>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
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
  );
}
