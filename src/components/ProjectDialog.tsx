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
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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
      <DialogContent className="max-w-6xl w-[95vw] max-h-[95vh] overflow-hidden p-0 border border-accent/20 bg-background/98 backdrop-blur-xl rounded-2xl shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left side - Image carousel */}
          <div className="relative overflow-hidden h-[40vh] md:h-auto bg-gradient-to-br from-accent/5 to-transparent">
            <Carousel className="w-full h-full">
              <CarouselContent className="h-full">
                {project.images.map((image, index) => (
                  <CarouselItem key={index} className="h-full">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center justify-center h-full p-4"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain rounded-lg shadow-lg"
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-accent/20 hover:bg-accent/30 border-accent/30 backdrop-blur-sm">
                <ChevronLeft className="h-5 w-5 text-foreground" />
              </CarouselPrevious>
              <CarouselNext className="right-4 bg-accent/20 hover:bg-accent/30 border-accent/30 backdrop-blur-sm">
                <ChevronRight className="h-5 w-5 text-foreground" />
              </CarouselNext>
            </Carousel>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-accent/20 text-sm font-medium">
              {project.images.length} Images
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="p-8 overflow-y-auto max-h-[60vh] md:max-h-[95vh] scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent">
            <DialogHeader className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <DialogTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground text-base leading-relaxed">
                  {project.description}
                </DialogDescription>
              </motion.div>
            </DialogHeader>
            
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {project.longDescription && (
                <div className="space-y-3 p-4 rounded-lg bg-accent/5 border border-accent/10">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-1 h-6 bg-accent rounded-full"></span>
                    About This Project
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{project.longDescription}</p>
                </div>
              )}
              
              {project.technologies && project.technologies.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-1 h-6 bg-accent rounded-full"></span>
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary"
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all duration-300 border border-accent/20 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {project.features && project.features.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-1 h-6 bg-accent rounded-full"></span>
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors">
                        <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-accent text-white flex-shrink-0 text-sm font-bold">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground text-sm leading-relaxed flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="pt-6 border-t border-accent/10">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="flex-1 group bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:scale-[1.02]"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Github className="h-5 w-5" />
                      <span>View Source Code</span>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
