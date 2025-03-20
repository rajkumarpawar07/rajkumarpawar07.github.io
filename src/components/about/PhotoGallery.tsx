
import React, { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

export function PhotoGallery() {
  const [autoPlay, setAutoPlay] = useState(true);
  
  // Gallery images
  const galleryImages = [
    {
      src: "/lovable-uploads/ec25773d-152e-4ee7-a4da-051fabdfae5f.png",
      alt: "Professional portrait"
    },
    {
      src: "/lovable-uploads/8a9638bc-354a-4947-8c9d-f435c00cc3ed.png",
      alt: "Professional headshot"
    },
    {
      src: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1000&auto=format&fit=crop",
      alt: "At a tech conference"
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto mt-8 md:mt-0">
      <Carousel
        opts={{ 
          align: "start",
          loop: true,
        }}
        className="w-full max-w-md"
        autoplay={autoPlay}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <CarouselContent>
          {galleryImages.map((image, index) => (
            <CarouselItem key={index} className="relative">
              <div className="relative overflow-hidden rounded-xl aspect-square">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-105" 
                />
                <div className="absolute bottom-4 left-4 text-white z-20 text-sm opacity-80">
                  {image.alt}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-4">
          {galleryImages.map((_, index) => (
            <button 
              key={index} 
              className="w-2 h-2 rounded-full bg-gray-400 hover:bg-accent transition-colors"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90" />
      </Carousel>
    </div>
  );
}
