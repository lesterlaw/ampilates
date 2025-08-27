import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* Contact Us Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#80978b] mb-6 md:mb-8">Contact Us</h1>
            <p className="text-lg md:text-xl text-[#656565] mb-6 md:mb-8 leading-relaxed">
              We are here to help you achieve your fitness goals at am Pilates. Let us know how we can assist you and expect a supportive environment perfect for everybody.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-3 md:space-x-4">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#232323] flex-shrink-0" />
                <span className="text-base md:text-lg lg:text-xl text-[#232323]">hello@ampilates.sg</span>
              </div>
              
              <div className="flex items-center space-x-3 md:space-x-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#232323] flex-shrink-0" />
                <span className="text-base md:text-lg lg:text-xl text-[#232323]">Jurong CPF: (65) 9693-4753</span>
              </div>
              
              <div className="flex items-center space-x-3 md:space-x-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#232323] flex-shrink-0" />
                <span className="text-base md:text-lg lg:text-xl text-[#232323]">Punggol Coast Mall: (65) 8333-5316</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Image
              src="/images/about-hero.png"
              alt="am Pilates Studio Reception"
              width={650}
              height={470}
              className="w-full h-auto rounded-[20px] md:rounded-[30px] object-cover"
            />
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="bg-[#80978b]/10 rounded-[30px] md:rounded-[50px] p-6 md:p-12 lg:p-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#80978b] text-center mb-4">
            Reach Out
          </h2>
          <p className="text-sm md:text-base text-[#80978b] text-center mb-8 md:mb-12">
            Have a question / enquiry? Reach out to us!
          </p>

          <form className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 md:p-4 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#80978b] text-sm md:text-base"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 md:p-4 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#80978b] text-sm md:text-base"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#80978b]"
            />
            <div>
              <label className="block text-[#656565] text-sm md:text-base mb-2">Location</label>
              <select className="w-full p-3 md:p-4 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#80978b] text-sm md:text-base">
                <option>Jurong CPF</option>
                <option>Punggol Coast Mall</option>
              </select>
            </div>
            <textarea
              placeholder="Your message"
              rows={6}
              className="w-full p-3 md:p-4 rounded-[20px] md:rounded-[30px] bg-white border border-gray-300 focus:outline-none focus:border-[#80978b] resize-none text-sm md:text-base"
            />
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#80978b] cursor-pointer hover:bg-[#6b8276] text-white px-6 md:px-8 py-3 rounded-full font-bold text-sm md:text-base"
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