'use client';

import React, { useEffect, useState } from 'react';
import PixelIcon from './pixel-icon';
import RectangleIcon from './rectangle-icon';


const fillSquare = 30; 
const MIN_SQUARES = 0;
const MAX_SQUARES = 90;

interface BackgroundEffectsProps {
  useRectangleIcon?: boolean;
}

const BackgroundEffects = ({ useRectangleIcon = false }: BackgroundEffectsProps) => {
  const [elements, setElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const numGroups = Math.round(
      MIN_SQUARES + ((MAX_SQUARES - MIN_SQUARES) * fillSquare) / 254
    );
    const icons = ['system', 'pixelart', 'cross'] as const;
    const newElements: JSX.Element[] = [];
    for (let i = 0; i < numGroups; i++) {
      const baseTop = Math.random() * 100;
      const baseLeft = Math.random() * 100;
      icons.forEach((icon, j) => {
        // Offset each icon in the group by a larger distance (200% of icon size, e.g., 32px)
        const offset = 32; // px
        const style = {
          position: 'absolute' as const,
          top: `calc(${baseTop}% + ${j * offset}px)`,
          left: `calc(${baseLeft}% + ${j * offset}px)`,
          animationDuration: `${Math.random() * 10 + 5}s`,
          animationDelay: `${Math.random() * 5}s`,
        };
        if (useRectangleIcon) {
          newElements.push(
            <div key={`rect-${i}-${j}`} style={style} className="animate-float"><RectangleIcon className="teal-filter" /></div>
          );
        } else {
          newElements.push(
            <div key={`icon-${i}-${icon}`} style={style} className="animate-float"><PixelIcon icon={icon} className="teal-filter" /></div>
          );
        }
      });
    }
    setElements(newElements);
  }, [useRectangleIcon]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {elements}
    </div>
  );
};

export default BackgroundEffects;
