'use client';

import React from 'react';
import Image from "next/image";

const ScrollDownButton = () => {
  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="group absolute bottom-10 left-1/2 -translate-x-1/2"
      aria-label="Scroll to next section"
    >
      <Image
        src="/image/arrow.svg"
        alt="Scroll down arrow"
        width={56}
        height={80}
        className="animate-bounce w-14 h-20"
        priority
      />
    </button>
  );
};

export default ScrollDownButton;
