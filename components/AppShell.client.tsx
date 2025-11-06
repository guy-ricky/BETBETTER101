// components/AppShell.client.tsx
"use client";

import { SignedIn } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LinkReferralOnMount from "@/components/LinkReferralOnMount";
import { Toaster } from "react-hot-toast";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {/* Attach referral only in the browser when signed in */}
      <SignedIn>
        <LinkReferralOnMount />
      </SignedIn>

      <main className="min-h-screen px-4 sm:px-6 lg:px-8 bg-[var(--background)] text-[var(--foreground)]">
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </main>

      <Footer />
    </>
  );
}
