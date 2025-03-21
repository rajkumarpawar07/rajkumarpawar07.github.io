
import React from "react";
import { Code, Database, Layout, Layers, Server, Terminal } from "lucide-react";

export function SkillsSection() {
  const skills = [
    { name: "Frontend Development", icon: <Layout className="h-5 w-5" /> },
    { name: "Backend Development", icon: <Server className="h-5 w-5" /> },
    { name: "Database Design", icon: <Database className="h-5 w-5" /> },
    { name: "API Development", icon: <Code className="h-5 w-5" /> },
    { name: "System Architecture", icon: <Layers className="h-5 w-5" /> },
    { name: "DevOps", icon: <Terminal className="h-5 w-5" /> },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 font-anime">My Skills & Expertise</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 p-4 rounded-lg border border-border/40 bg-card/40 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-accent/5"
          >
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/10 text-accent">
              {skill.icon}
            </div>
            <span className="font-medium font-body">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
