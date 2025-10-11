
import React from "react";

export function AboutHeading() {
  return (
    <div className="text-center mb-16">
      <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
        👋 About Me
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
        Code, Cloud & Scalability
      </h2>
      
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        My passion for technology, your path to innovative solutions
      </p>
    </div>
  );
}
