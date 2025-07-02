import Image from 'next/image';

const TrialClassPage = () => {
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
              <p className="text-lg text-foreground underline">
                T&Cs apply.
              </p>
            </div>

            <button className="bg-primary text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-primary/90 transition-colors">
              Book Now
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-[30px] overflow-hidden">
              <Image
                src="/images/pilates-hero.png"
                alt="Pilates Studio"
                width={645}
                height={694}
                className="w-full h-96 object-cover"
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
              <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7H16c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h1v6h3zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-6H9V9.5C9 8.12 7.88 7 6.5 7S4 8.12 4 9.5V16h1.5v6h2z"/>
              </svg>
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
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
              </svg>
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

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="border-t border-gray-300 pt-16">
            <div className="mb-12">
              <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                Subscribe to the Newsletter
              </h3>
              <p className="text-lg text-secondary leading-relaxed">
                Subscribe to our newsletter to receive latest <br />
                updates, news and promotions. No spams, we <br />
                promise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 bg-white text-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <p className="text-lg text-secondary">
              By submitting your email address, you agree to receive emails from CleanCrew. You may unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrialClassPage; 