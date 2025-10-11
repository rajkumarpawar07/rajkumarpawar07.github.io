
import React from "react";
import { Code, Database, Layout, Layers, Server, Terminal, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function SkillsSection() {
  const skills = [
    { 
      name: "Mobile App Development", 
      icon: <Layout className="h-6 w-6" />,
      description: "Building cross-platform mobile experiences",
      color: "from-indigo-500/20 to-violet-500/20"
    },
    { 
      name: "Backend Development", 
      icon: <Server className="h-6 w-6" />,
      description: "Scalable server-side architectures",
      color: "from-indigo-500/20 to-violet-500/20"
    },
    { 
      name: "System Design", 
      icon: <Database className="h-6 w-6" />,
      description: "Architecting robust distributed systems",
      color: "from-indigo-500/20 to-violet-500/20"
    },
    { 
      name: "Cloud Architecture", 
      icon: <Layers className="h-6 w-6" />,
      description: "Cloud-native infrastructure solutions",
      color: "from-indigo-500/20 to-violet-500/20"
    },
    { 
      name: "DevOps & CI/CD", 
      icon: <Terminal className="h-6 w-6" />,
      description: "Automated deployment pipelines",
      color: "from-indigo-500/20 to-violet-500/20"
    },
    { 
      name: "Data Structures & Algorithms", 
      icon: <Code className="h-6 w-6" />,
      description: "Optimized problem-solving approaches",
      color: "from-indigo-500/20 to-violet-500/20"
    },
  ];

  return (
    <div>
      {/* Section Title */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 text-accent">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Core Expertise</h3>
          <p className="text-sm text-muted-foreground">Areas where I excel</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <Card 
            key={index}
            className="group relative overflow-hidden border-accent/10 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <CardContent className="relative p-5">
              <div className="flex flex-col gap-3">
                {/* Icon */}
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  {skill.icon}
                </div>
                
                {/* Content */}
                <div>
                  <h4 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
