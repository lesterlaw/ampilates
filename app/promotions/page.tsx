import Image from "next/image";

export default function Promotions() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-[#232323] leading-tight mb-6 md:mb-8">
            Our Promotions
          </h1>
          <p className="text-lg md:text-xl text-[#656565] max-w-4xl mx-auto leading-relaxed px-4 md:px-0">
            Enjoy exclusive discounts on am Pilates classes, merchandise, and special offers from our valued partners when you join us as a member!
          </p>
        </div>

        <div className="relative rounded-[30px] md:rounded-[60px] overflow-hidden h-[300px] md:h-[500px] mb-8 md:mb-16">
          <Image
            src={"/images/pilates-hero.png"}
            alt="am Pilates Studio Interior"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* The Family Pass Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/the-family-pass.webp"
              alt="The Family Pass Promotion"
              width={500}
              height={600}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#232323] mb-6">
              The Family Pass
            </h2>
            <p className="text-lg md:text-xl text-[#656565] mb-6 leading-relaxed">
              Share <span className="font-semibold text-[#80978b]">100 passes</span> across the family!
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#80978b] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base md:text-lg text-[#656565]">
                  For up to <span className="font-semibold text-[#80978b]">3 related female family members</span> (Mothers, daughters, sisters only)
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#80978b] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base md:text-lg text-[#656565]">
                  12-month validity
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#80978b] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base md:text-lg text-[#656565]">
                  Save $400! Exclusive promo price: <span className="font-semibold text-[#80978b]">$3200</span>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#80978b] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base md:text-lg text-[#656565]">
                  Each pass is valid for one class, per person
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Refer A Friend Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/refer-a-friend.webp"
              alt="Refer A Friend Studio"
              width={500}
              height={400}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#232323] mb-6">
              Refer A Friend
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="bg-[#80978b] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">1</span>
                <p className="text-base md:text-lg text-[#656565]">
                  Refer a friend who is new to am Pilates
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#80978b] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">2</span>
                <p className="text-base md:text-lg text-[#656565]">
                  A minimum of <span className="font-semibold text-[#80978b]">$300</span> has to be spent by them
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#80978b] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">3</span>
                <p className="text-base md:text-lg text-[#656565]">
                  Inform our front staff
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#80978b] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">4</span>
                <p className="text-base md:text-lg text-[#656565]">
                  Receive a free class pass from us!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The am club Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/the-am-club.webp"
              alt="The am club merchandise"
              width={500}
              height={600}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#232323] mb-6">
              The am Club
            </h2>
            <p className="text-lg md:text-xl text-[#656565] mb-6 leading-relaxed">
              Limited Edition "am Club" cropped tee, available now at our studio!
            </p>
            <p className="text-lg md:text-xl text-[#656565] mb-6 leading-relaxed">
              Snag the cute and limited edition "am Club" shirt available only at our studio, only at <span className="font-semiboldtext-base md:text-lg">$42.90</span>!
            </p>
            <p className="text-lg md:text-xl text-[#656565] mb-6 leading-relaxed">
              Members, get it at a special price of <span className="text-xl md:text-2xl font-bold text-[#80978b]">$38.90</span>!
            </p>
            <p className="text-base md:text-lg text-[#656565] leading-relaxed">
              Don't wait— limited stock available and they're going fast!
            </p>
          </div>
        </div>
      </section>

      {/* Birthday Perks Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/birthday-perks.webp"
              alt="Birthday Perks"
              width={500}
              height={600}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#232323] mb-6">
              Birthday Perks
            </h2>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative">
        <div className="relative max-w-7xl mx-auto px-4 md:px-0">
          <div className="relative h-80 md:h-72 bg-[#80978b]/90 rounded-[30px] md:rounded-[50px] overflow-hidden">
            <Image
              src={"/images/free-trial.png"}
              alt="Join us background"
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
                  these exclusive promotions
                </p>
              </div>
              <button className="cursor-pointer hover:bg-[lightgray] transition-all duration-300 bg-white text-[#80978b] px-6 md:px-8 py-3 rounded-full font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 