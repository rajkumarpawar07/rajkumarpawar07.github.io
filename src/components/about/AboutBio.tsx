
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function AboutBio() {
  return (
    <div className="flex flex-col items-center md:items-start">
      {/* <div className="mb-6 relative"> */}
        {/* <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-md opacity-70 animate-pulse"></div> */}
        {/* <Avatar className="h-40 w-40 border-4 border-background relative">
          <AvatarImage 
            src="/lovable-uploads/ec25773d-152e-4ee7-a4da-051fabdfae5f.png" 
            alt="Profile photo" 
            className="object-cover"
          />
          <AvatarFallback className="text-4xl">ME</AvatarFallback>
        </Avatar> */}
      {/* </div> */}
      <div className="space-y-6">
      <h3 className="text-2xl font-medium tracking-tight">Code, Cloud & Scalability – My Passion, Your Solution.</h3>
     
      <p className="text-muted-foreground mb-6 text-center md:text-left font-body leading-relaxed">
        Hi, I'm Rajkumar Pawar, a <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">Associate Software Engineer</mark> working at <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">Acenture</mark> with 
        a solid background in developing robust, scalable applications using 
        modern technologies. With experience in <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">Flutter</mark>, <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">Golang</mark>, 
        and cloud platforms like <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">GCP</mark> and <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">AWS</mark>, 
        I specialize in building user-centric mobile and web applications.
      </p>
      
      <p className="text-muted-foreground mb-6 text-center md:text-left font-body leading-relaxed">
        Beyond the code, I'm a certified <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">Google Cloud Associate Cloud Engineer</mark> and 
        have a keen interest in building scalable cloud infrastructure using 
        <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">Kubernetes</mark> and <mark className="bg-accent/10 text-accent font-medium px-1 py-0.5 rounded">Terraform</mark>. 
        Collaboration and continuous learning
        are at the core of my work ethos.
      </p>
      
      </div>
    </div>
  );
}
