"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/image/iee-prc-logo.png"
              alt="IEEE SB PRC Logo"
              width={120}
              height={40}
            />
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-8 font-medium text-xl">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('chapters')} 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Chapters
            </button>
            <button 
              onClick={() => scrollToSection('events')} 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('execom')} 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Execom
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Gallery
            </button>
          </div>
          <Button 
            onClick={() => scrollToSection('contact')} 
            className="hidden md:block bg-foreground text-background hover:bg-primary rounded-md"
          >
            Contact Us
          </Button>
          <Button size="icon" variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Open menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div ref={menuRef} className="fixed inset-0 z-40 bg-black bg-opacity-40 flex justify-end md:hidden">
          <div className="bg-white w-3/4 max-w-xs h-full shadow-lg p-6 flex flex-col space-y-6">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground hover:text-primary text-xl font-medium text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-primary text-xl font-medium text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('chapters')} 
              className="text-foreground hover:text-primary text-xl font-medium text-left"
            >
              Chapters
            </button>
            <button 
              onClick={() => scrollToSection('events')} 
              className="text-foreground hover:text-primary text-xl font-medium text-left"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('execom')} 
              className="text-foreground hover:text-primary text-xl font-medium text-left"
            >
              Execom
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-foreground hover:text-primary text-xl font-medium text-left"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-foreground text-background hover:bg-primary rounded-md px-4 py-2 text-center font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
