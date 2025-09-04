'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ExecomSection from '@/components/execom-section';
import EventsSection from '@/components/events-section';
import GallerySection from '@/components/gallery-section';
import Footer from '@/components/footer';
import RetroPeachLoader from '@/components/RetroPeachLoader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-black">
          <RetroPeachLoader 
            loadingDuration={3} 
            onLoadingComplete={handleLoadingComplete} 
          />
        </div>
      )}
      
      {/* Main Content */}
      <div className="bg-background relative min-h-screen">
        <div className="relative z-10">
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <ExecomSection />
            <EventsSection />
            <GallerySection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
