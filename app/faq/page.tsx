"use client";

import Image from "next/image";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  id: string;
  label: string;
  description: string;
  items: FAQItem[];
};

const faqData: FAQCategory[] = [
  {
    id: "general",
    label: "General FAQs",
    description: "Common questions about our studio and services",
    items: [
      {
        question: "What should I wear to class?",
        answer: "Wear comfy, form-fitting activewear that you can move in easily. Avoid loose clothing that may get caught in the reformer. They help keep you stable on the Reformer. Grip socks are a must for our classes too – for better traction and hygiene purposes. Don't own a pair? Drop by our studio to purchase our very own am Pilates socks!"
      },
      {
        question: "Is Reformer Pilates suitable for beginners?",
        answer: "We welcome all fitness levels. Our teachers are great at modifying exercises to suit beginners and making sure you are comfortable."
      },
      {
        question: "What are the benefits of Reformer Pilates?",
        answer: "Reformer Pilates is fantastic for improving flexibility, strength, posture, and overall body awareness. Plus, it's a great way to de-stress and feel good!"
      },
      {
        question: "Is there a minimum age required to attend a class?",
        answer: "Yes, the minimum age required to attend a Reformer Pilates class at am Pilates is 16 years old."
      }
    ]
  },
  {
    id: "packages",
    label: "Packages & Memberships",
    description: "Questions about packages and memberships?",
    items: [
      {
        question: "Can I try a Reformer Pilates class before committing to a membership?",
        answer: "Yes, we offer packages with trial passes for those who would like to experience Reformer Pilates before committing to a package."
      },
      {
        question: "Can I transfer my membership account to another holder?",
        answer: "No, all packages are intended for the recipient who purchased them and are nontransferable."
      },
      {
        question: "When does my class/package become active? Does it have an expiry date?",
        answer: "The first class must be booked within 1 month from the date of purchase. Otherwise, remaining sessions will be non-refundable.\n\nSubsequent classes have to be used within the following time frame:\nPurchase of 4 passes: valid for 1 month\nPurchase of 8 Passes: valid for 2 months\nPurchase of 12 Passes: valid for 3 months\nPurchase of 24 Passes: valid for 6 months\nPurchase of 48 Passes: valid for 12 months"
      },
      {
        question: "Can I extend the expiration date of my classes or package?",
        answer: "Please contact our studio for extension options. Extensions are granted on a case-bycase basis and may require an additional fee."
      }
    ]
  },
  {
    id: "booking",
    label: "Booking & Scheduling",
    description: "Information about booking classes and scheduling",
    items: [
      {
        question: "How do I book a class?",
        answer: "After purchasing our packages, you can book your desired class through our am Pilates application, under the [BOOK] tab. Advanced booking is recommended to secure your spot due to limited reformer beds each session."
      },
      {
        question: "Can I change or cancel my booking?",
        answer: "Yes, you can! Just manage your bookings through our app.\n\nNote: Effective 1st Jan 2025, all class cancellations must be made at least 12 hours before the class start time.\nFor cancellations made less than 12 hours before the start of class, a class credit will be deducted from your package."
      },
      {
        question: "How early should I arrive?",
        answer: "No lateness for Introductory classes. Please be in the studio 10 minutes earlier. It is important to be on time for your own safety (to be warmed up enough to avoid strains/injuries) and to be mindful of other students who are already in class. We allow a 5 minutes grace period for Essential Strength & Active Mobility classes. If you are late and turned away, your credit will still be deducted as if you attended."
      },
      {
        question: "How far in advance can I book my classes?",
        answer: "You can book your classes up to 8 days in advance, on a first come first serve basis. You may view the class schedule for the whole month on our app or on our Whatsapp catalog. (E.g. Classes for next Friday will be available for booking this Thursday, at 22:00)"
      }
    ]
  },
  {
    id: "classes",
    label: "Classes & Levels",
    description: "Information about class types and difficulty levels",
    items: [
      {
        question: "How long is a typical Reformer Pilates class?",
        answer: "Classes at am Pilates last for 50 minutes. Please arrive 10 minutes before your class to register your attendance and change into your attire."
      },
      {
        question: "Do I have to attend an introductory class before Firm Foundation, Essential Strength and Active Mobility classes?",
        answer: "Yes, you will have to attend at least 1 introductory class before signing up for the other classes, regardless if you have attended classes outside of am Pilates."
      },
      {
        question: "What is the maximum class size?",
        answer: "13 pax excluding instructor!"
      }
    ]
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("packages");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const handleToggleExpand = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const activeData = faqData.find(category => category.id === activeCategory) || faqData[1];

  return (
    <>
      {/* Green Hero Section */}
      <section className="bg-[#80978b] p-6 md:p-16 lg:p-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-7xl mx-auto">
          <div className="text-white w-full">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Need help with something? Here are our most frequently asked questions.
            </p>
          </div>
          <div className="w-full  flex justify-center">
            <Image
              src="/images/header.png"
              alt="FAQ Hero"
              width={400}
              height={400}
              className="w-full max-w-md h-auto object-cover rounded-4xl"
            />
          </div>
        </div>
      </section>

      {/* FAQ Navigation */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="relative -mx-4 md:mx-0">
          <div className="overflow-x-auto scrollbar-hide md:overflow-visible">
            <div className="flex md:flex-wrap gap-2 md:gap-4 mb-8 md:mb-12 border-b border-gray-200 px-4 md:px-0 min-w-max md:min-w-0">
              {faqData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setExpandedItems([]);
                  }}
                  className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium rounded-t-lg transition-colors duration-200 border-b-2 whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'text-[#80978b] border-[#80978b] bg-[#80978b]/5'
                      : 'text-[#656565] border-transparent hover:text-[#80978b] hover:border-[#80978b]/50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="mb-8">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#232323] mb-4">
            {activeData.label}
          </h2>
          <p className="text-base md:text-lg text-[#656565] mb-8">
            {activeData.description}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {activeData.items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => handleToggleExpand(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                aria-expanded={expandedItems.includes(index)}
                aria-label={`Toggle answer for: ${item.question}`}
              >
                <h3 className="font-semibold text-[#232323] text-base md:text-lg pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {expandedItems.includes(index) ? (
                    <svg
                      className="w-5 h-5 text-[#80978b] transform transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-[#80978b] transform transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {expandedItems.includes(index) && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-[#656565] text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
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
                  Still Have Questions?
                </h2>
                <p className="text-[15px] md:text-xl mb-4 md:mb-8">
                  Get in touch with our team.
                  <br />
                  We're here to help you start your journey
                </p>
              </div>
              <button className="cursor-pointer hover:bg-[lightgray] transition-all duration-300 bg-white text-[#80978b] px-6 py-2.5 md:px-8 md:py-3 rounded-full font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 