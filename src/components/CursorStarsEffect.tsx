import React, { useState, useEffect, useRef } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  imageType: number; // Add imageType property to track which star image to use
}

// List of possible star images
const STAR_IMAGES = [
  '/lovable-uploads/CS_Star_10.png',
  '/lovable-uploads/CS_Star_7.png',
  '/lovable-uploads/CS_Star_5.png',
  '/lovable-uploads/CS_Star_8.png',
  '/lovable-uploads/CS_Star_2.png',
];

export const CursorStarsEffect: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const requestRef = useRef<number>();
  const starsCountRef = useRef(0);
  const lastStarTimeRef = useRef(0);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const mouseMoveTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mouse move to track cursor position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update current mouse position
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if mouse has actually moved from last position
      if (
        Math.abs(e.clientX - lastMousePosRef.current.x) > 2 || 
        Math.abs(e.clientY - lastMousePosRef.current.y) > 2
      ) {
        setIsMoving(true);
        lastMousePosRef.current = { x: e.clientX, y: e.clientY };
        
        // Clear any existing timeout
        if (mouseMoveTimerRef.current) {
          clearTimeout(mouseMoveTimerRef.current);
        }
        
        // Set timeout to detect when movement stops
        mouseMoveTimerRef.current = setTimeout(() => {
          setIsMoving(false);
        }, 100); // Consider mouse stopped after 100ms of no movement
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (mouseMoveTimerRef.current) {
        clearTimeout(mouseMoveTimerRef.current);
      }
    };
  }, []);

  // Animation frame update
  useEffect(() => {
    const createStar = (timestamp: number) => {
      // Only create stars if the mouse is moving
      if (isMoving && timestamp - lastStarTimeRef.current > 50) {
        const newStar: Star = {
          id: starsCountRef.current++,
          x: mousePosition.x,
          y: mousePosition.y,
          size: Math.random() * 20 + 10, // Random size between 10-30px
          opacity: 1,
          rotation: Math.random() * 360, // Random initial rotation
          imageType: Math.floor(Math.random() * STAR_IMAGES.length), // Randomly select a star image
        };
        setStars(prevStars => [...prevStars, newStar]);
        lastStarTimeRef.current = timestamp;
      }
    };

    const updateStars = (timestamp: number) => {
      createStar(timestamp);
      
      setStars(prevStars => 
        prevStars
          .map(star => ({
            ...star,
            opacity: star.opacity - 0.015, // Fade out
            rotation: star.rotation + 0.5, // Rotate slowly
            size: star.size + 0.1, // Grow slightly
          }))
          .filter(star => star.opacity > 0) // Remove fully faded stars
      );
      
      requestRef.current = requestAnimationFrame(updateStars);
    };

    requestRef.current = requestAnimationFrame(updateStars);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mousePosition, isMoving]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x - star.size / 2}px`,
            top: `${star.y - star.size / 2}px`,
            width: `${star.size/1.4}px`,
            height: `${star.size/1.4}px`,
            opacity: star.opacity,
            transform: `rotate(${star.rotation}deg)`,
            transition: 'opacity 0.5s ease-out',
          }}
        >
          <img 
            src={STAR_IMAGES[star.imageType]} 
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default CursorStarsEffect;