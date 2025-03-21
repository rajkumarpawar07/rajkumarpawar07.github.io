
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function AboutImageGallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Laptop computer",
      aspectRatio: 16/9,
      gridArea: "1 / 1 / 2 / 2",
      className: "col-span-1 row-span-1 md:col-span-2 md:row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "Circuit board macro",
      aspectRatio: 9/16,
      gridArea: "1 / 3 / 3 / 4",
      className: "col-span-1 row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Programming monitor",
      aspectRatio: 9/16,
      gridArea: "1 / 4 / 3 / 5",
      className: "col-span-1 row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "Person using laptop",
      aspectRatio: 4/3,
      gridArea: "2 / 1 / 3 / 2",
      className: "col-span-1 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      alt: "Laptop on surface",
      aspectRatio: 1,
      gridArea: "2 / 2 / 3 / 3",
      className: "col-span-1 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1542435503-956c469947f6",
      alt: "Desert landscape",
      aspectRatio: 4/5,
      gridArea: "3 / 1 / 5 / 3",
      className: "col-span-2 row-span-2" 
    },
    {
      src: "https://images.unsplash.com/photo-1611605698335-8b1569810432",
      alt: "Tunnel architecture",
      aspectRatio: 9/16,
      gridArea: "3 / 3 / 5 / 4",
      className: "col-span-1 row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1520962922320-2038eebab146",
      alt: "Sunset over water",
      aspectRatio: 16/9,
      gridArea: "3 / 4 / 5 / 5",
      className: "col-span-1 row-span-2"
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-6 font-anime">My Journey</h3>
      
      <div className="grid grid-cols-4 grid-rows-4 gap-2 h-[600px]">
        {images.map((image, index) => (
          <Card 
            key={index} 
            className={`overflow-hidden bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-accent/10 hover:border-accent/30`}
            style={{ gridArea: image.gridArea }}
          >
            <CardContent className="p-0 h-full">
              <AspectRatio ratio={image.aspectRatio} className="h-full">
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
