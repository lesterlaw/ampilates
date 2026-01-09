"use client";

import { useWhatsApp } from "../contexts/WhatsAppContext";

export default function GetStartedButton() {
  const { openModal } = useWhatsApp();

  return (
    <button
      onClick={openModal}
      className="cursor-pointer hover:bg-[lightgray] transition-all duration-300 bg-white text-[#80978b] px-6 md:px-8 py-3 rounded-full font-semibold"
    >
      Get Started
    </button>
  );
}
