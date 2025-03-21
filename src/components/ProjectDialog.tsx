
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

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
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto p-0 border border-border/40 bg-card/95 backdrop-blur-lg flex flex-col">
        <div className="w-full bg-black relative overflow-hidden">
          {/* Image carousel */}
          <div style={{ height: "50vh" }}>
            <Carousel className="w-full h-full" autoplay={true}>
              <CarouselContent className="h-full">
                {project.images.map((image, index) => (
                  <CarouselItem key={index} className="h-full">
                    <div className="flex items-center justify-center h-full p-1">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain bg-black"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-none">
                <ChevronLeft className="h-6 w-6 text-white" />
              </CarouselPrevious>
              <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-none">
                <ChevronRight className="h-6 w-6 text-white" />
              </CarouselNext>
            </Carousel>
          </div>
        </div>
        
        <div className="p-6 z-10 bg-card">
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
