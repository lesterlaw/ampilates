import Image from "next/image";

export default function BirthdayPerks() {
  return (
    <>
      {/* Hero/Content Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
          <div className="w-full lg:w-1/2">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-[#232323] leading-tight mb-6 md:mb-8">
              Birthday Perks
            </h1>
            <p className="text-lg md:text-xl text-[#656565] mb-6 leading-relaxed">
              50% off à la carte services
            </p>
            <div className="space-y-4 mb-8">
              <p className="text-base md:text-lg text-[#656565] leading-relaxed">
                The discount only applies to à la carte Define services and is non-transferable.
              </p>
              <p className="text-base md:text-lg text-[#656565] leading-relaxed">
                Only for new to Define members.
              </p>
              <p className="text-base md:text-lg text-[#656565] leading-relaxed">
                Members must present an active membership shown on the app to redeem this discount at any Amore Define outlets.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/birthday-perks.webp"
              alt="Birthday Perks"
              width={500}
              height={600}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
