import React from 'react';
import { useBrightness } from './BrightnessContext';
import { Sun, Moon } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

export const BrightnessControl: React.FC = () => {
  const { brightness, setBrightness } = useBrightness();

  return (
    <div className="flex items-center justify-center gap-2 w-full max-w-full">
      <Moon className="h-4 w-4 text-muted-foreground" />
      <Slider
        value={[brightness]}
        min={0}
        max={100}
        step={1}
        onValueChange={(value) => setBrightness(value[0])}
        className="flex-1"
      />
      <Sun className="h-4 w-4 text-muted-foreground" />
    </div>
  );
};