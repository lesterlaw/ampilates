"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type ClassCard = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
};

type ClassesCarouselProps = {
  heading?: string;
  intro?: string;
};

const ClassesCarousel = ({ heading, intro }: ClassesCarouselProps) => {
  const classesData: ClassCard[] = useMemo(
    () => [
      {
        title: "Introductory Class",
        imageSrc: "/images/introduction-class.jpg",
        imageAlt: "Introductory Class",
        description:
          "Never Tried Reformer Pilates before? This Introductory Class is the perfect first step. You'll get to know the equipment, learn key safety tips, and understand the terms and cues used in class. Plus, we'll guide you through body alignment basics to help you move with confidence and ease.",
      },
      {
        title: "Firm Foundation",
        imageSrc: "/images/firmfoundationcropped.png",
        imageAlt: "Firm Foundation",
        description:
          "Your Next Step to Mastering Pilates! This dynamic class builds on the Introductory session, helping you sharpen technique, boost mobility, and move with greater control and confidence.",
      },
      {
        title: "Essential Strength",
        imageSrc: "/images/essentialstrengthcropped.png",
        imageAlt: "Essential Strength Flexibility",
        description:
          "For the Pilates Girlies Starting Their Strength Journey. Ready to feel stronger and more stable? Learn how to activate your core, shoulder, and hip stabilisers—key muscles that support balance, posture, and control in every movement.",
      },
      {
        title: "Active Mobility",
        imageSrc: "/images/activemobilitycropped.png",
        imageAlt: "Active Mobility",
        description:
          "Flexibility & Mobility Goals? Let's Get Moving! Improve flexibility, boost mobility, and relieve stress through mindful movement and targeted stretches.",
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Reset index when switching between mobile/desktop to prevent out of bounds
      setCurrentIndex(0);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const total = classesData.length;
  const visibleCount = isMobile ? 1 : 3;
  const maxIndex = isMobile ? total - 1 : total - visibleCount;
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const handlePrev = useCallback(() => {
    if (canGoPrev) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [canGoPrev]);

  const handleNext = useCallback(() => {
    if (canGoNext) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [canGoNext]);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
      <div className="flex items-end justify-between gap-4 mb-4 md:mb-6">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#80978b] mb-2">
            {heading ?? "Our Classes"}
          </h2>
          {intro ? (
            <p className="text-lg md:text-xl text-[#656565] leading-snug">
              {intro}
            </p>
          ) : null}
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            disabled={!canGoPrev}
            aria-label="Previous classes"
            className="h-10 w-10 rounded-full border border-[#94aa9f] text-[#80978b] flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f5f5f0] focus:outline-none focus:ring-2 focus:ring-[#80978b] focus:ring-offset-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!canGoNext}
            aria-label="Next classes"
            className="h-10 w-10 rounded-full border border-[#94aa9f] text-[#80978b] flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f5f5f0] focus:outline-none focus:ring-2 focus:ring-[#80978b] focus:ring-offset-2"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden -mx-4 md:mx-0" aria-live="polite">
        <motion.div
          className="flex transition-transform duration-500 ease-out"
          animate={{ 
            x: prefersReducedMotion 
              ? 0 
              : isMobile 
                ? `calc(-${currentIndex * 100}%)` 
                : `calc(-${currentIndex * (100/3)}% - ${currentIndex * 2}rem)` 
          }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {classesData.map((item, idx) => (
            <div 
              key={`${item.title}-${idx}`} 
              className="w-full md:w-1/3 flex-shrink-0 px-4 md:px-4"
              role="listitem"
            >
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={400}
                  height={300}
                  className="w-full aspect-[16/9] md:aspect-[4/3] rounded-3xl object-cover"
                />
                <div className="py-4 md:py-6 px-2 md:px-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[#232323] mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-[#656565] leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex md:hidden flex-col items-center gap-4 mt-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={!canGoPrev}
            aria-label="Previous classes"
            className="h-10 w-10 rounded-full border border-[#94aa9f] text-[#80978b] flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f5f5f0] focus:outline-none focus:ring-2 focus:ring-[#80978b] focus:ring-offset-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!canGoNext}
            aria-label="Next classes"
            className="h-10 w-10 rounded-full border border-[#94aa9f] text-[#80978b] flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f5f5f0] focus:outline-none focus:ring-2 focus:ring-[#80978b] focus:ring-offset-2"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          {classesData.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? 'w-8 bg-[#80978b]' 
                  : 'w-2 bg-[#94aa9f]/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesCarousel;