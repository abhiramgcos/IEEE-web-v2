import React from 'react';

interface RectangleIconProps {
  className?: string;
}

const RectangleIcon = ({ className }: RectangleIconProps) => (
  <img src="/image/Rectangle_30.svg" className={className} alt="rectangle icon" />
);

export default RectangleIcon; 