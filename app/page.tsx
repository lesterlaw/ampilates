import Image from "next/image";
import { Star, Quote, MapPin } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-8xl font-semibold text-[#232323] leading-tight mb-6 md:mb-8">
            Empowering you,
            <br />
            one movement at a time.
          </h1>
        </div>

        <div className="relative rounded-[30px] md:rounded-[60px] overflow-hidden h-[300px] md:h-[600px] mb-8 md:mb-16">
          <Image
            src={"/images/pilates-hero.png"}
            alt="Pilates Studio Interior"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#80978b] mb-6 md:mb-8">
            We are am Pilates
          </h2>
          <p className="text-lg md:text-xl text-[#656565] max-w-5xl mx-auto leading-relaxed px-4 md:px-0">
            Discover the beauty of Pilates at am Pilates. Explore our diverse
            classes, designed to <strong>empower</strong> and <strong>strengthen</strong> your body. Feel the
            positive energy flow as you engage in movement tailored to your
            needs. Let’s embark on this journey together, embracing the power of
            Pilates.
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
              We’re building a vibrant community of like-minded women who come together in a safe, supportive, and welcoming space to experience the transformative power of Reformer Pilates.​
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
                Discover the <strong>benefits</strong> of Reformer Pilates, including:
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
              <MapPin className="w-16 h-16 text-[#80978b]" strokeWidth={2.5} />
            </div>
            <h3 className="font-display text-lg md:text-xl font-bold text-[#656565] mb-3 md:mb-4">
              Conveniently
              <br />
              Located
            </h3>
            <div className="text-sm md:text-base text-[#656565] leading-relaxed">
              <p>
                Join us at our serene studio in the West side of Singapore at Jurong CPF, or experience our brand new space at Punggol Coast Mall in the North-East — thoughtfully designed to bring balance and vitality closer to you.​
              </p>
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
            <div className="relative z-10 flex flex-col md:flex-row mx-6 md:mx-16 items-center justify-center md:justify-between h-full text-center text-white">
              <div className="mb-6 md:mb-0 text-left">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">
                  First-Time Trial at $19!​
                </h2>
                <p className="text-[17px] md:text-[19px] mb-6 md:mb-8">
                  Discover the strength, balance, and grace of Reformer Pilates in a welcoming and empowering space.
                  <br />
                  Join us at am Pilates and experience the difference.​
                </p>
              </div>
              <button className="cursor-pointer hover:bg-[lightgray] transition-all duration-300 bg-white text-[#80978b] px-8 md:px-12 py-3 rounded-full font-semibold whitespace-nowrap">
                Get Trial Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Classes Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#80978b] mb-6 md:mb-8">
          Our Classes
        </h2>
        <p className="text-lg md:text-xl text-[#656565] leading-snug mb-4 w-full">
          New to am Pilates? Your journey begins with a fun and friendly Introductory Class—just one session to get you comfortable and confident before joining our regular classes!​
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
          {/* Introduction Class */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src={"/images/our-class-1.png"}
              alt="Introduction Class"
              width={400}
              height={300}
              className="w-full h-48 md:h-64 rounded-lg object-contain"
            />
            <div className="p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#232323] mb-2">
                Introduction Class
              </h3>
              <p className="text-[#232323] mb-2 flex items-center">
                Difficulty level:
                <Star className="w-4 h-4 fill-[#80978b] text-[#80978b] ml-2" />
                <Star className="w-4 h-4 fill-[#80978b] text-[#80978b] ml-0.5" />
                <Star className="w-4 h-4 fill-[#80978b] text-[#80978b] ml-0.5" />
              </p>
              <p className="text-sm md:text-base text-[#656565] leading-relaxed">
                <strong>Never Tried Reformer Pilates before?</strong>
                <br />
                This Introductory Class is the perfect first step. You’ll get to know the equipment, learn key safety tips, and understand the terms and cues used in class. Plus, we’ll guide you through body alignment basics to help you move with confidence and ease.
              </p>
            </div>
          </div>

          {/* Essential Strength 1 */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src={"/images/our-class-2.png"}
              alt="Essential Strength"
              width={400}
              height={300}
              className="w-full h-48 md:h-64 rounded-lg object-contain"
            />
            <div className="p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#232323] mb-2">
                Essential Strength
              </h3>
              <p className="text-[#232323] mb-2 flex items-center">
                Difficulty level:
                <Star className="w-4 h-4 fill-[#80978b] text-[#80978b] ml-2" />
                <Star className="w-4 h-4 fill-[#80978b] text-[#80978b] ml-0.5" />
              </p>
              <p className="text-sm md:text-base text-[#656565] leading-relaxed">
                <strong>Your Next Step to Mastering Pilates!</strong>
              </p>
              <p className="text-sm md:text-base text-[#656565] leading-relaxed">
                This dynamic class builds on the Introductory session, helping you sharpen technique, boost mobility, and move with greater control and confidence. Expect a strong focus on alignment, breath, core activation, and precision—perfect for anyone looking to solidify their Pilates fundamentals, whether you're just starting out or leveling up your practice.
              </p>
            </div>
          </div>

          {/* Essential Strength 2 */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src={"/images/our-class-3.png"}
              alt="Essential Strength Flexibility"
              width={400}
              height={300}
              className="w-full h-48 md:h-64 rounded-lg object-contain"
            />
            <div className="p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#232323] mb-2">
                Essential Strength
              </h3>
              <p className="text-[#232323] mb-2 flex items-center">
                Difficulty level:
                <Star className="w-4 h-4 fill-[#80978b] text-[#80978b] ml-2" />
                <Star className="w-4 h-4 fill-[#80978b] text-[#80978b] ml-0.5" />
                <Star className="w-4 h-4 fill-[#80978b] text-[#80978b] ml-0.5" />
              </p>
              <p className="text-sm md:text-base text-[#656565] leading-relaxed">
                Time to work on your flexibility and mobility – learn to improve
                your range of motion to relieve muscle tension and stress.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            className="bg-[#80978b] hover:bg-[#6b8276] cursor-pointer text-white px-10 md:px-12 py-3 rounded-full font-semibold transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#80978b] focus:ring-offset-2 whitespace-nowrap"
            aria-label="Start your free trial"
          >
            Get Trial Now
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#80978b] mb-4">
            Our Clients' Experiences
          </h2>
          <p className="text-base md:text-lg text-[#656565] mb-8 md:mb-12">
            Hear what our client shave to say about their experience.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-[#EFECE1] rounded-[30px] md:rounded-[50px] relative w-full flex h-[350px] md:h-[420px]"
              >
                <div>
                  <div className="flex flex-col items-start justify-center px-4 md:px-8 gap-4 md:gap-6">
                    <div className="p-4 md:p-8">
                      <div className=" rounded-lg flex">
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
                      What a fun experience! Class was engaging and the
                      instructors was so patient and helpful at correcting my
                      posture.
                    </p>
                  </div>

                  {/* Profile Section with Background */}
                  <div className="absolute bottom-0 left-0 right-0 w-2/3">
                    <div className="bg-[#fafaf5] rounded-tl-none rounded-tr-[20px] rounded-bl-[20px] rounded-br-none  ml-auto flex items-center px-6 py-4 space-x-3">
                      <Image
                        src="/images/testimonial.png"
                        alt="Client"
                        width={55}
                        height={55}
                        className="rounded-full w-[55px] h-[55px]"
                      />
                      <div>
                        <p className="font-bold text-[#656565] text-[20px] leading-[23px] tracking-[0.01em]">
                          Amelia Lenny
                        </p>
                        <p className="text-[#656565] text-[20px] leading-[23px] tracking-[0.01em] font-normal">
                          35, Teacher
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="bg-[#80978b]/10 rounded-[30px] md:rounded-[50px] p-6 md:p-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#80978b] text-center mb-4">
            Contact Us
          </h2>
          <p className="text-sm md:text-base text-[#80978b] text-center mb-8 md:mb-12">
            Have a question / enquiry? Reach out to us!
          </p>

          <form className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#80978b]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#80978b]"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#80978b]"
            />
            <textarea
              placeholder="Your message"
              rows={6}
              className="w-full p-4 rounded-[30px] bg-white border border-gray-300 focus:outline-none focus:border-[#80978b] resize-none"
            />
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#80978b] cursor-pointer hover:bg-[#6b8276] text-white px-8 py-3 rounded-full font-bold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>


    </>
  );
}
