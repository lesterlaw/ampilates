"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface DownloadAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadAppModal({ isOpen, onClose }: DownloadAppModalProps) {
  const googlePlayLink = "https://play.google.com/store/apps/details?id=com.mindbodyonline.connect";
  const appStoreLink = "https://apps.apple.com/sg/app/mindbody-fitness-wellness/id689501356";

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

  return (
    <AnimatePresence>
      {isOpen && (
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
            onClick={onClose}
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
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
              <div className="text-center">
                <h2 className="text-2xl font-bold font-serif mb-2">
                  Download Our App
                </h2>
                <p className="text-white/90">
                  Get the Mindbody app to book classes and manage your membership
                </p>
              </div>
            </div>

            {/* Download Options */}
            <div className="p-6 space-y-4">
              {/* Google Play Store */}
              <motion.a
                href={googlePlayLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-100 rounded-2xl p-4 hover:border-[#80978b] transition-colors cursor-pointer group block"
                variants={cardVariants}
                custom={0}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div>
                  <h3 className="font-bold text-[#232323] mb-1">
                    Get it on Google Play
                  </h3>
                  <p className="text-sm text-[#656565]">
                    Download for Android devices
                  </p>
                </div>
              </motion.a>

              {/* App Store */}
              <motion.a
                href={appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-100 rounded-2xl p-4 hover:border-[#80978b] transition-colors cursor-pointer group block"
                variants={cardVariants}
                custom={1}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div>
                  <h3 className="font-bold text-[#232323] mb-1">
                    Download on the App Store
                  </h3>
                  <p className="text-sm text-[#656565]">
                    Download for iOS devices
                  </p>
                </div>
              </motion.a>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 text-center">
              <p className="text-xs text-[#656565]">
                Click on your preferred platform to download the app
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
