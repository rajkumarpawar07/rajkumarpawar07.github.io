
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award, MapPin, Calendar, Sparkles } from "lucide-react";

export function AboutBio() {
  const stats = [
    { label: "Years Experience", value: "1+", icon: <Calendar className="h-4 w-4" /> },
    { label: "Projects Completed", value: "15+", icon: <Briefcase className="h-4 w-4" /> },
    { label: "Certifications", value: "8+", icon: <Award className="h-4 w-4" /> },
  ];

  const highlights = [
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Current Role",
      description: "Associate Software Engineer at Accenture",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Education",
      description: "Bachelor's in Computer Science & Engineering",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Certified Professional",
      description: "Google Cloud Associate Cloud Engineer & More",
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <div className="space-y-8">
      {/* Profile Card */}
      <Card className="overflow-hidden border-accent/10 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent/50 to-accent rounded-full blur-md opacity-70 animate-pulse"></div>
              <Avatar className="h-32 w-32 border-4 border-background relative">
                <AvatarImage 
                  src="/lovable-uploads/ec25773d-152e-4ee7-a4da-051fabdfae5f.png" 
                  alt="Rajkumar Pawar" 
                  className="object-cover"
                />
                <AvatarFallback className="text-3xl">RP</AvatarFallback>
              </Avatar>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl font-bold mb-2">Rajkumar Pawar</h3>
              <p className="text-accent font-medium mb-3">Associate Software Engineer</p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <Badge variant="secondary" className="bg-accent/10 text-accent border border-accent/20">
                  <MapPin className="h-3 w-3 mr-1" />
                  India
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent border border-accent/20">
                  <Briefcase className="h-3 w-3 mr-1" />
                  Accenture
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <Card 
            key={index}
            className="group border-accent/10 bg-card/30 backdrop-blur-sm hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 hover:-translate-y-1"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
          >
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold mb-1 text-accent">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bio Text */}
      <Card className="border-accent/10 bg-card/30 backdrop-blur-sm">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-accent" />
            <h4 className="text-lg font-semibold">About Me</h4>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            Hi, I'm <span className="text-foreground font-semibold">Rajkumar Pawar</span>, a passionate <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">Associate Software Engineer</mark> at <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">Accenture</mark> with 
            a solid background in developing robust, scalable applications using 
            modern technologies.
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            With hands-on experience in <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">Flutter</mark>, <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">Golang</mark>, 
            and cloud platforms like <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">GCP</mark>, <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">AWS</mark> and <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">Azure</mark> 
            I specialize in building user-centric mobile and web applications that solve real-world problems.
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            Beyond coding, I'm certified in <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">Google Cloud</mark> technologies and 
            have a keen interest in building scalable cloud infrastructure using 
            <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">Kubernetes</mark> and <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">Terraform</mark>. 
            <span className="text-foreground font-medium"> Collaboration, innovation, and continuous learning</span> are at the core of my work philosophy.
          </p>
        </CardContent>
      </Card>

      {/* Highlights */}
      <div className="space-y-3">
        {highlights.map((item, index) => (
          <Card 
            key={index}
            className="group border-accent/10 bg-card/30 backdrop-blur-sm hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
            style={{
              animation: `fadeInUp 0.6s ease-out ${(index + 3) * 0.1}s both`
            }}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold mb-1">{item.title}</h5>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
