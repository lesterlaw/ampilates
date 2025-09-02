"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DifficultyIcon from "./DifficultyIcon";
import { motion, useReducedMotion } from "framer-motion";

type ClassCard = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  difficulty: number; // 1..3
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
        title: "Introduction Class",
        imageSrc: "/images/introduction-class.png",
        imageAlt: "Introduction Class",
        difficulty: 3,
        description:
          "Never Tried Reformer Pilates before? This Introductory Class is the perfect first step. You'll get to know the equipment, learn key safety tips, and understand the terms and cues used in class. Plus, we'll guide you through body alignment basics to help you move with confidence and ease.",
      },
      {
        title: "Essential Strength",
        imageSrc: "/images/essential-strength-1.png",
        imageAlt: "Essential Strength",
        difficulty: 2,
        description:
          "Your Next Step to Mastering Pilates! This dynamic class builds on the Introductory session, helping you sharpen technique, boost mobility, and move with greater control and confidence.",
      },
      {
        title: "Essential Strength",
        imageSrc: "/images/essential-strength-2.png",
        imageAlt: "Essential Strength Flexibility",
        difficulty: 3,
        description:
          "For the Pilates Girlies Starting Their Strength Journey. Ready to feel stronger and more stable? Learn how to activate your core, shoulder, and hip stabilisers—key muscles that support balance, posture, and control in every movement.",
      },
      {
        title: "Strengthening Core",
        imageSrc: "/images/strengthening-core.png",
        imageAlt: "Strengthening Core",
        difficulty: 0,
        description:
          "Flexibility & Mobility Goals? Let's Get Moving! Improve flexibility, boost mobility, and relieve stress through mindful movement and targeted stretches.",
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const total = classesData.length;
  const visibleCount = 3; // Always show 3 cards
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < total - visibleCount;

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

      <div className="relative overflow-hidden" aria-live="polite">
        <motion.div
          className="flex transition-transform duration-500 ease-out"
          animate={{ 
            x: prefersReducedMotion ? 0 : `calc(-${currentIndex * (100/3)}% - ${currentIndex * 2}rem)` 
          }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {classesData.map((item, idx) => (
            <div 
              key={`${item.title}-${idx}`} 
              className="w-1/3 flex-shrink-0 px-3 md:px-4"
              role="listitem"
            >
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={400}
                  height={300}
                  className="w-full h-48 md:h-64 rounded-3xl object-cover"
                />
                <div className="py-4 md:py-6 px-2 md:px-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[#232323] mb-2">{item.title}</h3>
                  <p className="text-[#232323] mb-2 flex items-center">
                    Difficulty level:
                    {[...Array(item.difficulty)].map((_, i) => (
                      <DifficultyIcon key={i} className="w-4 h-4 text-[#80978b] ml-2 first:ml-2" />
                    ))}
                  </p>
                  <p className="text-sm md:text-base text-[#656565] leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex md:hidden items-center justify-center gap-3 mt-6">
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
    </section>
  );
};

export default ClassesCarousel;