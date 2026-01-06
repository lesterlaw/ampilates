"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
};

const CHAR_LIMIT = 200;

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const needsTruncation = testimonial.quote.length > CHAR_LIMIT;

  const displayText = isExpanded
    ? testimonial.quote
    : testimonial.quote.slice(0, CHAR_LIMIT) +
      (needsTruncation ? "..." : "");

  // Get initials for avatar
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  // Generate a consistent color based on name
  const colors = [
    "bg-[#80978b]",
    "bg-[#94aa9f]",
    "bg-[#a8b5a0]",
    "bg-[#7a8f85]",
    "bg-[#6b8077]",
    "bg-[#5d7269]",
    "bg-[#8fa396]",
    "bg-[#728c7f]",
  ];
  const colorIndex = testimonial.name.length % colors.length;
  const avatarColor = colors[colorIndex];

  return (
    <div
      className="bg-[#EFECE1] rounded-[30px] md:rounded-[40px] relative w-full flex flex-col h-auto min-h-[320px] md:min-h-[380px]"
    >
      {/* Header with Google & Stars */}
      <div className="flex items-center justify-between px-5 md:px-6 pt-5 md:pt-6">
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            aria-label="Google"
          >
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="text-xs text-[#656565] font-medium">Google Review</span>
        </div>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]"
            />
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="flex-1 flex flex-col px-5 md:px-6 py-4 md:py-5">
        <div className="flex mb-3">
          <Image
            src="/images/quote.png"
            alt="Quote mark"
            width={32}
            height={32}
            className="w-8 h-8 opacity-60"
          />
        </div>
        <div className="flex-1">
          <p className="text-[#232323] text-sm md:text-[15px] leading-relaxed font-normal">
            {displayText}
          </p>
          {needsTruncation && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-[#80978b] hover:text-[#6b8077] text-sm font-medium transition-colors duration-200 underline underline-offset-2"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </div>

      {/* Profile Section */}
      <div className="px-5 md:px-6 pb-5 md:pb-6">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 md:w-11 md:h-11 rounded-full ${avatarColor} flex items-center justify-center text-white font-semibold text-sm`}
          >
            {initials}
          </div>
          <p className="font-semibold text-[#232323] text-[15px] md:text-[16px]">
            {testimonial.name}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsCarousel = () => {
  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        name: "Mandy Tam",
        quote:
          "I'm new to Pilates and so happy to have found a studio close my place! It's such a pleasant space with engaging instructors, and I particularly love Claudia's classes—she's attentive and makes every session enjoyable. The ambiance here is calming and welcoming, which really helps me relax and focus. I highly recommend this studio to anyone looking for a supportive and high-quality Pilates experience!",
      },
      {
        name: "Jiak Ng",
        quote:
          "Such a calming and welcoming space—and an incredible workout! The instructors at AM Pilates are knowledgeable, professional, and always on time. They bring so much passion, empathy, and motivation to every class, and it really shows. Since starting the Reformer Pilates classes, I've noticed a big improvement in my strength and flexibility. The sessions are fun, engaging, and leave me feeling inspired every time. Highly recommend!",
      },
      {
        name: "Yeolmin Koh",
        quote:
          "amPilates has truly transformed the way I approach fitness and wellness. From the moment you step into the studio, you're welcomed into a space that's not only beautifully designed but also filled with positive energy and a genuine sense of community. The instructors are exceptional — they take the time to understand your individual goals and tailor each session accordingly, ensuring you get the most out of every workout. What I appreciate most is their focus on proper technique and mindful movement, which has helped me improve my posture, core strength, and overall flexibility. The classes are challenging yet accessible, and I always leave feeling stronger, more balanced, and energized. Whether you're new to Pilates or looking to deepen your practice, amPilates offers an inspiring and supportive environment that makes every session rewarding. Highly recommended!",
      },
      {
        name: "Cindy Yew",
        quote:
          "Thank you! I've been attending the Pilates classes here for a while, and it's been a truly fantastic experience. The instructors are incredibly knowledgeable and attentive, always providing hands-on guidance to ensure everyone has the correct form and is getting the most out of the workout. The studio has a warm and welcoming atmosphere, which makes every class feel supportive and encouraging. After just a few weeks, I noticed a huge improvement in my core strength, posture, and overall flexibility. It's a top-notch studio, and I would highly recommend it to anyone looking for a great Pilates workout!",
      },
      {
        name: "April Chow",
        quote:
          "Attended the introductory class taught by teacher Daryll this morning! Awesome session. Even though it was an Introductory class, it was sufficiently challenging. Teacher Daryll was also very attentive to students. He will go around the class to assist the students, making sure they are doing the exercises correctly. He will also do periodic check-in to ensure we are managing well and nobody was left behind! The studio is also very spacious, clean and well equipped. Receptionist was also very helpful and friendly. Look no further, if you are planning to start your pilates reformer journey. I strongly recommended.",
      },
      {
        name: "Sie Nie Teo",
        quote:
          "AM Pilates has been amazing! The instructors are very knowledgeable and patient, always guiding us with clear instructions and corrections. I feel my posture, flexibility, and strength improving with every session. The studio is clean, welcoming, and the classes are well-paced for all levels. Truly a great place to practice Pilates!",
      },
      {
        name: "Kelly Chin",
        quote:
          "I just took an introductory Reformer Pilates class with Claudia and had such a fantastic experience! She was super clear, patient, and encouraging, perfect for someone new to Reformer Pilates like me. Sha, the manager, was also incredibly welcoming and helpful. From the moment I walked in, I felt comfortable and supported. The space was clean, professional, and had a really positive vibe. I'm definitely looking forward to coming back and would highly recommend this studio to anyone interested.",
      },
      {
        name: "ShiHui Sim",
        quote:
          "I'm new to Pilates reformers and now I'm completely hooked! The studio is bright, clean, and so well maintained. But what really makes the difference is the people. Kelly, the consultant at the front desk, is always warm and welcoming. She makes me feel right at home every time I arrive. Alma is my regular instructor, and I absolutely love her classes! I love her detailed guidance, and her attention to details like our names and even our past injuries. Her humour and professionalism make every class enjoyable. I've tried many classes elsewhere, and it's clear that Alma is an experienced instructor who truly loves what she does!",
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
  const maxIndex = Math.max(0, total - visibleCount);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

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

  // Calculate transform percentage based on card width
  const getTransformValue = () => {
    if (isMobile) {
      return `calc(-${currentIndex * 100}%)`;
    }
    // Desktop: each card is 1/3 width
    return `calc(-${currentIndex * (100 / 3)}%)`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="relative overflow-hidden -mx-4 md:mx-0" aria-live="polite">
        <motion.div
          className="flex"
          animate={{
            x: prefersReducedMotion ? 0 : getTransformValue(),
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
              <TestimonialCard testimonial={testimonial} index={i} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-center gap-4 mt-6 md:mt-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={!canGoPrev}
            aria-label="Previous testimonial"
            className="h-10 w-10 rounded-full border border-[#94aa9f] text-[#80978b] flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f5f5f0] focus:outline-none focus:ring-2 focus:ring-[#80978b] focus:ring-offset-2 transition-colors duration-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm text-[#656565] min-w-[60px] text-center">
            {currentIndex + 1} / {maxIndex + 1}
          </span>
          <button
            type="button"
            onClick={handleNext}
            disabled={!canGoNext}
            aria-label="Next testimonial"
            className="h-10 w-10 rounded-full border border-[#94aa9f] text-[#80978b] flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f5f5f0] focus:outline-none focus:ring-2 focus:ring-[#80978b] focus:ring-offset-2 transition-colors duration-200"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        {/* Progress dots for mobile */}
        <div className="flex md:hidden items-center gap-1.5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-6 bg-[#80978b]" : "w-1.5 bg-[#94aa9f]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

