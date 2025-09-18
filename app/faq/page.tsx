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
        answer: "We recommend comfortable, form-fitting athletic wear that allows for full range of movement. Avoid loose clothing that might get caught in the equipment. Grip socks are recommended for better stability on the reformer."
      },
      {
        question: "Do I need to bring anything to class?",
        answer: "We provide all necessary equipment including reformers, props, and cleaning supplies. Just bring yourself, a water bottle, and a positive attitude! Towels are also provided."
      },
      {
        question: "Is Pilates suitable for beginners?",
        answer: "Absolutely! Our classes are designed to accommodate all fitness levels. Our certified instructors will provide modifications and adjustments to ensure you feel comfortable and safe throughout your practice."
      }
    ]
  },
  {
    id: "packages",
    label: "Packages & Memberships",
    description: "Questions about packages and memberships?",
    items: [
      {
        question: "Can I try a reformer pilates class before committing to a membership?",
        answer: "Yes, we offer packages with trial passes for those who would like to experience reformer pilates before committing to a package."
      },
      {
        question: "Can I transfer my membership account to another holder?",
        answer: "Membership transfers are possible under certain circumstances. Please contact our studio directly to discuss your specific situation and any applicable transfer fees."
      },
      {
        question: "When does my class/package become active? Does it have an expiry date?",
        answer: "Your package becomes active from the date of purchase. Most packages have an expiry date of 3-6 months from activation, depending on the specific package purchased. Check your package details for exact expiry information."
      },
      {
        question: "Can I extend the expiration date of my classes or package?",
        answer: "Extensions may be available in certain circumstances such as medical reasons or extended travel. Please contact our studio at least 2 weeks before your package expires to discuss extension options and any applicable fees."
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
        answer: "You can book classes through our online booking system, mobile app, or by calling the studio directly. We recommend booking in advance as classes fill up quickly."
      },
      {
        question: "Can I change or cancel my booking?",
        answer: "Yes, you can modify or cancel your booking up to 12 hours before the class start time without penalty. Late cancellations may result in a charge to your account."
      },
      {
        question: "What happens if I'm late to class?",
        answer: "For safety reasons, we cannot admit students more than 5 minutes after class has started. Please arrive at least 10 minutes early to prepare and set up your equipment."
      }
    ]
  },
  {
    id: "cancellation",
    label: "Cancellation Policy",
    description: "Our cancellation and refund policies",
    items: [
      {
        question: "What is your cancellation policy?",
        answer: "Cancellations must be made at least 12 hours in advance to avoid charges. Late cancellations or no-shows will result in the loss of that class credit."
      },
      {
        question: "Can I get a refund for unused classes?",
        answer: "Refunds are generally not available for unused classes. However, we may consider refunds in exceptional circumstances such as medical issues or relocation. Please contact us to discuss your situation."
      },
      {
        question: "What happens if the studio cancels a class?",
        answer: "If we need to cancel a class, you will be notified as soon as possible and your class credit will be automatically returned to your account. You can then rebook for another available session."
      }
    ]
  },
  {
    id: "classes",
    label: "Classes & Levels",
    description: "Information about class types and difficulty levels",
    items: [
      {
        question: "What types of classes do you offer?",
        answer: "We offer various reformer Pilates classes including Beginner, Intermediate, Advanced, and specialized classes like Prenatal Pilates and Pilates for Seniors. Each class is designed to target different fitness goals and experience levels."
      },
      {
        question: "How do I know which class level is right for me?",
        answer: "Our instructors can help assess your fitness level and recommend appropriate classes. Beginners should start with our Foundation or Beginner classes, while those with Pilates experience can join Intermediate or Advanced sessions."
      },
      {
        question: "What is the maximum class size?",
        answer: "Our classes are kept small to ensure personalized attention, with a maximum of 8 participants per reformer class. This allows our instructors to provide individual guidance and ensure proper form."
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
        <div className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-12 border-b border-gray-200">
          {faqData.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setExpandedItems([]);
              }}
              className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium rounded-t-lg transition-colors duration-200 border-b-2 ${
                activeCategory === category.id
                  ? 'text-[#80978b] border-[#80978b] bg-[#80978b]/5'
                  : 'text-[#656565] border-transparent hover:text-[#80978b] hover:border-[#80978b]/50'
              }`}
            >
              {category.label}
            </button>
          ))}
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
                  <p className="text-[#656565] text-sm md:text-base leading-relaxed">
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
            <div className="relative z-10 flex flex-col md:flex-row mx-6 md:mx-16 items-center justify-center md:justify-between h-full text-white">
              <div className="mb-6 md:mb-0">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-lg md:text-xl mb-6 md:mb-8">
                  Get in touch with our team.
                  <br />
                  We're here to help you start your journey
                </p>
              </div>
              <button className="cursor-pointer hover:bg-[lightgray] transition-all duration-300 bg-white text-[#80978b] px-6 md:px-8 py-3 rounded-full font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 