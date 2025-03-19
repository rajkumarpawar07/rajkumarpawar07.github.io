
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectDialogProps {
  project: {
    title: string;
    description: string;
    longDescription?: string;
    technologies?: string[];
    features?: string[];
    images: ProjectImage[];
    githubUrl: string;
    liveUrl: string;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDialog({ project, open, onOpenChange }: ProjectDialogProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto p-0 border border-border/40 bg-card/95 backdrop-blur-lg">
        <div className="sticky top-0 z-10 flex justify-end p-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => onOpenChange(false)} 
            className="rounded-full bg-black/40 hover:bg-black/60 h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="relative aspect-video bg-black/50 overflow-hidden">
          {/* Image gallery */}
          <div className="relative w-full h-full">
            {project.images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            {/* Navigation arrows */}
            {project.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 z-10"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 z-10"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
                
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? "bg-white scale-125" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-anime">{project.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {project.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6 space-y-5">
            {project.longDescription && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold font-anime">About this project</h3>
                <p className="text-sm text-muted-foreground">{project.longDescription}</p>
              </div>
            )}
            
            {project.features && project.features.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold font-anime">Key Features</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.technologies && project.technologies.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold font-anime">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground font-body"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="pt-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub repository"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Live site"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              
              <Button className="anime-button font-anime bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  View Live Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
