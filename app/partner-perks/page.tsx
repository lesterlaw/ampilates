import Image from "next/image";
import GetStartedButton from "../components/GetStartedButton";

export default function PartnerPerks() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-[#80978b] leading-tight mb-6 md:mb-8">
            Partner Perks
          </h1>
          <p className="text-lg md:text-xl text-[#656565] max-w-4xl mx-auto leading-relaxed px-4 md:px-0">
            Enjoy exclusive discounts and special offers from our valued partners when you join us as a member!
          </p>
        </div>

        <div className="relative rounded-[30px] md:rounded-[60px] overflow-hidden mb-8 md:mb-16">
          <Image
            src={"/images/partnerperks.jpg"}
            alt="am Pilates Partner Perks"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* FullOut Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/fullout.webp"
              alt="FullOut products"
              width={500}
              height={600}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#232323] mb-6">
              FullOut
            </h2>
            <p className="text-lg md:text-xl text-[#656565] mb-6 leading-relaxed">
              15% off FullOut's products
            </p>
            <p className="text-base md:text-lg text-[#656565] mb-6 leading-relaxed">
              Terms and Conditions: The discount applies to online purchases on{' '}
              <a
                href="https://fullout.cc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#80978b] underline hover:text-[#80978b]/80"
              >
                https://fullout.cc/
              </a>
            </p>
            <p className="text-base md:text-lg text-[#656565] mb-6 leading-relaxed">
              How to redeem? Apply discount code{' '}
              <span className="font-semibold text-[#80978b]">(AM15)</span> when checking out.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative">
        <div className="relative max-w-7xl mx-auto px-4 md:px-0">
          <div className="relative aspect-[4/5] md:aspect-[16/6] bg-[#80978b]/90 rounded-[30px] md:rounded-[50px] overflow-hidden">
            <Image
              src={"/images/ready-to-join.jpg"}
              alt="Ready to Join Background"
              fill
              className="object-cover opacity-30"
            />
            <div className="relative z-10 flex flex-col md:flex-row mx-6 md:mx-16 items-center justify-center md:justify-between h-full text-white">
              <div className="mb-6 md:mb-0">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">
                  Ready to Join?
                </h2>
                <p className="text-lg md:text-xl mb-6 md:mb-8">
                  Become a member today and enjoy
                  <br />
                  these exclusive partner perks
                </p>
              </div>
              <GetStartedButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
