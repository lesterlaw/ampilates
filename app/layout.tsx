import type { Metadata } from "next";
import { Inter, Playfair_Display, Lexend } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

const lexend = Lexend({ 
  subsets: ["latin"],
  variable: "--font-lexend"
});

export const metadata: Metadata = {
  title: "am Pilates - Elevate your mind. Transform your body.",
  description: "Discover the beauty of Pilates at am Pilates, a serene studio in the West of Singapore. Our diverse classes are designed to empower and strengthen your body.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${lexend.variable} antialiased`}
      >
        <div className="min-h-screen bg-[#fafaf5]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
