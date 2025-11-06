// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import AppShell from "@/components/AppShell.client";
import { appearance } from "@/utils/constants";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title:
    "BetBetter101 - Betting Revolution Brand | Premium Sports Betting Tips",
  description:
    "Get winning sports betting tips with BetBetter101. Free daily picks with ~5 odds and premium VIP picks with 50+ odds. Join the betting revolution today!",
  keywords:
    "sports betting, betting tips, football predictions, premium picks, betting revolution",
  authors: [{ name: "BetBetter101 Team" }],
  metadataBase: new URL("https://www.betbetter101.com"),
  openGraph: {
    title: "BetBetter101 - Betting Revolution Brand",
    description:
      "Premium sports betting tips platform with free daily picks and VIP premium picks",
    type: "website",
  },
  icons: { icon: "/newLogo.png" },

  // ✅ Add Google Site Verification Meta
  other: {
    "google-site-verification": "9YT4GY5ISBaj4n5XjvMWdhknMTk2sLbwpOGpr4zWb2A",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="9YT4GY5ISBaj4n5XjvMWdhknMTk2sLbwpOGpr4zWb2A"
        />
        {/* ✅ Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9029855244449113"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>

      <body
        className={`${poppins.variable} antialiased bg-gray-900 text-white`}
      >
        <ClerkProvider appearance={appearance}>
          <AppShell>{children}</AppShell>
        </ClerkProvider>
      </body>
    </html>
  );
}
