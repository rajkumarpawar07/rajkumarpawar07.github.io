import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";

export function AboutImageGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      src: "/lovable-uploads/ec25773d-152e-4ee7-a4da-051fabdfae5f.png" ,
      alt: "",
    },
    {
      src: "/lovable-uploads/retouch_2025021201023510.jpg" ,
      alt: "",
    },
    {
      src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742648211/Personal/aothdce82pzhvucsvdyp.jpg",
      alt: "",
    },
    {
      src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742648016/Personal/ncoas5ffelyeluezpeyi.jpg",
      alt: "",
    },
    {
      src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742648015/Personal/sgjwwyvi5gchh4te4pri.jpg",
      alt: "",
    },
    {
      src: "https://res.cloudinary.com/dfyrklyve/image/upload/v1742648015/Personal/oqgg7nxjqcbdq2wov6jc.jpg",
      alt: "",
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-medium tracking-tight">Personal Life</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="overflow-hidden rounded-lg"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card className="h-full w-full border-0 bg-transparent">
              <CardContent className="p-0 h-full relative">
                <AspectRatio ratio={1/1} className="h-full">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="object-cover w-full h-full transition-all duration-300"
                    style={{
                      transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  <div 
                    className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 flex items-center justify-center"
                    style={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  >
                    <span className="text-white font-medium">{image.alt}</span>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
