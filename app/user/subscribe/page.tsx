export const runtime = "nodejs";

import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/utils";
import PaystackSubscribeButton from "@/components/PaystackSubscribeButton";

const SubscribePage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (user?.isSubscribed) {
    redirect("/premium");
  }

  return (
    <div className="min-h-screen bg-brb-dark text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-gray-900/80 to-yellow-900/20"></div>
        <div className="relative px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-yellow-500/20 border border-green-500/30 rounded-full px-6 py-2 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-400 font-medium text-sm">
                PREMIUM ACCESS
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                Join BetBetter101 VIP
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Unlock exclusive access to our{" "}
              <strong className="text-green-400">50+ odds VIP picks</strong>{" "}
              through our proven 3 Smart Games strategy
            </p>
            <div className="inline-flex items-center gap-3 bg-gray-800/50 backdrop-blur border border-yellow-500/30 rounded-2xl px-8 py-4 mb-12">
              <div className="text-3xl">🎯</div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">98%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur border-2 border-green-500/30 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute top-2 left-1/2 -translate-x-1/2">
            <div className="bg-gradient-to-r from-green-500 to-yellow-500 text-black px-6 py-2 rounded-full font-bold text-sm">
              MOST POPULAR
            </div>
          </div>

          <div className="text-center pt-6">
            <h3 className="text-2xl font-bold mb-2">VIP Membership</h3>
            <p className="text-gray-400 mb-8">
              Choose a plan that suits you best
            </p>

            <div className="space-y-4 mb-8 text-left">
              {[
                "Access to 50+ odds VIP picks",
                "3 Smart Games strategy",
                "Daily premium updates",
                "Detailed match analysis",
                "Priority customer support",
                "Mobile-optimized experience",
                "Get notified via Telegram",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <PaystackSubscribeButton />
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-sm">
              <span>Powered by: </span>
              <span className="text-white">Paystack</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;
