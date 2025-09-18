"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone } from "lucide-react";

// WhatsApp Icon Component
const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

export default function WhatsAppContact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 300,
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 17,
      },
    },
    tap: { scale: 0.95 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring" as const,
        damping: 25,
        stiffness: 300,
      },
    }),
  };

  const jurongLink = "https://wa.me/6596934753?text=Hi%20am%20Pilates%2C%20I%20would%20like%20to%20book%20a%20class%20at%20Jurong%20branch";
  const punggolLink = "https://wa.me/6583335316?text=Hi%20am%20Pilates%2C%20I%20would%20like%20to%20book%20a%20class%20at%20Punggol%20branch";

  return (
    <>
      {/* Sticky WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1,
        }}
      >
        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          aria-label="Contact us on WhatsApp"
        >
          <WhatsAppIcon size={24} />
          <motion.div
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            💬
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header */}
              <div className="bg-[#80978b] text-white p-6 relative">
                <motion.button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
                <div className="text-center">
                  <WhatsAppIcon size={48} className="mx-auto mb-3 text-green-300" />
                  <h2 className="text-2xl font-bold font-serif mb-2">
                    Contact us on WhatsApp
                  </h2>
                  <p className="text-green-100">
                    Choose your preferred branch to get started
                  </p>
                </div>
              </div>

              {/* Branch Options */}
              <div className="p-6 space-y-4">
                {/* Jurong Branch */}
                <motion.div
                  className="border-2 border-gray-100 rounded-2xl p-4 hover:border-[#80978b] transition-colors cursor-pointer group"
                  variants={cardVariants}
                  custom={0}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={jurongLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-[#80978b] text-white p-2 rounded-full group-hover:bg-[#6b8276] transition-colors">
                        <MapPin size={16} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#232323] mb-2 flex items-center gap-2">
                          📍 Jurong CPF Building
                          <span className="text-green-600 text-sm font-normal">
                            Book now
                          </span>
                        </h3>
                        <p className="text-sm text-[#656565] mb-2">
                          21 Jurong Gateway Road, #03-08<br />
                          Singapore 608546<br />
                          <span className="text-xs">(via entrance C)</span>
                        </p>
                        <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                          <Phone size={14} />
                          +65 9693 4753
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>

                {/* Punggol Branch */}
                <motion.div
                  className="border-2 border-gray-100 rounded-2xl p-4 hover:border-[#80978b] transition-colors cursor-pointer group"
                  variants={cardVariants}
                  custom={1}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={punggolLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-[#80978b] text-white p-2 rounded-full group-hover:bg-[#6b8276] transition-colors">
                        <MapPin size={16} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#232323] mb-2 flex items-center gap-2">
                          📍 Tower 88 Punggol Way
                          <span className="text-green-600 text-sm font-normal">
                            Book now
                          </span>
                        </h3>
                        <p className="text-sm text-[#656565] mb-2">
                          #12-111, Singapore 829913<br />
                          <span className="text-xs">(Take the lift from lobby D or F)</span>
                        </p>
                        <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                          <Phone size={14} />
                          +65 8333 5316
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-6 py-4 text-center">
                <p className="text-xs text-[#656565]">
                  Click on your preferred branch to start chatting on WhatsApp
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
