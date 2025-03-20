import React, { createContext, useState, useContext, useEffect } from 'react';

type BrightnessContextType = {
  brightness: number;
  setBrightness: (value: number) => void;
};

const BrightnessContext = createContext<BrightnessContextType | undefined>(undefined);

export const BrightnessProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get saved brightness from localStorage or default to 50%
  const [brightness, setBrightness] = useState<number>(() => {
    const saved = localStorage.getItem('site-brightness');
    return saved ? parseInt(saved, 10) : 40;
  });

  // Update the CSS custom property whenever brightness changes
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('site-brightness', brightness.toString());
    
    // Calculate the overlay opacity based on brightness
    // Lower brightness = more opaque overlay
    const startOpacity = 0.8 - (brightness / 100) * 0.7; // Ranges from 0.1 to 0.8
    const endOpacity = 1 - (brightness / 100) * 0.6;     // Ranges from 0.4 to 1
    
    // Update the gradient in the ::before pseudo-element
    document.documentElement.style.setProperty(
      '--overlay-gradient', 
      `linear-gradient(rgba(0, 0, 0, ${startOpacity}), rgba(0, 0, 0, ${endOpacity}))`
    );
  }, [brightness]);

  return (
    <BrightnessContext.Provider value={{ brightness, setBrightness }}>
      {children}
    </BrightnessContext.Provider>
  );
};

export const useBrightness = (): BrightnessContextType => {
  const context = useContext(BrightnessContext);
  if (context === undefined) {
    throw new Error('useBrightness must be used within a BrightnessProvider');
  }
  return context;
};