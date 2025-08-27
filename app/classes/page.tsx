import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

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

  return (
    <>
      {/* Classes Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#80978b] mb-6 md:mb-8">
          Our Classes
        </h1>
        <p className="text-base md:text-lg text-[#656565] mb-8 md:mb-12 max-w-3xl">
          *Please note one Introductory Class is required before you can enroll
          in the Essential Strength and Active Mobility classes.
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
                Take this class and learn about the equipments, safety measures,
                terms and cues of a reformer pilates class.
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
                For the new to pilates girlies who want to become stronger and
                work on stability. Learn how to work on your core, shoulder and
                hip stabilisers.
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
                For first time am Pilates members only.
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
                For all members.
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
            <div className="relative z-10 flex flex-col md:flex-row mx-6 md:mx-16 items-center justify-center md:justify-between h-full text-center text-white">
              <div className="mb-6 md:mb-0 text-left">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">
                  First-Time Trial at $19!​
                </h2>
                <p className="text-lg md:text-xl mb-6 md:mb-8">
                  Discover the strength, balance, and
                  <br />
                  grace of Reformer Pilates in a welcoming
                  <br />
                  and empowering space.​
                  <br />
                  <br />
                  Join us at am Pilates and experience the
                  <br />
                  difference.​
                </p>
              </div>
              <Link href="/trial">
                <button className="cursor-pointer hover:bg-[lightgray] transition-all duration-300 bg-white text-[#80978b] px-6 md:px-8 py-3 rounded-full font-semibold">
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
