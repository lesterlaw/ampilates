import type { Metadata } from "next";
import { Montserrat, Lexend } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppContact from "./components/WhatsAppContact";
import { WhatsAppProvider } from "./contexts/WhatsAppContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const lexend = Lexend({ 
  subsets: ["latin"],
  variable: "--font-lexend"
});

const GOOGLE_TAG_ID = "G-17NK92JMEG";

export const metadata: Metadata = {
  title: "am Pilates - Elevate your mind. Transform your body.",
  description: "Discover the beauty of Pilates at am Pilates, a serene studio in the West of Singapore. Our diverse classes are designed to empower and strengthen your body.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_TAG_ID}');
          `,
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${lexend.variable} antialiased`}
      >
        <WhatsAppProvider>
          <div className="min-h-screen bg-[#fafaf5]">
            <Header />
            {children}
            <Footer />
            <WhatsAppContact />
          </div>
        </WhatsAppProvider>
      </body>
    </html>
  );
}
