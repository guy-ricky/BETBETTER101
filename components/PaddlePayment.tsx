/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState } from "react";
import type { Paddle as PaddleSDK } from "@paddle/paddle-js";
import { initializePaddle } from "@paddle/paddle-js";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

const ENV = (
  process.env.NEXT_PUBLIC_PADDLE_ENV === "production" ? "production" : "sandbox"
) as "sandbox" | "production";

const CLIENT_TOKEN = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
const PRICE_MONTHLY = process.env.NEXT_PUBLIC_PADDLE_PRICE_MONTHLY;
const PRICE_SEVEN = process.env.NEXT_PUBLIC_PADDLE_PRICE_SEVEN_MONTHS;
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "";

export default function PaddlePayment() {
  const [paddle, setPaddle] = useState<PaddleSDK | null>(null);
  const [dbUserId, setDbUserId] = useState<string | null>(null);
  const initializedRef = useRef(false);

  const { user: currentUser } = useUser();
  const currentUserEmail = currentUser?.emailAddresses?.[0]?.emailAddress || "";

  useEffect(() => {
    const fetchDbUser = async () => {
      try {
        const res = await fetch("/api/user/me");
        if (!res.ok) throw new Error("Failed to fetch user data");
        const data = await res.json();

        setDbUserId(data.user?.id || null);
        console.log("[Fetch DB User Success]", data.user);
      } catch (error) {
        console.error("[Fetch DB User Error]", error);
        toast.error("Failed to fetch user data");
      }
    };
    fetchDbUser();
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        if (initializedRef.current) return;

        if (!CLIENT_TOKEN)
          return toast.error("Missing NEXT_PUBLIC_PADDLE_CLIENT_TOKEN");

        const isSandbox = ENV === "sandbox";
        if (
          (isSandbox && !CLIENT_TOKEN.startsWith("test_")) ||
          (!isSandbox && !CLIENT_TOKEN.startsWith("live_"))
        ) {
          return toast.error(`Client token doesn't match ${ENV} environment`);
        }

        const sdk = await initializePaddle({
          token: CLIENT_TOKEN,
          environment: ENV,
          eventCallback: (ev: any) => {
            if (
              ev?.name?.startsWith("checkout") ||
              ev?.name === "library.load"
            ) {
              console.log("[Paddle event]", ev);
            }
          },
        });

        if (!cancelled) {
          initializedRef.current = true;
          setPaddle(sdk || null);
          try {
            console.log(
              "Paddle.js version:",
              (sdk as any)?.Status?.libraryVersion
            );
          } catch {}
        }
      } catch (e: any) {
        console.error("[Paddle init error]", e);
        toast.error(e?.message || "Failed to initialize Paddle");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  function openCheckout(priceId?: string | null, planName?: string) {
    if (!paddle) return toast.error("Paddle is not initialized yet.");
    if (!priceId || !priceId.startsWith("pri_")) {
      return toast.error("Invalid Paddle priceId (pri_…).");
    }

    console.log("[Open Checkout]", { priceId, planName });

    // No Classic props. Minimal Billing settings only.
    paddle.Checkout.open({
      items: [{ priceId, quantity: 1 }],
      settings: {
        displayMode: "overlay",
        theme: "dark",
        successUrl: APP_URL ? `${APP_URL}/user/dashboard` : "/user/dashboard",
      },
      customer: { email: currentUserEmail }, // ensures data.customer.email in webhooks
      customData: {
        prismaUserId: dbUserId, // <- your User.id from Prisma/Mongo
        clerkUserId: currentUser?.id, // <- your Clerk ID
        email: currentUserEmail,
        planName: planName || null, // <- use planName so it's not unused
      },
    });
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <button
        onClick={() => openCheckout(PRICE_MONTHLY, "Monthly")}
        //disabled={!paddle || !PRICE_MONTHLY}
        disabled={true}
        className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-xl disabled:opacity-50 hover:bg-emerald-700 transition-colors"
      >
        Start Monthly Plan £35/Month
      </button>
      <button
        onClick={() => openCheckout(PRICE_SEVEN, "7-Month VIP")}
        //disabled={!paddle || !PRICE_SEVEN}
        disabled={true}
        className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-xl disabled:opacity-50 hover:bg-yellow-500 transition-colors px-2"
      >
        Get VIP Access Now £250/7 Months
      </button>
    </div>
  );
}
