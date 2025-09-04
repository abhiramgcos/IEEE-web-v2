import React, { useEffect, useState } from 'react';
import RectangleIcon from './rectangle-icon';

const fillSquare = 60 ; //ause the graate thomas ones said there is too much square
const MIN_SQUARES = 10;
const MAX_SQUARES = 90;

const SQUARE_SIZE = 32; // px, matches w-8 h-8
const OVERLAP = SQUARE_SIZE / 2; // 50% overlap

const BackgroundEffectsSquare = () => {
  const [elements, setElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const numElements = Math.round(
      MIN_SQUARES + ((MAX_SQUARES - MIN_SQUARES) * fillSquare) / 254
    );
    const numPairs = Math.floor(numElements * 0.3);
    const numSingles = numElements - numPairs;
    const newElements: JSX.Element[] = [];

    // Generate pairs
    for (let i = 0; i < numPairs; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      // First square (base)
      newElements.push(
        <div key={`pair-base-${i}`} style={{
          position: 'absolute',
          top: `${top}%`,
          left: `${left}%`,
        }} className="animate-float"><RectangleIcon className="w-8 h-8 teal-filter" /></div>
      );
      // Second square (overlapping, shifted up/left by 50%)
      newElements.push(
        <div key={`pair-overlap-${i}`} style={{
          position: 'absolute',
          top: `calc(${top}% - ${OVERLAP}px)`,
          left: `calc(${left}% - ${OVERLAP}px)`,
        }} className="animate-float"><RectangleIcon className="w-8 h-8 teal-filter" /></div>
      );
    }

    // Generate singles
    for (let i = 0; i < numSingles; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      newElements.push(
        <div key={`single-${i}`} style={{
          position: 'absolute',
          top: `${top}%`,
          left: `${left}%`,
        }} className="animate-float"><RectangleIcon className="w-8 h-8 teal-filter" /></div>
      );
    }

    setElements(newElements);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {elements}
    </div>
  );
};

export default BackgroundEffectsSquare; 