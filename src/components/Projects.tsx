
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
    {
      title: "Jenzy",
      description: "Developed Jguzy, a color meditation app with theme customization and secure payment integration to enhance user relaxation and focus.",
      // longDescription: "Anime Tracker is a comprehensive mobile app designed for anime enthusiasts to keep track of their favorite shows. The app allows users to create watchlists, receive notifications for new episodes, track viewing progress, and discover new shows based on their preferences.",
      tags: ["Flutter", "Firebase", "GetX", "Google Play Subscription", "Custom Algorithm"],
      technologies: ["Flutter", "Firebase", "GetX", "Google Play Subscription", "Custom Algorithm"],
      features: [
        "Color-based meditation for relaxation and focus",
        "Dynamic light and dark themes for personalized experiences",
        "Secure in-app purchases through integrated payment gateway"
      ],
      image: "https://res.cloudinary.com/dfyrklyve/image/upload/v1744218560/Jenzy/uo3v5egsok06hcfe6inc.png",
      images: [
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1744218560/Jenzy/uo3v5egsok06hcfe6inc.png", alt: "" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1744218560/Jenzy/sbl5wi2kb4bmr9ose2sx.png", alt: "" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1744218560/Jenzy/aah7ufqk1qyntpwilm31.png", alt: "" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1744218560/Jenzy/oj7jgud67jjerawih9za.png", alt: "" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1744218560/Jenzy/kgmzglp4qlb40my1nziv.png", alt: "" }
      ],
      githubUrl: "https://github.com/rajkumarpawar07/Jenzy",
      liveUrl: "https://example.com",
    },
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
      title: "NetTeam",
      description: "Built a business-focused social media app enabling real-time communication and advanced video editing for networking and growth.",
      // longDescription: "Anime Tracker is a comprehensive mobile app designed for anime enthusiasts to keep track of their favorite shows. The app allows users to create watchlists, receive notifications for new episodes, track viewing progress, and discover new shows based on their preferences.",
      tags: ["Flutter", "Node.js", "MongoDB", "WebRTC", "Socket.IO", "Banuba SDK"],
      technologies: ["Flutter", "Node.js", "MongoDB", "WebRTC", "Socket.IO", "Banuba SDK"],

      features: [
        "Real-time chat and video calling using WebRTC and Socket.IO",
        "In-app video editing with effects, cropping, and audio overlay using Banuba SDK",
        "Community-driven networking space for business-focused social engagement"
      ],
      image: "https://res.cloudinary.com/dfyrklyve/image/upload/v1744219116/NetTeam/c4lqefepkp67mo9nblhq.png",
      images: [
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1744219116/NetTeam/c4lqefepkp67mo9nblhq.png", alt: "" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1744219116/NetTeam/gxtv0ta6tavyuq9ineco.png", alt: "" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1744219117/NetTeam/fj8dou210vez5vxd0lp0.png", alt: "" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1744219116/NetTeam/gfgppzuic3ps0eb3qxm2.png", alt: "" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1744219116/NetTeam/bc8ubaovtrc4yvc5fsao.png", alt: "" },
        { src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1744219116/NetTeam/bf6wlhcqeedp390hsliv.png", alt: "" }
      ],
      githubUrl: "https://github.com/rajkumarpawar07/Net-Team",
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
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
              💼 My Work
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Featured Projects
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Innovative solutions built with cutting-edge technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col overflow-hidden rounded-xl border border-accent/10 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProject(index)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-accent/5 to-transparent">
                  <Carousel className="w-full h-full">
                    <CarouselContent className="h-full">
                      {project.images.slice(0, 3).map((image, imgIndex) => (
                        <CarouselItem key={imgIndex} className="h-full">
                          <div className="relative h-full overflow-hidden">
                            <img 
                              src={image.src} 
                              alt={image.alt} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                  
                  {/* Project Number Badge */}
                  {/* <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-accent/20 text-accent font-bold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div> */}
                </div>
                
                {/* Content Section */}
                <div className="flex flex-col flex-grow p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-accent/10 text-accent border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-accent/10">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label="GitHub repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    
                    <button 
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent hover:text-white bg-accent/10 hover:bg-accent rounded-lg transition-all duration-300 hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(index);
                      }}
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View More Button */}
          <div className="mt-16 text-center">
                <Button
                  className="group relative overflow-hidden bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a
                  href="https://github.com/rajkumarpawar07?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  >
                  <Github className="h-5 w-5" />
                  <span>Explore <span className="text-yellow-300 font-bold">50+</span> More Projects</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                </div>
        </div>
      </div>
      
      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
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
