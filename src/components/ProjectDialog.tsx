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
      <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] overflow-hidden p-0 border-0 bg-background/95 backdrop-blur-xl rounded-xl shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left side - Image carousel */}
          <div className="bg-gradient-to-br from-black to-gray-900 relative overflow-hidden h-[40vh] md:h-auto">
            <Carousel className="w-full h-full">
              <CarouselContent className="h-full">
                {project.images.map((image, index) => (
                  <CarouselItem key={index} className="h-full">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center justify-center h-full"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-black hover:bg-black/80 border-none">
                <ChevronLeft className="h-5 w-5 text-white" />
              </CarouselPrevious>
              <CarouselNext className="right-4 bg-black hover:bg-black/80 border-none">
                <ChevronRight className="h-5 w-5 text-white" />
              </CarouselNext>
            </Carousel>
          </div>
          
          {/* Right side - Content */}
          <div className="p-6 overflow-y-auto max-h-[60vh] md:max-h-[95vh]">
            <DialogHeader className="mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <DialogTitle className="text-3xl font-bold font-anime bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground mt-2 text-base">
                  {project.description}
                </DialogDescription>
              </motion.div>
            </DialogHeader>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {project.longDescription && (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold font-anime">About</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
                </div>
              )}
              
              {project.technologies && project.technologies.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold font-anime">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary"
                        className="px-3 py-1 text-sm font-medium rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {project.features && project.features.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold font-anime">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="inline-block h-5 w-5 rounded-full bg-accent/20 text-accent flex-shrink-0 flex items-center justify-center text-xs mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="flex items-center gap-4">
                  {/* <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 border-border/40 hover:bg-accent/5 hover:text-accent transition-colors"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button> */}
                  
                  <Button 
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium transition-all shadow-md hover:shadow-lg"
                    size="sm"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <span>Code</span>
                      <Github className="h-4 w-4" />
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
