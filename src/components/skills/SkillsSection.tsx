
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Card 
            key={index}
            className="group relative overflow-hidden border border-accent/10 bg-transparent backdrop-blur-sm transition-all duration-700 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/20 hover:scale-[1.02]"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
          >
            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
            
            {/* Colored Accent Line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            
            <CardContent className="relative p-6">
              <div className="flex items-center gap-4">
                {/* Icon Container */}
                <div className="relative flex-shrink-0">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500`} />
                  <div className={`relative flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br ${skill.color} text-white shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                    {skill.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-lg tracking-tight group-hover:text-accent transition-colors duration-300 mb-1">
                    {skill.name}
                  </h4>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed group-hover:text-muted-foreground transition-colors duration-300">
                    {skill.description}
                  </p>
                </div>
              </div>
            </CardContent>
            
            {/* Corner Decoration */}
            <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <div className={`absolute inset-0 bg-gradient-to-tl ${skill.color} rounded-tl-full`} />
            </div>
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
