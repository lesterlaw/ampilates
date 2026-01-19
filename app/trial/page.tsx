"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useWhatsApp } from '../contexts/WhatsAppContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const TrialClassPage = () => {
  const { openModal } = useWhatsApp();
  const [showTnC, setShowTnC] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold font-serif text-primary leading-tight">
                Trial Class @ $19.00
              </h1>
              
              <h2 className="text-lg font-bold text-foreground leading-relaxed">
                Start Your Pilates Journey – Strength, Control, and Confidence Begin Here!
              </h2>
              
              <p className="text-lg text-foreground leading-relaxed">
                Whether you're new to Reformer Pilates or just new to us, our trial class is the perfect way to experience how am Pilates can help you move better, feel better, and live better.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-foreground">
                Duration: 50 minutes
              </p>
              <p className="text-lg text-foreground">
                What to Bring: Bring Grip Socks
              </p>
              <button 
                onClick={() => setShowTnC(true)}
                className="text-lg text-foreground underline hover:text-primary transition-colors cursor-pointer text-left"
              >
                T&Cs apply.
              </button>
            </div>

            <button 
              onClick={openModal}
              className="bg-primary text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Book Now
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-[30px] overflow-hidden">
              <Image
                src="/images/trial.png"
                alt="Pilates Studio"
                width={645}
                height={694}
                className="w-full h-[500px] object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-serif text-foreground mb-4">
            What to Expect
          </h2>
          <p className="text-lg text-foreground">
            For first time am Pilates members only.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Beginner Friendly */}
          <div className="bg-primary/10 rounded-2xl p-8 space-y-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Beginner Friendly
              </h3>
              <p className="text-xl text-secondary leading-relaxed">
                A beginner-friendly introduction to Reformer Pilates
              </p>
            </div>
          </div>

          {/* Guidance */}
          <div className="bg-primary/10 rounded-2xl p-8 space-y-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Image
                src="/images/guidance.png"
                alt="Guidance"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Guidance
              </h3>
              <p className="text-xl text-secondary leading-relaxed">
                Guidance from certified, supportive instructor
              </p>
            </div>
          </div>

          {/* Full-Body Workout */}
          <div className="bg-primary/10 rounded-2xl p-8 space-y-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/images/fullbody.png"
                alt="Full-Body Workout"
                width={56}
                height={56}
                className="w-14 h-14 object-contain rounded-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Full-Body Workout
              </h3>
              <p className="text-xl text-secondary leading-relaxed">
                A beginner-friendly introduction to Reformer Pilates
              </p>
            </div>
          </div>

          {/* Comfortable Studio */}
          <div className="bg-primary/10 rounded-2xl p-8 space-y-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Comfortable Studio
              </h3>
              <p className="text-xl text-secondary leading-relaxed">
                A studio space designed for calm, clarity, and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary/10 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-foreground">
              Have a question / enquiry? Reach out to us!
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-6 py-4 rounded-full border border-gray-300 bg-white text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 rounded-full border border-gray-300 bg-white text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <select className="w-full px-6 py-4 rounded-full border border-gray-300 bg-white text-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none">
                <option>Subject</option>
                <option>Trial Class Enquiry</option>
                <option>General Question</option>
                <option>Booking Support</option>
              </select>
            </div>

            <div>
              <label className="block text-secondary text-lg mb-2">Location</label>
              <select className="w-full px-6 py-4 rounded-full border border-gray-300 bg-white text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none">
                <option>Jurong CPF</option>
                <option>Punggol Coast Mall</option>
              </select>
            </div>

            <div>
              <textarea
                placeholder="Your message"
                rows={6}
                className="w-full px-6 py-4 rounded-3xl border border-gray-300 bg-white text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Terms & Conditions Dialog */}
      <Dialog open={showTnC} onOpenChange={setShowTnC}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              Single Trial Pass $19 : Terms & Conditions
            </DialogTitle>
            <DialogDescription className="sr-only">
              Terms and conditions for the Single Trial Pass at $19
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-3">
            <ul className="space-y-3 text-foreground">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Valid for first-time clients only (no prior visits or packages with am Pilates).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Trial is limited to one class per person.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>First time trial class is for Introductory group reformer classes only.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Advance booking required and subject to availability.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Full payment required to confirm booking.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Paid bookings are non-refundable and non-transferable.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>12 hours cancellation policy applies. Late cancellations or no-shows will result in forfeiture of the trial.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Grip socks are mandatory (available for purchase in studio).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Not valid in conjunction with other promotions, discounts or packages.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>am Pilates reserves the right to amend or withdraw the trial offer without prior notice.</span>
              </li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TrialClassPage; 