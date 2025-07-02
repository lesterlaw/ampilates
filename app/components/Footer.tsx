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

          <div className="flex items-center justify-center space-x-6">
            <div className="w-8 h-8 md:w-6 md:h-6 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
              <svg className="w-5 h-5 md:w-4 md:h-4 fill-[#232323]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <div className="w-8 h-8 md:w-6 md:h-6 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
              <svg className="w-5 h-5 md:w-4 md:h-4 fill-[#232323]" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </div>
          </div>

          <p className="text-[#232323] text-xs md:text-sm text-center">2025 am Pilates. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer; 