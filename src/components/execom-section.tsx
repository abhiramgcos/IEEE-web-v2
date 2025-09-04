'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import BackgroundEffects from './background-effects';
import ScrollReveal from './scrollrevel';
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

const execomMembers = [
  {
    id: 1,
    name: 'Devang Pradeep',
    title: 'Treasurer',
    imageSrc: '/image/exycom/1.png',
    dataAiHint: 'portrait man glasses',
  },
  {
    id: 2,
    name: 'Jane Doe',
    title: 'Chairperson',
    imageSrc: '/image/exycom/1.png',
    dataAiHint: 'portrait woman smiling',
  },
  {
    id: 3,
    name: 'John Smith',
    title: 'Vice Chairperson',
    imageSrc: '/image/exycom/1.png',
    dataAiHint: 'portrait man professional',
  },
  {
    id: 4,
    name: 'Emily White',
    title: 'Secretary',
    imageSrc: '/image/exycom/1.png',
    dataAiHint: 'portrait woman glasses',
  },
    {
    id: 5,
    name: 'Chris Green',
    title: 'Webmaster',
    imageSrc: '/image/exycom/1.png',
    dataAiHint: 'portrait man casual',
  },
];

const ExecomSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [dots, setDots] = useState<number[]>([]);

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true }));

  useEffect(() => {
    if (!api) {
      return;
    }
    setDots(api.scrollSnapList());
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleViewAll = () => {
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setIsExpanded(false);
  };

  return (
    <section id="execom" className="relative bg-background text-foreground py-20 overflow-hidden">
      <BackgroundEffects />
      <div className="container mx-auto relative z-10 px-4">
                 <div className="flex justify-between items-center mb-12">
           <ScrollReveal
             textClassName="text-7xl md:text-8xl font-bold about-us-heading leading-tight"
             animationDuration={1}
             ease="back.inOut(2)"
             scrollStart="center bottom+=50%"
             scrollEnd="bottom bottom-=40%"
             stagger={0.1}
           >
             Execom
           </ScrollReveal>
           {!isExpanded && (
              <Button onClick={handleViewAll} className="btn-pixel bg-foreground text-background">
               View All
             </Button>
           )}
         </div>

        {!isExpanded ? (
          <div className="relative">
            <Carousel setApi={setApi} plugins={[plugin.current]} className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {execomMembers.map((member) => (
                  <CarouselItem key={member.id}>
                    <div className="grid md:grid-cols-2 items-center gap-8 md:gap-16">
                      <div className="flex justify-center">
                        <div className="border-[12px] border-foreground shadow-lg">
                           <Image
                            src={member.imageSrc}
                            alt={`Photo of ${member.name}`}
                            width={400}
                            height={400}
                            className="object-cover"
                            data-ai-hint={member.dataAiHint}
                          />
                        </div>
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-4xl md:text-5xl font-bold hero-heading-effect mb-2">{member.name}</h3>
                        <p className="text-2xl md:text-3xl font-medium text-muted-foreground">{member.title}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
             <div className="flex justify-center gap-2 mt-8">
              {dots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index + 1 === current ? 'bg-primary' : 'bg-muted'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 animate-fade-in">
              {execomMembers.map((member) => (
                <div key={member.id} className="text-center">
                  <div className="inline-block border-[8px] border-foreground shadow-lg mb-4">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="object-cover"
                      data-ai-hint={member.dataAiHint}
                    />
                  </div>
                  <h3 className="text-2xl font-bold hero-heading-effect">{member.name}</h3>
                  <p className="text-lg text-muted-foreground">{member.title}</p>
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

export default ExecomSection; 