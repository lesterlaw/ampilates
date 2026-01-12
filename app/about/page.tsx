import Image from "next/image";
import ClassesCarousel from "../components/ClassesCarousel";
import FadeInOnView from "../components/FadeInOnView";
import BookNowButton from "../components/BookNowButton";
import GetTrialNowButton from "../components/GetTrialNowButton";

export default function About() {
  return (
    <>
      {/* Green Hero Section */}
      <section className="bg-[#80978b] p-6 md:p-16 lg:p-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-7xl mx-auto items-center justify-center">
          <div className="text-white w-full">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8">
              Welcome to am Pilates
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover the transformative power of movement.
              <br /><br />
              Our diverse range of Pilates classes is thoughtfully designed to empower, strengthen, and energize your body. Whether you're a beginner or seasoned practitioner, each session is tailored to meet your unique needs—helping you move with intention and feel the flow of positive energy.
              <br /><br />
              Let’s embark on this journey together, embracing the strength, balance, and vitality that Pilates brings.
              <br /><br />
              Join us at our tranquil studio on the West side of Singapore at Jurong CPF, or experience our brand-new sanctuary at Punggol Coast Mall in the North-East—each space crafted to bring harmony and wellness closer to you.
            </p>
          </div>
          <Image
            src="/images/welcometopilates.png"
            alt="About am Pilates"
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-4xl"
          />
        </div>
      </section>

      {/* We are am Pilates Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#80978b] mb-6 md:mb-8">
            We are am Pilates
          </h2>
          <p className="text-base md:text-lg text-[#656565] max-w-4xl mx-auto leading-relaxed px-4 md:px-0">
            At am Pilates, we believe in the transformative power of movement.
            Our studio is more than just a place to exercise - it's a sanctuary
            where women come together to strengthen their bodies, calm their
            minds, and connect with like-minded individuals who share a passion
            for wellness and personal growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Image
                src="/images/expertinstructor.png"
                alt="Expert Instruction"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </div>
            <h3 className="font-display text-lg md:text-xl font-bold text-[#656565] mb-3 md:mb-4">
              Expert Instruction
            </h3>
            <p className="text-sm md:text-base text-[#656565] leading-relaxed">
              Our certified instructors bring years of experience and passion to
              every class, ensuring you receive personalised attention and
              proper guidance.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Image
                src="/images/reformer.png"
                alt="State-of-the-Art Equipment"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </div>
            <h3 className="font-display text-lg md:text-xl font-bold text-[#656565] mb-3 md:mb-4">
              State-of-the-Art Equipment
            </h3>
            <p className="text-sm md:text-base text-[#656565] leading-relaxed">
              Experience Pilates with top-quality reformers and equipment that
              enhance your practice and ensure effective, safe workouts.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Image
                src="/images/private-sessions.png"
                alt="Supportive Community"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </div>
            <h3 className="font-display text-lg md:text-xl font-bold text-[#656565] mb-3 md:mb-4">
              Supportive Community
            </h3>
            <p className="text-sm md:text-base text-[#656565] leading-relaxed">
              Join a welcoming community of women who support and inspire each
              other on their wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="bg-[#E4E8E2] rounded-[20px] md:rounded-[30px] p-6 md:p-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#4a4a4a] mb-4">
              Discover the transformative power of Reformer Pilates with us
            </h2>
          </div>

          <div className="flex justify-center mb-6 md:mb-8">
            <div className="relative w-full max-w-2xl md:max-w-4xl">
              <Image
                src="/images/newnewpilates.png"
                alt="Benefits"
                width={800}
                height={800}
                className="w-full h-auto"
              />

              {/* First Row - 3 items with huge gaps */}
              {/* Flexibility - Top Left */}
              <div className="absolute top-[10%] bg-[#D2D9D2] backdrop-blur-sm rounded-full px-3 md:px-6 lg:px-8 py-1 md:py-2 shadow">
                <span className="text-[#4a4a4a] font-semibold text-[10px] md:text-sm">
                  Flexibility
                </span>
              </div>

              {/* Core Strength - Top Center */}
              <div className="absolute top-[10%] left-[54%] transform -translate-x-1/2 bg-[#D2D9D2] backdrop-blur-sm rounded-full px-3 md:px-6 lg:px-8 py-1 md:py-2 shadow">
                <span className="text-[#4a4a4a] font-semibold text-[10px] md:text-sm">
                  Core Strength
                </span>
              </div>

              {/* Posture Enhancement - Top Right */}
              <div className="absolute top-[10%] right-[0%] bg-[#D2D9D2] backdrop-blur-sm rounded-full px-2 md:px-4 lg:px-8 py-1 md:py-2 shadow">
                <span className="text-[#4a4a4a] font-semibold text-[10px] md:text-sm text-center">
                  Posture<br className="hidden md:block" />
                  Enhancement
                </span>
              </div>

              {/* Second Row - 2 items with huge gaps */}
              {/* Mind-Body Connection - Bottom Left Quarter */}
              <div className="absolute bottom-[30%] left-[20%] md:left-[25%] bg-[#D2D9D2] backdrop-blur-sm rounded-full px-2 md:px-6 lg:px-8 py-1 md:py-2 shadow">
                <span className="text-[#4a4a4a] font-semibold text-[10px] md:text-sm">
                  Mind-Body Connection
                </span>
              </div>

              {/* Injury Prevention - Bottom Right Quarter */}
              <div className="absolute bottom-[30%] right-[0] bg-[#D2D9D2] backdrop-blur-sm rounded-full px-3 md:px-6 lg:px-8 py-1 md:py-2 shadow">
                <span className="text-[#4a4a4a] font-semibold text-[10px] md:text-sm">
                  Injury Prevention
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <BookNowButton />
          </div>
        </div>
      </section>

      {/* Our Location Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#80978b]">
          Our Locations
        </h2>
        <p className="text-base md:text-lg text-[#656565] my-6 md:my-8">
          Join us at our serene studio in the West side of Singapore at Jurong
          CPF, or experience our brand new space at Punggol Coast Mall in the
          North-East - thoughtfully designed to bring balance and vitality
          closer to you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="">
            <Image
              src={"/images/jurong-outlet.png"}
              alt="Studio Interior"
              width={500}
              height={300}
              className="w-full aspect-[4/3] object-cover rounded-2xl md:rounded-4xl mb-4 md:mb-6"
            />
            <h3 className="font-display text-xl md:text-2xl font-bold text-[#232323] mb-2">
              Jurong CPF Building
            </h3>
            <a
              href="https://www.google.com/maps/place/am+Pilates/@1.3349364,103.7349031,17z/data=!3m2!4b1!5s0x31da10053b0f374f:0x5256d6d8579e7bdf!4m6!3m5!1s0x31da114045a14cd1:0x91c6224e6f3e05af!8m2!3d1.334931!4d103.7397794!16s%2Fg%2F11y4_qv17y?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-[#656565] mb-4 hover:text-[#80978b] transition-colors cursor-pointer block"
            >
              21 Jurong Gateway Rd
              <br />
              #03-08 Entrance C, CPF Building
              <br />
              Singapore 608546
            </a>
            <p className="text-[#656565] text-xs md:text-sm flex flex-col gap-2">
              <a
                href="mailto:hello@ampilates.sg"
                className="flex items-center gap-2 hover:text-[#80978b] transition-colors cursor-pointer"
              >
                <svg
                  className="w-4 h-4 text-[#656565]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                hello@ampilates.sg
              </a>
              <a
                href="tel:+6596934753"
                className="flex items-center gap-2 hover:text-[#80978b] transition-colors cursor-pointer"
              >
                <svg
                  className="w-4 h-4 text-[#656565]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7z" />
                </svg>
                (65) 9693-4753
              </a>
            </p>
          </div>

          <div className="">
            <Image
              src={"/images/punggol-outlet.jpg"}
              alt="Punggol Coast Mall Studio"
              width={500}
              height={300}
              className="w-full aspect-[4/3] object-cover rounded-2xl md:rounded-4xl mb-4 md:mb-6"
            />
            <h3 className="font-display text-xl md:text-2xl font-bold text-[#232323] mb-2">
              TOWER 88 PUNGGOL WAY
            </h3>
            <a
              href="https://www.google.com/maps/place/am+Pilates+Punggol+Coast+Mall/@1.4155876,103.9078964,17z/data=!3m1!4b1!4m6!3m5!1s0x31da1545e1425bd1:0x1253a705f59dbf28!8m2!3d1.4155822!4d103.9104767!16s%2Fg%2F11yds3c6xr?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-[#656565] mb-4 hover:text-[#80978b] transition-colors cursor-pointer block"
            >
              Punggol Coast Mall (via Lobby D)
              <br />
              #12-111
              <br />
              Singapore 829913
            </a>
            <p className="text-[#656565] text-xs md:text-sm flex flex-col gap-2">
              <a
                href="mailto:hello@ampilates.sg"
                className="flex items-center gap-2 hover:text-[#80978b] transition-colors cursor-pointer"
              >
                <svg
                  className="w-4 h-4 text-[#656565]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                hello@ampilates.sg
              </a>
              <a
                href="tel:+6583335316"
                className="flex items-center gap-2 hover:text-[#80978b] transition-colors cursor-pointer"
              >
                <svg
                  className="w-4 h-4 text-[#656565]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7z" />
                </svg>
                (65) 8333-5316
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Our Amenities Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16 bg-[#80978B] rounded-[30px] md:rounded-[50px]">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-center">
          Our Amenities
        </h2>
        <p className="text-white text-base md:text-lg mb-8 md:mb-12 text-center">
          Our studios offer the following amenities for your comfort and convenience:
        </p>

        <div className="flex flex-col items-center gap-6">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-6 py-2 md:py-3">
              <svg className="w-4 h-4 md:w-5 md:h-5 fill-white" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
              </svg>
              <span className="text-white font-medium text-sm md:text-base">Changing Rooms</span>
            </div>

            <div className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-6 py-2 md:py-3">
              <svg className="w-4 h-4 md:w-5 md:h-5 fill-white" viewBox="0 0 24 24">
                <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2-5v6c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v7h-2z" />
              </svg>
              <span className="text-white font-medium text-sm md:text-base">Dresser Station with Hairdryer</span>
            </div>

            <div className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-6 py-2 md:py-3">
              <svg className="w-4 h-4 md:w-5 md:h-5 fill-white" viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM16 16h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z" />
              </svg>
              <span className="text-white font-medium text-sm md:text-base">Restrooms</span>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-6 py-2 md:py-3">
              <svg className="w-4 h-4 md:w-5 md:h-5 fill-white" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
              </svg>
              <span className="text-white font-medium text-sm md:text-base">Shower Facility</span>
            </div>

            <div className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-6 py-2 md:py-3">
              <svg className="w-4 h-4 md:w-5 md:h-5 fill-white" viewBox="0 0 24 24">
                <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2-5v6c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v7h-2z" />
              </svg>
              <span className="text-white font-medium text-sm md:text-base">Towels</span>
            </div>

            <div className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-6 py-2 md:py-3">
              <svg className="w-4 h-4 md:w-5 md:h-5 fill-white" viewBox="0 0 24 24">
                <path d="M5.64 20l-.07-.07c-.57-.81-.57-1.92 0-2.73l.07-.07L12 10.76l6.36 6.37c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L12 13.59l-4.95 4.95c-.39.39-1.02.39-1.41 0zM12 3l7 7H5l7-7z" />
              </svg>
              <span className="text-white font-medium text-sm md:text-base">Water Station</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#80978b] mb-3">
          Our Team
        </h2>
        <p className="text-base md:text-lg text-[#656565] mb-6 md:mb-8">
          Our dedicated instructors will guide you every step of the way. Join us today and be part of our community.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="relative mb-4">
              <Image
                src="/images/our-team.jpg"
                alt="Sarah Johnson"
                width={300}
                height={400}
                className="w-full aspect-[3/4] object-cover object-[center_65%] rounded-2xl"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm rounded-b-lg px-4 py-3">
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  Sarah Johnson
                </h3>
                <p className="text-white/90 text-sm font-medium">Lead Instructor</p>
              </div> */}
            </div>
          </div>

          <div className="text-center">
            <div className="relative mb-4">
              <Image
                src="/images/our-team1.jpg"
                alt="Emily Chen"
                width={300}
                height={400}
                className="w-full aspect-[3/4] object-cover object-[center_65%] rounded-2xl"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm rounded-b-lg px-4 py-3">
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  Emily Chen
                </h3>
                <p className="text-white/90 text-sm font-medium">Senior Instructor</p>
              </div> */}
            </div>
          </div>
          <div className="text-center">
            <div className="relative mb-4">
              <Image
                src="/images/our-team2.jpg"
                alt="Emily Chen"
                width={300}
                height={400}
                className="w-full aspect-[3/4] object-cover object-[center_65%] rounded-2xl"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm rounded-b-lg px-4 py-3">
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  Emily Chen
                </h3>
                <p className="text-white/90 text-sm font-medium">Senior Instructor</p>
              </div> */}
              </div>
          </div>

          <div className="text-center">
            <div className="relative mb-4">
              <Image
                src="/images/our-team3.jpg"
                alt="Amanda Lee"
                width={300}
                height={400}
                className="w-full aspect-[3/4] object-cover object-[center_65%] rounded-2xl"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm rounded-b-lg px-4 py-3">
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  Amanda Lee
                </h3>
                <p className="text-white/90 text-sm font-medium">Instructor</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <FadeInOnView>
        <ClassesCarousel
          heading="Our Classes"
          intro="New to am Pilates? Your journey begins with a fun and friendly Introductory Class—just one session to get you comfortable and confident before joining our regular classes!​"
        />
      </FadeInOnView>

      {/* Free Trial CTA */}
      <section className="relative">
        <div className="relative max-w-7xl mx-auto px-4 md:px-0">
          <div className="relative aspect-[16/14] md:aspect-[16/4] bg-[#80978b]/90 rounded-[30px] md:rounded-[50px] overflow-hidden">
            <Image
              src={"/images/first-time-trial.jpg"}
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
              <GetTrialNowButton className="px-8 md:px-12 py-3" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
