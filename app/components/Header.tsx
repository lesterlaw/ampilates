"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const getNavItemClass = (path: string) => {
    if (pathname === path) {
      return "text-[#80978b] font-bold font-display tracking-wider";
    }
    return "text-[#232323] font-display tracking-wider hover:text-[#80978b] transition-colors";
  };

  const getMobileNavItemClass = (path: string) => {
    if (pathname === path) {
      return "text-[#80978b] font-bold font-display tracking-wider text-2xl py-4 border-b border-gray-200 block";
    }
    return "text-[#232323] font-display tracking-wider hover:text-[#80978b] transition-colors text-2xl py-4 border-b border-gray-200 block";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <motion.header
        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 0.4 }}
        className="flex items-center justify-between px-4 md:px-8 py-4 max-w-7xl mx-auto relative"
      >
        <div className="flex items-center">
          <Link href="/">
            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0.2 : 0.4, delay: 0.05 }}
            >
              <Image
                src="/images/am-pilates-logo.png"
                alt="am Pilates Logo"
                width={isMobile ? 60 : 80}
                height={isMobile ? 60 : 80}
                className="rounded-full"
              />
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className={getNavItemClass("/")}>
            Home
          </Link>
          <Link href="/classes" className={getNavItemClass("/classes")}>
            Classes
          </Link>
          <Link href="/about" className={getNavItemClass("/about")}>
            About
          </Link>
          <Link href="/faq" className={getNavItemClass("/faq")}>
            FAQs
          </Link>
          <Link href="/promotions" className={getNavItemClass("/promotions")}>
            Promotions
          </Link>
          <Link href="/contact" className={getNavItemClass("/contact")}>
            Contact Us
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <svg className="w-4 h-4 fill-[#80978b]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <svg className="w-4 h-4 fill-[#80978b]" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </div>
          </div>
          <button className="bg-[#80978b] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#6b8276] transition-colors">
            Download Our App
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-12 h-12 rounded-full bg-[#80978b] flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#6b8276] focus:outline-none focus:ring-2 focus:ring-[#80978b] focus:ring-opacity-50"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-5 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
              }`}
            ></span>
          </div>
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 bg-[#fafaf5] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="w-10 h-10 rounded-full bg-[#80978b] flex items-center justify-center hover:bg-[#6b8276] transition-colors focus:outline-none focus:ring-2 focus:ring-[#80978b] focus:ring-opacity-50"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="px-6 py-4">
          <Link
            href="/"
            className={getMobileNavItemClass("/")}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/classes"
            className={getMobileNavItemClass("/classes")}
            onClick={toggleMenu}
          >
            Classes
          </Link>
          <Link
            href="/about"
            className={getMobileNavItemClass("/about")}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/faq"
            className={getMobileNavItemClass("/faq")}
            onClick={toggleMenu}
          >
            FAQs
          </Link>
          <Link
            href="/promotions"
            className={getMobileNavItemClass("/promotions")}
            onClick={toggleMenu}
          >
            Promotions
          </Link>
          <Link
            href="/contact"
            className={getMobileNavItemClass("/contact")}
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </nav>

        <div className="px-6 py-6 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <svg className="w-6 h-6 fill-[#80978b]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <svg className="w-6 h-6 fill-[#80978b]" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </div>
          </div>
          <button className="w-full bg-[#80978b] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#6b8276] transition-colors">
            Download Our App
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
