"use client";


import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import Link from "next/link";

type SessionDetails = {
    customer_email?: string;
    amount_total?: number;
    currency?: string;
    payment_status?: string;
};

export default function Success() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");

    const [session, setSession] = useState<SessionDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!sessionId) {
            setError("No session ID provided.");
            setLoading(false);
            return;
        }

        async function fetchSession() {
            try {
                const res = await fetch(`/api/stripe-session?sessionId=${sessionId}`);
                if (!res.ok) throw new Error("Failed to fetch session");

                const data = await res.json();
                setSession(data);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (err: any) {
                console.log("Error fetching stripe session:", err.message);
                setError(err.message || "Unknown error");
            } finally {
                setLoading(false);
            }
        }

        fetchSession();
    }, [sessionId]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
                <p className="mt-4 text-white text-lg">Loading your payment details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
                <div className="bg-red-500/20 p-6 rounded-lg max-w-md w-full text-center">
                    <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
                    <p className="text-white">{error}</p>
                </div>
            </div>
        );
    }

    if (!session || session.payment_status !== "paid") {
        return (
            <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
                <div className="bg-yellow-500/20 p-6 rounded-lg max-w-md w-full text-center">
                    <h2 className="text-2xl font-bold text-yellow-500 mb-4">Payment Status</h2>
                    <p className="text-white">Payment not completed or session not found.</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Payment Successful | BetBetter101</title>
            </Head>

            <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
                <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-green-600 to-green-800 p-6 text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 mx-auto text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <h1 className="text-3xl font-bold mt-4">Payment Successful!</h1>
                        <p className="mt-2 opacity-90">Thank you for joining BetBetter101 Premium</p>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                        <div className="bg-gray-700 rounded-lg p-4">
                            <p className="text-gray-300">Amount Paid</p>
                            <p className="text-2xl font-bold text-green-400">
                                {(session.amount_total! / 100).toFixed(2)} {session.currency?.toUpperCase()}
                            </p>
                        </div>

                        <div className="bg-gray-700 rounded-lg p-4">
                            <p className="text-gray-300">Confirmation sent to</p>
                            <p className="text-xl font-medium text-white break-all">
                                {session.customer_email}
                            </p>
                        </div>

                        <div className="flex items-center bg-gray-700 rounded-lg p-4">
                            <div className="bg-green-500/20 p-2 rounded-full mr-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-green-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium">Premium Access Activated</p>
                                <p className="text-sm text-gray-400">You can now access all VIP picks</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-gray-800 px-6 py-4 text-center border-t border-gray-700">
                        <Link
                            href="/premium"
                            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg font-medium text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/30"
                        >
                            Go to Premium Dashboard
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </Link>
                        <p className="mt-4 text-gray-400 text-sm">
                            Need help? Contact our support team
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-gray-400">
                        Continue browsing our <Link href="/" className="text-green-400 hover:underline">free picks</Link>
                    </p>
                </div>
            </div>
        </>
    );
}