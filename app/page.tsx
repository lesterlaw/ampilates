import Image from "next/image";
import DifficultyIcon from "./components/DifficultyIcon";
import ClassesCarousel from "./components/ClassesCarousel";
import FadeInOnView from "./components/FadeInOnView";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <FadeInOnView as="section" className="max-w-7xl mx-auto px-4 md:px-8 pt-4 pb-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-serif text-[38px] md:text-6xl lg:text-8xl font-semibold text-[#232323] leading-tight mb-6 md:mb-8">
            Empowering you,
            <br />
            one movement at a time.
          </h1>
        </div>
      </FadeInOnView>

      {/* Full Width Banner */}
      <div className="relative w-full overflow-hidden h-[300px] md:h-[600px] mb-8 md:mb-16">
        <Image
          src={"/images/homepage-banner.jpg"}
          alt="Pilates Studio Interior"
          fill
          className="object-cover"
        />
      </div>

      {/* About Section */}
      <FadeInOnView as="section" className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#80978b] mb-6 md:mb-8">
            We are am Pilates
          </h2>
          <p className="text-lg md:text-xl text-[#656565] max-w-5xl mx-auto leading-relaxed px-4 md:px-0">
            Discover the beauty of Pilates at am Pilates. Explore our diverse
            classes, designed to <strong>empower</strong> and{" "}
            <strong>strengthen</strong> your body. Feel the positive energy flow
            as you engage in movement tailored to your needs. Let’s embark on
            this journey together, embracing the power of Pilates.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Image
                src={"/images/ladies-exclusive.png"}
                alt="Ladies Exclusive"
                width={64}
                height={64}
              />
            </div>
            <h3 className="font-display text-lg md:text-xl font-bold text-[#656565] mb-3 md:mb-4">
              Ladies
              <br />
              Exclusive
            </h3>
            <p className="text-sm md:text-base text-[#656565] leading-relaxed">
              We’re building a vibrant community of like-minded women who come
              together in a safe, supportive, and welcoming space to experience
              the transformative power of Reformer Pilates.​
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Image
                src={"/images/reformer.png"}
                alt="Dynamic Reformer"
                width={64}
                height={64}
              />
            </div>
            <h3 className="font-display text-lg md:text-xl font-bold text-[#656565] mb-3 md:mb-4">
              Dynamic
              <br />
              Reformer Group Class
            </h3>
            <div className="text-sm md:text-base text-[#656565] leading-relaxed">
              <p>
                Discover the <strong>benefits</strong> of Reformer Pilates,
                including:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Core Strength</li>
                <li>Flexibility</li>
                <li>Mind-Body Connection</li>
                <li>Injury Prevention</li>
                <li>Posture Enhancement</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                id="fi_3425077"
                className="w-16 h-16 text-[#80978b]"
                aria-hidden="true"
                focusable="false"
                fill="currentColor"
              >
                <g>
                  <path d="M62.594,112.389a1.755,1.755,0,0,0,1.383.708H64a1.749,1.749,0,0,0,1.377-.671c1.448-1.847,35.45-45.549,35.45-73.227a36.827,36.827,0,0,0-73.654,0c0,10.6,5.981,26.165,17.779,46.26C53.668,100.305,62.506,112.27,62.594,112.389ZM64,5.872A33.364,33.364,0,0,1,97.327,39.2c0,23.369-26.776,60.519-33.291,69.21C57.6,99.383,30.673,60.388,30.673,39.2A33.364,33.364,0,0,1,64,5.872Z"></path>
                  <path d="M85.17,39.2A21.17,21.17,0,1,0,64,60.369,21.193,21.193,0,0,0,85.17,39.2ZM64,56.869A17.67,17.67,0,1,1,81.67,39.2,17.69,17.69,0,0,1,64,56.869Z"></path>
                  <path d="M81.844,101.166a1.751,1.751,0,0,0-.426,3.475c15.067,1.849,19.942,5.337,19.942,6.736,0,2.627-13.186,7.74-37.36,7.74S26.64,114,26.64,111.377c0-1.5,4.781-4.569,17.613-6.425a1.751,1.751,0,0,0-.5-3.465c-9.4,1.361-20.612,4.18-20.612,9.89,0,8.247,24.435,11.24,40.86,11.24s40.86-2.993,40.86-11.24C104.86,104.951,90.44,102.222,81.844,101.166Z"></path>
                </g>
              </svg>
            </div>
            <h3 className="font-display text-lg md:text-xl font-bold text-[#656565] mb-3 md:mb-4">
              Conveniently
              <br />
              Located
            </h3>
            <div className="text-sm md:text-base text-[#656565] leading-relaxed">
              <p>
                Join us at our serene studio in the West side of Singapore at
                Jurong CPF, or experience our brand new space at Punggol Coast
                Mall in the North-East — thoughtfully designed to bring balance
                and vitality closer to you.​
              </p>
            </div>
          </div>
        </div>
      </FadeInOnView>

      {/* Free Trial CTA */}
      <FadeInOnView as="section" className="relative">
        <div className="relative max-w-7xl mx-auto px-4 md:px-0">
          <div className="relative h-80 md:h-72 bg-[#80978b]/90 rounded-[30px] md:rounded-[50px] overflow-hidden">
            <Image
              src={"/images/first-time-trial.jpg"}
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
                  Discover the strength, balance, and grace of Reformer Pilates
                  in a welcoming and empowering space.
                  <br />
                  Join us at am Pilates and experience the difference.​
                </p>
              </div>
              <button className="cursor-pointer hover:bg-[lightgray] transition-all duration-300 bg-white text-[#80978b] px-6 py-2.5 md:px-12 md:py-3 rounded-full font-semibold whitespace-nowrap">
                Get Trial Now
              </button>
            </div>
          </div>
        </div>
      </FadeInOnView>
      {/* Classes Section */}
      <FadeInOnView>
        <ClassesCarousel
          heading="Our Classes"
          intro="New to am Pilates? Your journey begins with a fun and friendly Introductory Class—just one session to get you comfortable and confident before joining our regular classes!​"
        />
      </FadeInOnView>

      {/* Testimonials Section */}
      <FadeInOnView as="section" className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#80978b] mb-4">
            Member Reviews
          </h2>
          <p className="text-base md:text-lg text-[#656565]">
            <strong>Hear from Our Community</strong>
          </p>
          <p className="text-base md:text-lg text-[#656565] mb-8 md:mb-12">
            Discover what our members love about am Pilates and how Reformer
            Pilates has transformed their strength, confidence, and well-being.
          </p>
        </div>

        <TestimonialsCarousel />
      </FadeInOnView>

      {/* Contact Section */}
      <FadeInOnView as="section" className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="bg-[#80978b]/10 rounded-[30px] md:rounded-[50px] p-6 md:p-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#80978b] text-center mb-4">
            Contact Us
          </h2>
          <p className="text-sm md:text-base text-[#80978b] text-center mb-8 md:mb-12">
            Have a question / enquiry? Reach out to us!
          </p>

          <ContactForm />
        </div>
      </FadeInOnView>
    </>
  );
}
