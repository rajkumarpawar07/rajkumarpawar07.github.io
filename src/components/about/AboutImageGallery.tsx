
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function AboutImageGallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Laptop computer",
      size: "large"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "Circuit board macro",
      size: "small"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Programming monitor",
      size: "small"
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "Person using laptop",
      size: "small"
    },
    {
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      alt: "Laptop on surface",
      size: "small"
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-6 font-anime">My Journey</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <Card 
            key={index} 
            className={`overflow-hidden bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-accent/10 hover:border-accent/30 ${
              index === 0 ? "col-span-2" : "col-span-1"
            }`}
          >
            <CardContent className="p-0">
              <AspectRatio ratio={16/9}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </AspectRatio>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
