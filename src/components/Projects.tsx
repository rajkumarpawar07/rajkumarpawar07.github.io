
import { useRef, useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectDialog } from "@/components/ProjectDialog";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

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
      title: "TStore",
      description: "TSore is a full-stack flutter e-Commerce application, ensuring seamless functionality on both Android and IOS platforms with different categories to shop.",
      // longDescription: "Anime Tracker is a comprehensive mobile app designed for anime enthusiasts to keep track of their favorite shows. The app allows users to create watchlists, receive notifications for new episodes, track viewing progress, and discover new shows based on their preferences.",
      tags: ["Flutter", "Firebase", "Getx", "Dart", "Google-Auth"],
      technologies: ["Flutter", "Firebase", "Getx", "Dart", "Google-Auth"],
      features: [
    
        "Multi-Category Shopping Experience",
        "Real-Time Sync with Robust State & Event Management",
        " Firebase-Powered Secure Backend",
      ],
      image: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742645397/TStore/cfp4amx1u8yejyzn1qmr.png",
      images: [
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742645398/TStore/sw4km136gdmdpnu74rhw.png", alt: "Anime Tracker App" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742645398/TStore/htnj9wyumt8clrli1xjk.png", alt: "Notification Screen" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742645397/TStore/afw1llzehzyxv1gc9b9f.png", alt: "Watchlist Feature" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742645397/TStore/jtqudfdrqkpk4dz3jshp.png", alt: "Search Feature" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742645397/TStore/kk0iworqekprdiuzlexq.png", alt: "User Profile" }
      ],
      githubUrl: "https://github.com/rajkumarpawar07/tStore",
      liveUrl: "https://example.com",
    },
    {
      title: "Playflex",
      description: "A feature-rich streaming app built with Flutter, offering movies, TV shows, and web series with a smooth, interactive UI. It includes AI voice control, real-time sentiment analysis, and dynamic content powered by TMDB and Flask APIs.",
      // longDescription: "Cosplay Companion is the ultimate social platform for cosplay enthusiasts. The app connects cosplayers with events, photographers, and fellow community members. Users can showcase their work, get inspired by others, and coordinate meetups at conventions.",
      tags:[
        "Flutter",
        "Firebase",
        "Alan AI",
        "Naive Bayes (for ML)",
        "Flask",
        "TMDB API"
      ],
      technologies: [
        "Flutter",
        "GetX",
        "Firebase Authentication",
        "Firebase Firestore",
        "Firebase Storage",
        "Alan AI",
        "Naive Bayes (for ML)",
        "Flask",
        "TMDB API"
      ],
      features: [
        "All-in-one streaming of movies, TV shows, and web series",
        "AI voice assistant integration using Alan for hands-free control",
        "Sentiment analysis on IMDb reviews using Naive Bayes model",
        "RESTful Flask APIs for seamless ML model integration",
        "Dynamic content fetching using TMDB API for movie details"
      ],
      
      image: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742647160/Playflex/lskqouthnpktfan4agdw.png",
      images: [
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742647160/Playflex/lskqouthnpktfan4agdw.png", alt: "Cosplay Companion App" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742647161/Playflex/ixbinipvzljew1knzb4s.png", alt: "Events Screen" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742647168/Playflex/kcsdlqfxpefnzqqfst79.png", alt: "Community Feed" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742647169/Playflex/jq5mowc5l06zh5d1xq8r.png", alt: "Convention Map" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742647170/Playflex/sinuv3yfbpsq8eoisv5z.png", alt: "Convention Map" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742647168/Playflex/nhhujkv58azhhtoy46xe.png", alt: "User Profile" },
      ],
      githubUrl: "https://github.com/rajkumarpawar07/playflex-video-streaming-flutter-application",
      liveUrl: "https://example.com",
    },
    {
      title: "Bigga",
      description: "Developed Bigga, a Flutter and Flame-based gaming app with weekly game releases, real cash rewards, and secure KYC verification.",

      // longDescription: "Cosplay Companion is the ultimate social platform for cosplay enthusiasts. The app connects cosplayers with events, photographers, and fellow community members. Users can showcase their work, get inspired by others, and coordinate meetups at conventions.",
      tags: [
        "Flutter",
        "Flame Engine",
        "Firebase Authentication",
        "Firebase Firestore",
        "Razorpay",
        "GetX"
      ],
      technologies: [
        "Flutter",
        "Flame Engine",
        "Firebase Authentication",
        "Firebase Firestore",
        "Razorpay",
        "GetX"
      ],
      features: [
        "Weekly addition of new mini-games to keep the experience fresh and engaging",
        "Real cash rewards system with leaderboard-based competition",
        "Secure KYC verification for trusted and transparent transactions"
      ],
      image: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742647460/Bigga/feesi0wah8k3to240vll.png",
      images: [
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742647460/Bigga/feesi0wah8k3to240vll.png", alt: "Cosplay Companion App" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742647441/Bigga/dngu70uht7c7ndrhxgrj.png", alt: "Community Feed" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742647447/Bigga/d2sxf2ure11nh8pmtydk.png", alt: "Events Screen" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742647440/Bigga/citi6bovazkgmitmikk4.png", alt: "Convention Map" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742647438/Bigga/kqc0gyj72620uzwizvdq.png", alt: "Convention Map" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742647436/Bigga/s0bfv22u1jd3a5qxgbqz.png", alt: "User Profile" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742647436/Bigga/uom2qpv1rlvammiullvg.png", alt: "User Profile" },
      ],
      githubUrl: "https://github.com/rajkumarpawar07/Bigga",
      liveUrl: "https://example.com",
    },
    {
      title: "Tack Tik",
      description: "A guard management and monitoring app enabling real-time location tracking, shift scheduling, and emergency handling features.",
      // longDescription: "Manga Reader provides a seamless experience for manga enthusiasts to discover, read, and collect their favorite manga. The app features a minimalist design focused on readability, with powerful organization tools and a vast library of content.",
      tags: [
        "Flutter",
        "Firebase Cloud Messaging",
        "Firebase Cloud Functions",
        "Firebase Firestore",
        "Background Location Services",
        "Google Maps API"
      ],
      technologies: [
        "Flutter",
        "Firebase Cloud Messaging",
        "Firebase Cloud Functions",
        "Firebase Firestore",
        "Background Location Services",
        "Google Maps API"
      ],
      features: [
        "Real-time guard tracking with route visualization and background location services",
        "Advanced shift calendar with scheduling and daily activity reporting (DAR)",
        "Site tour assistance and panic mode for emergency response"
      ],
      image: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742646691/Tack%20Tik/ogdkdrxcp5uhnw6ct7hy.png",
      images: [
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742646676/Tack%20Tik/opfehxcs2n68h4d6xo4e.png", alt: "Search Results" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742646670/Tack%20Tik/igodqdk5eiajsy7wew5n.png", alt: "Search Results" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742646691/Tack%20Tik/ogdkdrxcp5uhnw6ct7hy.png", alt: "Manga Reader App" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742646690/Tack%20Tik/ksoeqskry8xweia4okt6.png", alt: "Reading View" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742646684/Tack%20Tik/qqopxd2ldies98r8tppj.png", alt: "Library Screen" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742646682/Tack%20Tik/hwxhkl9hrtewuhenguv2.png", alt: "Search Results" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742646676/Tack%20Tik/ankh3pivtldyqqzlaxyo.png", alt: "Settings Page" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742646667/Tack%20Tik/uwm1t3za5fuxwbqxrfpc.png", alt: "Search Results" },


      ],
      githubUrl: "https://github.com/rajkumarpawar07/Tack-tik",
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
               Projects Showcase
              </h2>
              {/* <p className="text-muted-foreground max-w-2xl font-body">
                Here are some of my recent mobile application projects. Each one presented unique challenges
                and opportunities to learn and grow as a developer.
              </p> */}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group anime-card flex flex-col h-full gap-3 p-4 rounded-lg bg-card/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-accent/5 cursor-pointer"
                onClick={() => setSelectedProject(index)}
              >
                <div className="relative mb-5 overflow-hidden rounded-md aspect-[4/3]">
                  <Carousel className="w-full" autoplay={true}>
                    <CarouselContent>
                      {project.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <div className="overflow-hidden rounded-md">
                            <img 
                              src={image.src} 
                              alt={image.alt} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
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
                    {/* <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Live site"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a> */}
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
  <Button
    className="anime-button font-anime bg-white text-black hover:bg-black hover:text-white transition-colors"
    asChild
  >
    <a
      href="https://github.com/rajkumarpawar07?tab=repositories"
      target="_blank"
      rel="noopener noreferrer"
    >
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
