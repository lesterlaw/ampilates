"use client"
import Image from "next/image";
import DifficultyIcon from "../components/DifficultyIcon";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Classes() {
  const trialClasses = [
    {
      title: "1 Pass",
      validity: "Valid for 1 week from purchase",
      price: "$19.00",
    },
    {
      title: "12 Passes",
      validity: "Valid for 3 months from purchase",
      price: "$388.00",
    },
  ];

  const classPasses = [
    {
      title: "1 Pass",
      validity: "Valid for 1 day from purchase",
      price: "$49.00",
    },
    {
      title: "4 Passes",
      validity: "Valid for 1 month from purchase",
      price: "$192.00",
    },
    {
      title: "8 Passes",
      validity: "Valid for 2 months from purchase",
      price: "$376.00",
    },
    {
      title: "12 Passes",
      validity: "Valid for 3 months from purchase",
      price: "$540.00",
    },
    {
      title: "24 Passes",
      validity: "Valid for 6 months from purchase",
      price: "$1008.00",
    },
  ];

  const classesData = [
    {
      title: "Introductory Class",
      imageSrc: "/images/introduction-class.jpg",
      imageAlt: "Introductory Class",
      difficulty: 1,
      description: (
        <>
          <p className="text-sm md:text-base text-[#656565] leading-relaxed mb-4">
            Embark on a journey of self-discovery and physical transformation with the Introductory Class. The class focuses on the fundamentals of the:
          </p>
          <ul className="list-disc text-sm md:text-base text-[#656565] leading-relaxed space-y-2 ml-4 mb-4">
            <li>Pilates techniques: Terminology of cues frequently used in class, recognise landmark for alignment and corrections.</li>
            <li>Performer bed: Set up and safety precautions while using the reformer beds.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Firm Foundation",
      imageSrc: "/images/firm-foundation.jpg",
      imageAlt: "Firm Foundation",
      difficulty: 2,
      description: (
        <>
          <p className="text-sm md:text-base text-[#656565] leading-relaxed mb-4 whitespace-pre-line">
            Firm Foundation is designed to deepen your understanding of Pilates principles, refine technique, and strengthen movement patterns for better mobility and control. Building on the Introductory Class, it focuses on alignment, breath work, core engagement, and precision.
          </p>
          <p className="text-sm md:text-base text-[#656565] leading-relaxed">
            This is a great class for all members looking to strengthen their Pilates fundamentals – whether you're just starting out or refining your technique for a more advanced practice.
          </p>
        </>
      ),
    },
    {
      title: "Essential Strength",
      imageSrc: "/images/essential-strength.jpg",
      imageAlt: "Essential Strength Flexibility",
      difficulty: 3,
      description: (
        <>
          <p className="text-sm md:text-base text-[#656565] leading-relaxed mb-4">
            Step up your Reformer Pilates journey!
          </p>
          <p className="text-sm md:text-base text-[#656565] leading-relaxed mb-4 whitespace-pre-line">
            Designed for those who have completed the Introductory or Firm Foundation classes, this session focuses on building a strong, stable and balanced body. You'll master foundational exercises that strengthen your core, shoulders, and hips—using safe, posture-friendly movements that leave you feeling confident and empowered.
          </p>
          <p className="text-sm md:text-base text-[#656565] leading-relaxed">
            Perfect for anyone looking to boost strength, improve stability, and move better every day.
          </p>
        </>
      ),
    },
    {
      title: "Active Mobility",
      imageSrc: "/images/active-mobility.jpg",
      imageAlt: "Active Mobility",
      difficulty: 3,
      description: (
        <>
          <p className="text-sm md:text-base text-[#656565] leading-relaxed mb-4">
            This class is designed to help members who aim to improve flexibility & mobility. The class covers both:
          </p>
          <ul className="list-disc text-sm md:text-base text-[#656565] leading-relaxed space-y-2 ml-4 mb-4">
            <li>Passive flexibility to improve Range of Motion (ROM) to relieve muscle tension or stress, improve joint stability; and</li>
            <li>Active mobility to develop eccentric control of muscles especially at end range for injury prevention and optimise functional mobility for everyday activities.</li>
          </ul>
          <p className="text-sm md:text-base text-[#656565] leading-relaxed">
            It is suitable for everyone, particularly those seeking to alleviate stiffness and discomfort in the back, knee, and shoulder areas.
          </p>
        </>
      ),
    },
  ];

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
    <>
      {/* Classes Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">

        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#80978b] mb-4 md:mb-6">
            Our Classes
          </h2>
          <p className="text-lg md:text-xl text-[#656565] leading-relaxed max-w-5xl mx-auto px-4 md:px-0">
            New to am Pilates? Your journey begins with a fun and friendly Introductory Class—just one session to get you comfortable and confident before joining our regular classes!​
          </p>
        </div>

        <div className="hidden md:flex justify-center gap-2 mb-8">
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
                    className={`w-full h-48 md:h-64 rounded-3xl object-cover ${
                      item.title === "Firm Foundation" || 
                      item.title === "Essential Strength" || 
                      item.title === "Active Mobility"
                        ? "object-[center_65%]"
                        : ""
                    }`}
                  />
                  <div className="py-4 md:py-6 px-2 md:px-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[#232323] mb-2">{item.title}</h3>
                    <p className="text-[#232323] mb-2 flex items-center">
                      Difficulty level:
                      {[...Array(item.difficulty)].map((_, i) => (
                        <DifficultyIcon key={i} className="w-4 h-4 text-[#80978b] ml-2 first:ml-2" />
                      ))}
                    </p>
                    <div className="text-sm md:text-base text-[#656565] leading-relaxed">{item.description}</div>
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

        <div className="text-center mt-8 md:mt-12">
          <button className="bg-[#80978b] text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg">
            Book Now
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="bg-[#80978b]/10 rounded-[30px] md:rounded-[50px] p-6 md:p-12">
          {/* Trial Classes */}
          <div className="mb-8 md:mb-16">
            <div className="mb-6 md:mb-8">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#80978b] mb-2">
                Trial Classes
              </h2>
              <p className="text-[#80978b] text-base md:text-lg">
                Offer valid for first-time customers only.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
              {trialClasses.map((pass, index) => (
                <div
                  key={index}
                  className="bg-[#80978b] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {pass.title}
                  </h3>
                  <p className="text-base md:text-lg mb-4 opacity-90">
                    {pass.validity}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                    <p className="text-xl md:text-2xl font-bold">
                      {pass.price}
                    </p>
                    <Link href="/trial">
                      <button className="bg-[#94aa9f] text-white px-6 md:px-8 py-2 md:py-1 rounded-full font-bold text-xs md:text-sm">
                        Purchase Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Class Passes */}
          <div>
            <div className="mb-6 md:mb-8">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#80978b] mb-2">
                Class Passes
              </h2>
              <p className="text-[#80978b] text-base md:text-lg">
                Applicable for all members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {classPasses.map((pass, index) => (
                <div
                  key={index}
                  className="bg-[#80978b] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {pass.title}
                  </h3>
                  <p className="text-base md:text-lg mb-4 opacity-90">
                    {pass.validity}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                    <p className="text-xl md:text-2xl font-bold">
                      {pass.price}
                    </p>
                    <Link href="/trial">
                      <button className="bg-[#94aa9f] text-white px-6 md:px-8 py-2 md:py-1 rounded-full font-bold text-xs md:text-sm">
                        Purchase Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="relative">
        <div className="relative max-w-7xl mx-auto px-4 md:px-0">
          <div className="relative h-80 md:h-72 bg-[#80978b]/90 rounded-[30px] md:rounded-[50px] overflow-hidden">
            <Image
              src={"/images/free-trial.png"}
              alt="Free Trial Background"
              fill
              className="object-cover opacity-30"
            />
            <div className="relative z-10 flex flex-col md:flex-row mx-6 md:mx-16 items-center justify-center md:justify-between h-full text-center md:text-left text-white">
              <div className="mb-4 md:mb-0">
                <h2 className="font-serif text-[28px] md:text-4xl lg:text-5xl font-semibold mb-2 md:mb-4">
                  First-Time Trial at $19!​
                </h2>
                <p className="text-[15px] md:text-[19px] mb-4 md:mb-8">
                  Discover the strength, balance, and grace of Reformer Pilates in a welcoming and empowering space.
                  <br />
                  Join us at am Pilates and experience the difference.​
                </p>
              </div>
              <Link href="/trial">
                <button className="cursor-pointer hover:bg-[lightgray] transition-all duration-300 bg-white text-[#80978b] px-6 py-2.5 md:px-12 md:py-3 rounded-full font-semibold whitespace-nowrap">
                  Get Trial Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
