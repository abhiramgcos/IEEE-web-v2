'use client';

import { Button } from "@/components/ui/button";
import Image from 'next/image';
import ScrollDownButton from './scroll-down-button';
import BackgroundEffectsSquare from './background-effects-square';
import BackgroundEffects from "./background-effects";
import React, { useState, useRef } from 'react';
import HeroLogo from './hero-logo';

const HeroSection = () => {

  const handleJoinClick = () => {

  };

  return (
    <>
      <section id="home" className="flex flex-col min-h-[80vh] md:min-h-screen py-12 md:py-24 relative overflow-hidden bg-white">
        <BackgroundEffectsSquare />
        <div className="relative w-full flex-1 flex items-center justify-center">
          <div className="relative z-10 container max-w-7xl px-4 flex flex-col items-center justify-center text-center">
            <div className="max-w-4xl mx-auto px-2">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-headline tracking-tighter leading-tight text-white hero-heading-effect mb-8">
                <span className="whitespace-nowrap">Empowering Students to</span> Connect, Create and <span style={{ color: '#008080' }}>Lead</span>.
              </h1>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary text-white border-2 border-primary hover:bg-primary/90 transition-transform hover:scale-105 rounded-none px-10 py-6 text-lg font-bold"
                onClick={handleJoinClick}
              >
                Join IEEE
              </Button>
            </div>
          </div>
        </div>
        
        <div className="relative w-full bg-white min-h-[20vh] md:min-h-[30vh] overflow-hidden">
          <BackgroundEffects />
          <ScrollDownButton />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
