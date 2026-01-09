"use client";

import { useWhatsApp } from "../contexts/WhatsAppContext";

export default function BookNowButton() {
  const { openModal } = useWhatsApp();

  return (
    <button
      onClick={openModal}
      className="bg-[#80978b] hover:bg-[#6d8076] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200"
    >
      Book Now
    </button>
  );
}
