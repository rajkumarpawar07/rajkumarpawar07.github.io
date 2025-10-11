import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import { Camera, Heart } from "lucide-react";

export function AboutImageGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      src: "/lovable-uploads/ec25773d-152e-4ee7-a4da-051fabdfae5f.png",
      alt: "Professional",
    },
    {
      src: "/lovable-uploads/retouch_2025021201023510.jpg",
      alt: "Portrait",
    },
    {
      src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742648211/Personal/aothdce82pzhvucsvdyp.jpg",
      alt: "Memories",
    },
    {
      src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1760195852/IMG_20251005_002143_998_gorlxg.webp",
      alt: "Adventure",
    },
    {
      src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742648015/Personal/sgjwwyvi5gchh4te4pri.jpg",
      alt: "Journey",
    },
    {
      src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742648015/Personal/oqgg7nxjqcbdq2wov6jc.jpg",
      alt: "Moments",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <Card className="border-accent/10 bg-card/30 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 text-white">
                <Camera className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Life Beyond Code</h3>
                <p className="text-sm text-muted-foreground">Moments that inspire me</p>
              </div>
            </div>
            <Heart className="h-6 w-6 text-accent" />
          </div>
        </CardContent>
      </Card>

      {/* Image Gallery Grid */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="overflow-hidden rounded-xl group cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
          >
            <Card className="h-full w-full border-accent/10 bg-transparent overflow-hidden group-hover:border-accent/30 transition-all duration-300">
              <CardContent className="p-0 h-full relative">
                <AspectRatio ratio={1/1} className="h-full">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-4"
                  >
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-white font-semibold text-lg">{image.alt}</span>
                    </div>
                  </div>
                  
                  {/* Border Effect */}
                  <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                </AspectRatio>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Fun Fact Card */}
      <Card className="border-accent/10 bg-gradient-to-br from-accent/5 to-transparent backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent flex-shrink-0">
              <Heart className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">When I'm Not Coding...</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I enjoy exploring new places, capturing moments through photography, and staying active with outdoor activities. 
                These experiences fuel my creativity and problem-solving approach in software development.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
