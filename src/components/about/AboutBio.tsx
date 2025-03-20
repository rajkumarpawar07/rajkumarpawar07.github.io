
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function AboutBio() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="mb-6 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-md opacity-70 animate-pulse"></div>
        <Avatar className="h-40 w-40 border-4 border-background relative">
          <AvatarImage 
            src="/lovable-uploads/ec25773d-152e-4ee7-a4da-051fabdfae5f.png" 
            alt="Profile photo" 
            className="object-cover"
          />
          <AvatarFallback className="text-4xl">ME</AvatarFallback>
        </Avatar>
      </div>
      
      <p className="text-muted-foreground mb-6 text-center md:text-left font-body">
        I'm a software engineer with a passion for building efficient, scalable, and 
        elegant solutions to complex problems. With a background in computer science 
        and years of hands-on experience, I've developed a deep understanding of 
        modern software practices.
      </p>
      
      <p className="text-muted-foreground mb-6 text-center md:text-left font-body">
        My journey in tech started when I wrote my first line of code as a teenager. 
        Since then, I've been constantly learning and adapting to new technologies 
        and methodologies. I believe in writing clean, maintainable code that stands 
        the test of time.
      </p>
      
      <p className="text-muted-foreground mb-8 text-center md:text-left font-body">
        When I'm not coding, you can find me exploring new technologies, contributing 
        to open-source projects, or enjoying anime. I'm always open to new opportunities 
        and challenges.
      </p>
    </div>
  );
}
