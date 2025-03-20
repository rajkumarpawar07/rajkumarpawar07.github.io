
import React from "react";

export function TechnologiesSection() {
  const technologies = [
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
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mt-8 mb-6 font-anime">Technologies I Work With</h3>
      
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
