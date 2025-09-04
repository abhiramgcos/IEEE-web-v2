"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BackgroundEffects from "./background-effects";
import ScrollReveal from "./scrollrevel";

const galleryImages = [
  {
    id: 1,
    src: "/image/gallery2.jpg",
    alt: "Blue sky with large cumulus clouds",
    dataAiHint: "clouds sky",
  },
  {
    id: 2,
    src: "/image/gallery3.jpg",
    alt: "Drone flying in a clear blue sky",
    dataAiHint: "drone sky",
  },
  {
    id: 3,
    src: "/image/gallery1.jpg",
    alt: "Drone hovering below clouds",
    dataAiHint: "drone clouds",
  },
  {
    id: 4,
    src: "https://placehold.co/600x400.png",
    alt: "Students collaborating on a project",
    dataAiHint: "students learning",
  },
  {
    id: 5,
    src: "https://placehold.co/600x400.png",
    alt: "Robotics workshop in progress",
    dataAiHint: "robotics workshop",
  },
  {
    id: 6,
    src: "https://placehold.co/600x400.png",
    alt: "Speaker presenting at a tech seminar",
    dataAiHint: "tech seminar",
  },
  {
    id: 7,
    src: "https://placehold.co/400x600.png",
    alt: "Close-up of a circuit board",
    dataAiHint: "circuit board",
  },
  {
    id: 8,
    src: "https://placehold.co/600x400.png",
    alt: "Group photo of IEEE members",
    dataAiHint: "group photo",
  },
  {
    id: 9,
    src: "https://placehold.co/600x400.png",
    alt: "Student working on a laptop",
    dataAiHint: "student laptop",
  },
];

const GallerySection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleViewAll = () => {
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setIsExpanded(false);
  };

  return (
    <section
      id="gallery"
      className="relative bg-foreground text-background py-20 overflow-hidden"
    >
      <BackgroundEffects />
      <div className="container mx-auto relative z-10 px-4">
                 <div className="flex justify-center mb-8">
                       <ScrollReveal
              textClassName="text-7xl md:text-8xl font-bold about-us-heading-dark mb-8 leading-tight text-center"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.1}
            >
              Gallery
            </ScrollReveal>
         </div>
        {!isExpanded ? (
          <div className="max-w-6xl mx-auto h-[80vh] grid grid-cols-5 grid-rows-5">
            {/* Image 1 (top-left, bottom layer) */}
            <div className="group col-start-1 col-end-4 row-start-1 row-end-4 relative overflow-hidden rounded-lg z-10 border-4 border-white shadow-lg">
              <Image
                src={galleryImages[0].src}
                alt="Image 1"
                fill
                style={{ objectFit: "cover" }}
                data-ai-hint={galleryImages[0].dataAiHint}
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Image 2 (center-right, middle layer) */}
            <div className="group col-start-3 col-end-6 row-start-2 row-end-5 relative overflow-hidden rounded-lg z-20 border-4 border-white shadow-lg">
              <Image
                src={galleryImages[1].src}
                alt="Image 2"
                fill
                style={{ objectFit: "cover" }}
                data-ai-hint={galleryImages[1].dataAiHint}
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Image 3 (bottom-center, top layer) */}
            <div className="group col-start-2 col-end-5 row-start-3 row-end-6 relative overflow-hidden rounded-lg z-30 border-4 border-white shadow-lg">
              <Image
                src={galleryImages[2].src}
                alt="Image 3"
                fill
                style={{ objectFit: "cover" }}
                data-ai-hint={galleryImages[2].dataAiHint}
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* White Box (top right) */}
            <div className="col-start-4 col-end-6 row-start-1 row-end-2 bg-white rounded-lg flex items-center justify-center text-foreground p-4 z-40 m-2">
              <p className="font-bold text-center">Our Moments</p>
            </div>

            {/* Vertical Info Box (bottom left) */}
            <div className="col-start-1 col-end-2 row-start-4 row-end-6 bg-white rounded-lg flex items-center justify-center text-foreground p-4 z-40 m-2">
              <p className="font-bold text-center">IEEE SB PRC</p>
            </div>

            {/* View All Button (bottom right) */}
            <div className="col-start-5 col-end-6 row-start-5 row-end-6 z-40 m-2">
              <Button
                onClick={handleViewAll}
                className="w-full h-full btn-pixel text-base sm:text-lg md:text-xl tracking-wide"
              >
                View All
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-fade-in">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="overflow-hidden rounded-lg border-4 border-white shadow-lg transform transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    data-ai-hint={image.dataAiHint}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button onClick={handleShowLess} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 w-full h-full btn-pixel text-base sm:text-lg md:text-xl tracking-wide">
                Show Less
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
