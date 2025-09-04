"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import ScrollReveal from "./scrollrevel";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import BackgroundEffects from "./background-effects";
import { cn } from "@/lib/utils";

const events = [
  {
    id: 1,
    imageSrc: "/image/event1.jpg",
    alt: "Event Poster 1",
    dataAiHint: "event poster",
  },
  {
    id: 2,
    imageSrc: "/image/event1.jpg",
    alt: "Event Poster 2",
    dataAiHint: "tech conference",
  },
  {
    id: 3,
    imageSrc: "/image/event1.jpg",
    alt: "Event Poster 3",
    dataAiHint: "workshop announcement",
  },
  {
    id: 4,
    imageSrc: "/image/event1.jpg",
    alt: "Event Poster 4",
    dataAiHint: "hackathon poster",
  },
  {
    id: 5,
    imageSrc: "/image/event1.jpg",
    alt: "Event Poster 5",
    dataAiHint: "seminar flyer",
  },
];

const EventsSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true }),
  );
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      id="events"
      className="relative bg-background text-foreground py-20 overflow-hidden"
    >
      <BackgroundEffects />
      <div className="container mx-auto relative z-10 px-4">
        <div className="flex justify-center mb-8">
          <ScrollReveal
            textClassName="text-7xl md:text-8xl font-bold about-us-heading leading-tight"
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.1}
          >
            Events
          </ScrollReveal>
        </div>
      </div>
      <div className="relative z-10">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "center",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {events.map((event, index) => (
              <CarouselItem
                key={event.id}
                className="basis-[72%] md:basis-[38%] pl-4"
              >
                <div className="p-1">
                  <div
                    className={cn(
                      "transition-all duration-300 ease-out",
                      current === index
                        ? "scale-100 opacity-100"
                        : "scale-75 opacity-70",
                    )}
                  >
                    <Card className="border-[20px] border-white rounded-lg overflow-hidden">
                      <CardContent className="flex aspect-square items-center justify-center p-0">
                        <Image
                          src={event.imageSrc}
                          alt={event.alt}
                          width={1200}
                          height={1200}
                          data-ai-hint={event.dataAiHint}
                          className="object-cover w-full h-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-foreground text-background rounded-none border-2 border-background left-4 md:left-[calc(31%_-_2.5rem)]" />
          <CarouselNext className="bg-foreground text-background rounded-none border-2 border-background right-4 md:right-[calc(31%_-_2.5rem)]" />
        </Carousel>
      </div>
    </section>
  );
};

export default EventsSection;
