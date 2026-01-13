"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface GetTrialNowButtonProps {
  className?: string;
}

export default function GetTrialNowButton({ className }: GetTrialNowButtonProps) {
  return (
    <Link
      href="/trial"
      className={cn(
        "cursor-pointer hover:bg-[lightgray] transition-all duration-300 bg-white text-[#80978b] px-6 py-2.5 md:px-12 md:py-3 rounded-full font-semibold whitespace-nowrap inline-block text-center",
        className
      )}
    >
      Get Trial Now
    </Link>
  );
}
