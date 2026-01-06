"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type CarouselImage = {
  src: string;
  alt: string;
};

const carouselImages: CarouselImage[] = [
  {
    src: "/images/Carousell (duo).jpg",
    alt: "Pilates Duo Class",
  },
  {
    src: "/images/Carousell (JC).jpg",
    alt: "Pilates Class at Jurong",
  },
  {
    src: "/images/Carousell (PC).jpg",
    alt: "Pilates Class at Punggol Coast",
  },
  {
    src: "/images/Carousell Solo.jpg",
    alt: "Solo Pilates Session",
  },
];

const AUTO_SCROLL_INTERVAL = 6000; // 6 seconds

const HomeBannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const totalImages = carouselImages.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const interval = setInterval(() => {
      goToNext();
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion, goToNext]);

  return (
    <div
      className="relative w-full overflow-hidden h-[300px] md:h-[600px] mb-8 md:mb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        <motion.div
          className="flex h-full"
          animate={{
            x: prefersReducedMotion
              ? 0
              : `-${currentIndex * 100}%`,
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-full flex-shrink-0"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={goToPrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 hover:bg-white text-[#80978b] flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#80978b] focus:ring-offset-2 z-10"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={goToNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 hover:bg-white text-[#80978b] flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#80978b] focus:ring-offset-2 z-10"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBannerCarousel;

