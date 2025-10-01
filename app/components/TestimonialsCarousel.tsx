"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  age: number;
  profession: string;
  image: string;
};

const TestimonialsCarousel = () => {
  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        quote:
          "What a fun experience! Class was engaging and the instructors was so patient and helpful at correcting my posture.",
        name: "Amelia Lenny",
        age: 35,
        profession: "Teacher",
        image: "/images/testimonial.png",
      },
      {
        quote:
          "What a fun experience! Class was engaging and the instructors was so patient and helpful at correcting my posture.",
        name: "Amelia Lenny",
        age: 35,
        profession: "Teacher",
        image: "/images/testimonial.png",
      },
      {
        quote:
          "What a fun experience! Class was engaging and the instructors was so patient and helpful at correcting my posture.",
        name: "Amelia Lenny",
        age: 35,
        profession: "Teacher",
        image: "/images/testimonial.png",
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
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const total = testimonials.length;
  const visibleCount = isMobile ? 1 : 3;
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < total - visibleCount;

  const handlePrev = useCallback(() => {
    if (canGoPrev) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [canGoPrev]);

  const handleNext = useCallback(() => {
    if (canGoNext) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [canGoNext]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="relative overflow-hidden -mx-4 md:mx-0" aria-live="polite">
        <motion.div
          className="flex transition-transform duration-500 ease-out"
          animate={{
            x: prefersReducedMotion
              ? 0
              : isMobile
              ? `calc(-${currentIndex * 100}%)`
              : 0,
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="w-full md:w-1/3 flex-shrink-0 px-4 md:px-3"
              role="listitem"
            >
              <div className="bg-[#EFECE1] rounded-[30px] md:rounded-[50px] relative w-full flex h-[350px] md:h-[420px]">
                <div>
                  <div className="flex flex-col items-start justify-center px-4 md:px-8 gap-4 md:gap-6">
                    <div className="p-4 md:p-8">
                      <div className="rounded-lg flex">
                        <Image
                          src="/images/quote.png"
                          alt="Quote mark"
                          width={50}
                          height={50}
                          className="w-[50px] h-[50px]"
                        />
                      </div>
                    </div>
                    <p className="text-[#232323] text-center text-base md:text-[20px] leading-6 md:leading-[30px] font-normal px-2 md:px-0">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Profile Section with Background */}
                  <div className="absolute bottom-0 left-0 right-0 w-2/3">
                    <div className="bg-[#fafaf5] rounded-tl-none rounded-tr-[20px] rounded-bl-[20px] rounded-br-none ml-auto flex items-center px-4 md:px-6 py-3 md:py-4 space-x-2 md:space-x-3">
                      <Image
                        src={testimonial.image}
                        alt="Client"
                        width={55}
                        height={55}
                        className="rounded-full w-[40px] h-[40px] md:w-[55px] md:h-[55px]"
                      />
                      <div>
                        <p className="font-bold text-[#656565] text-[16px] md:text-[20px] leading-[19px] md:leading-[23px] tracking-[0.01em]">
                          {testimonial.name}
                        </p>
                        <p className="text-[#656565] text-[16px] md:text-[20px] leading-[19px] md:leading-[23px] tracking-[0.01em] font-normal">
                          {testimonial.age}, {testimonial.profession}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden flex-col items-center gap-4 mt-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={!canGoPrev}
            aria-label="Previous testimonial"
            className="h-10 w-10 rounded-full border border-[#94aa9f] text-[#80978b] flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f5f5f0] focus:outline-none focus:ring-2 focus:ring-[#80978b] focus:ring-offset-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!canGoNext}
            aria-label="Next testimonial"
            className="h-10 w-10 rounded-full border border-[#94aa9f] text-[#80978b] flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f5f5f0] focus:outline-none focus:ring-2 focus:ring-[#80978b] focus:ring-offset-2"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-[#80978b]" : "w-2 bg-[#94aa9f]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

