import Image from "next/image";
import { getPromotions } from "@/app/actions/promotions";

export const dynamic = 'force-dynamic';

const renderFeature = (feature: string, index: number, isNumbered: boolean = false) => {
  if (isNumbered) {
    return (
      <div key={index} className="flex items-start gap-3">
        <span className="bg-[#80978b] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">
          {index + 1}
        </span>
        <p className="text-base md:text-lg text-[#656565]" dangerouslySetInnerHTML={{ __html: feature }} />
      </div>
    );
  }

  return (
    <li key={index} className="flex items-start gap-3">
      <div className="w-2 h-2 bg-[#80978b] rounded-full mt-2 flex-shrink-0"></div>
      <p className="text-base md:text-lg text-[#656565]" dangerouslySetInnerHTML={{ __html: feature }} />
    </li>
  );
};

export default async function Promotions() {
  const promotions = await getPromotions();

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-[#80978b] leading-tight mb-6 md:mb-8">
            Our Promotions
          </h1>
          <p className="text-lg md:text-xl text-[#656565] max-w-4xl mx-auto leading-relaxed px-4 md:px-0">
            Enjoy exclusive discounts on am Pilates classes, merchandise, and special offers from our valued partners when you join us as a member!
          </p>
        </div>

        <div className="relative rounded-[30px] md:rounded-[60px] overflow-hidden mb-8 md:mb-16">
          <Image
            src={"/images/promotions-header.png"}
            alt="am Pilates Promotions"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Promotions from Database */}
      {promotions.map((promotion, index) => {
        const isEven = index % 2 === 0;
        const isNumbered = promotion.features.some((f) => /^\d+\./.test(f.trim()));

        return (
          <section key={promotion.id} className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
            <div className={`flex flex-col lg:flex-row${isEven ? "" : "-reverse"} gap-8 lg:gap-16 items-center`}>
              <div className="w-full lg:w-1/2">
                <Image
                  src={promotion.imageUrl}
                  alt={promotion.title}
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#232323] mb-6">
                  {promotion.title}
                </h2>
                {promotion.description && (
                  <p className="text-lg md:text-xl text-[#656565] mb-6 leading-relaxed">
                    {promotion.description}
                  </p>
                )}
                {promotion.features.length > 0 && (
                  <>
                    {isNumbered ? (
                      <div className="space-y-4 mb-8">
                        {promotion.features.map((feature, idx) => renderFeature(feature, idx, true))}
                      </div>
                    ) : (
                      <ul className="space-y-3 mb-8">
                        {promotion.features.map((feature, idx) => renderFeature(feature, idx, false))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="relative">
        <div className="relative max-w-7xl mx-auto px-4 md:px-0">
          <div className="relative h-80 md:h-72 bg-[#80978b]/90 rounded-[30px] md:rounded-[50px] overflow-hidden">
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