import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="border-t border-gray-300 pt-8 md:pt-16 flex flex-col lg:flex-row gap-6 md:gap-12">
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl md:text-2xl font-semibold text-[#232323] mb-3 md:mb-4">
              Subscribe to the Newsletter
            </h3>
            <p className="text-base md:text-xl text-[#656565] mb-6 md:mb-8">
              Subscribe to our newsletter to receive latest updates, news and promotions. No spams, we promise.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 md:p-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#80978b] text-sm md:text-base"
              />
              <button className="bg-[#80978b] text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-[#6b8276] transition-colors text-sm md:text-base whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <p className="text-[#656565] text-xs md:text-sm">
              By submitting your email address, you agree to receive emails from
              am Pilates. You may unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="flex flex-col gap-6 md:gap-4 justify-between items-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-center">
            <Link href="/" className="text-[#232323] hover:text-[#80978b] transition-colors text-sm md:text-base">
              Home
            </Link>
            <Link href="/classes" className="text-[#232323] hover:text-[#80978b] transition-colors text-sm md:text-base">
              Classes
            </Link>
            <Link href="/about" className="text-[#232323] hover:text-[#80978b] transition-colors text-sm md:text-base">
              About
            </Link>
            <Link href="/faq" className="text-[#232323] hover:text-[#80978b] transition-colors text-sm md:text-base">
              FAQs
            </Link>
            <Link href="/promotions" className="text-[#232323] hover:text-[#80978b] transition-colors text-sm md:text-base">
              Promotions
            </Link>
            <Link href="/contact" className="text-[#232323] hover:text-[#80978b] transition-colors text-sm md:text-base">
              Contact Us
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://www.instagram.com/ampilates.sg?igsh=MWxsaXpqdDRuZDF2ag=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Visit our Instagram"
            >
              <svg className="w-5 h-5 md:w-4 md:h-4 fill-[#80978b]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/17Q6erhJUp/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Visit our Facebook"
            >
              <svg className="w-5 h-5 md:w-4 md:h-4 fill-[#80978b]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@ampilates?_t=ZS-8zz1FwfR5DY&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Visit our TikTok"
            >
              <svg className="w-5 h-5 md:w-4 md:h-4 fill-[#80978b]" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>

          <p className="text-[#232323] text-xs md:text-sm text-center">© 2026 am Pilates. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer; 