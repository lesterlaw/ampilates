import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      {/* Contact Us Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#80978b] mb-6 md:mb-8">Contact Us</h1>
            <p className="text-lg md:text-xl text-[#656565] mb-6 md:mb-8 leading-relaxed">
              <strong>We're here to support you on your fitness journey at am Pilates.</strong>
              <br />
              Let us know how we can assist you—our welcoming and inclusive environment is designed to help everyone feel comfortable and empowered to reach their goals.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-3 md:space-x-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#232323] flex-shrink-0" />
                <span className="text-base md:text-lg lg:text-xl text-[#232323]">Jurong CPF: (65) 9693-4753</span>
              </div>

              <div className="flex items-center space-x-3 md:space-x-4">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#232323] flex-shrink-0" />
                <span className="text-base md:text-lg lg:text-xl text-[#232323]">hello@ampilates.sg</span>
              </div>

              <div className="flex items-center space-x-3 md:space-x-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#232323] flex-shrink-0" />
                <span className="text-base md:text-lg lg:text-xl text-[#232323]">Punggol Coast Mall: (65) 8333-5316</span>
              </div>

              <div className="flex items-center space-x-3 md:space-x-4">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#232323] flex-shrink-0" />
                <span className="text-base md:text-lg lg:text-xl text-[#232323]">pc@ampilates.sg</span>
              </div>
            </div>
          </div>
          
          <div className="relative md:rounded-[30px] rounded-4xl overflow-hidden h-[400px] md:h-[500px]">
            <Image
              src="/images/contact-us-image.jpg"
              alt="am Pilates Studio"
              width={650}
              height={800}
              className="w-full h-full object-cover"
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

          <ContactForm />
        </div>
      </section>


    </>
  );
}