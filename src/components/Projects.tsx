
import { useRef, useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectDialog } from "@/components/ProjectDialog";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "Anime Tracker",
      description: "A mobile application to track your favorite anime series, episodes, and get notifications for new releases.",
      longDescription: "Anime Tracker is a comprehensive mobile app designed for anime enthusiasts to keep track of their favorite shows. The app allows users to create watchlists, receive notifications for new episodes, track viewing progress, and discover new shows based on their preferences.",
      tags: ["React Native", "Firebase", "Redux", "Jikan API"],
      technologies: ["React Native", "Firebase", "Redux", "TypeScript", "Jikan API", "Expo"],
      features: [
        "Real-time notifications for new episode releases",
        "Personalized watchlist management",
        "Detailed anime information and statistics",
        "Offline viewing capability",
        "Social sharing functionality"
      ],
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1000&auto=format&fit=crop",
      images: [
        { src: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1000&auto=format&fit=crop", alt: "Anime Tracker App" },
        { src: "https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?q=80&w=1000&auto=format&fit=crop", alt: "Watchlist Feature" },
        { src: "https://images.unsplash.com/photo-1586373658649-efc69c42be45?q=80&w=1000&auto=format&fit=crop", alt: "Notification Screen" }
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Manga Reader",
      description: "A cross-platform mobile app for reading and downloading manga with a beautiful UI and offline reading capability.",
      longDescription: "Manga Reader provides a seamless experience for manga enthusiasts to discover, read, and collect their favorite manga. The app features a minimalist design focused on readability, with powerful organization tools and a vast library of content.",
      tags: ["Flutter", "Dart", "SQLite", "REST API"],
      technologies: ["Flutter", "Dart", "SQLite", "REST API", "Provider", "Firebase Auth"],
      features: [
        "Offline reading mode",
        "Customizable reading experience",
        "Chapter tracking and bookmarking",
        "Advanced search and filtering",
        "Reading history and statistics"
      ],
      image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?q=80&w=1000&auto=format&fit=crop",
      images: [
        { src: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?q=80&w=1000&auto=format&fit=crop", alt: "Manga Reader App" },
        { src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop", alt: "Reading View" },
        { src: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1000&auto=format&fit=crop", alt: "Library Screen" }
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Cosplay Companion",
      description: "A social app for cosplayers to share their costumes, find events, and connect with other enthusiasts in their area.",
      longDescription: "Cosplay Companion is the ultimate social platform for cosplay enthusiasts. The app connects cosplayers with events, photographers, and fellow community members. Users can showcase their work, get inspired by others, and coordinate meetups at conventions.",
      tags: ["React Native", "GraphQL", "AWS Amplify", "Maps API"],
      technologies: ["React Native", "GraphQL", "AWS Amplify", "Maps API", "Cloudinary", "Auth0"],
      features: [
        "Cosplay portfolio creation and sharing",
        "Convention event discovery and calendar",
        "Community messaging and collaboration",
        "Location-based cosplayer finder",
        "Costume progress tracking"
      ],
      image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1000&auto=format&fit=crop",
      images: [
        { src: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1000&auto=format&fit=crop", alt: "Cosplay Companion App" },
        { src: "https://images.unsplash.com/photo-1568083608325-ded9eaab4113?q=80&w=1000&auto=format&fit=crop", alt: "Events Screen" },
        { src: "https://images.unsplash.com/photo-1536243298747-ea8874136d64?q=80&w=1000&auto=format&fit=crop", alt: "Community Feed" }
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="py-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium font-anime">
            My Work
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-anime">
                Mobile App Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl font-body">
                Here are some of my recent mobile application projects. Each one presented unique challenges
                and opportunities to learn and grow as a developer.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group anime-card flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 bg-card/70 backdrop-blur-sm cursor-pointer"
                onClick={() => setSelectedProject(index)}
              >
                <div className="relative mb-5 overflow-hidden rounded-md aspect-[4/3]">
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 font-anime">{project.title}</h3>
                
                <p className="text-muted-foreground mb-4 flex-grow font-body">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground font-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Live site"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  
                  <button 
                    className="text-sm font-medium text-accent hover:text-accent/80 inline-flex items-center gap-1 transition-colors font-body"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(index);
                    }}
                  >
                    View Project
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button className="anime-button font-anime" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                View More Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {selectedProject !== null && (
        <ProjectDialog 
          project={projects[selectedProject]} 
          open={selectedProject !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null);
          }}
        />
      )}
    </section>
  );
}
