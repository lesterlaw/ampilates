"use client";

import { useWhatsApp } from "../contexts/WhatsAppContext";

interface GetTrialNowButtonProps {
  className?: string;
}

export default function GetTrialNowButton({ className }: GetTrialNowButtonProps) {
  const { openModal } = useWhatsApp();

  return (
    <button
      onClick={openModal}
      className={`cursor-pointer hover:bg-[lightgray] transition-all duration-300 bg-white text-[#80978b] px-6 py-2.5 md:px-12 md:py-3 rounded-full font-semibold whitespace-nowrap ${className || ""}`}
    >
      Get Trial Now
    </button>
  );
}
