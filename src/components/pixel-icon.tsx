import React from 'react';

interface PixelIconProps {
  icon: 'system' | 'pixelart' | 'cross';
  className?: string;
}

const iconMap = {
  system: '/image/system-uicons_cross.svg',
  pixelart: '/image/pixelarticons_circle.svg',
  cross: '/image/cross.svg',
};

const PixelIcon = ({ icon, className }: PixelIconProps) => (
  <img src={iconMap[icon]} className={className} alt={icon + ' icon'} />
);

export default PixelIcon;
