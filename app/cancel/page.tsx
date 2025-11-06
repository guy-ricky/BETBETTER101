"use client";

import Link from "next/link";
import Head from "next/head";

export default function CancelPage() {
    return (
        <>
            <Head>
                <title>Payment Cancelled | BetBetter101</title>
            </Head>

            <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
                <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 text-center">
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
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                        <h1 className="text-3xl font-bold mt-4">Payment Cancelled</h1>
                        <p className="mt-2 opacity-90">Transaction was not completed</p>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                        <div className="bg-gray-700 rounded-lg p-6 text-center">
                            <p className="text-lg mb-4">
                                Your premium subscription was not processed. You can try again anytime.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/premium"
                                    className="flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg font-medium text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/30"
                                >
                                    Try Again
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
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                        />
                                    </svg>
                                </Link>

                                <Link
                                    href="/"
                                    className="flex-1 flex items-center justify-center px-6 py-3 bg-gray-600 rounded-lg font-medium text-white hover:bg-gray-700 transition-all duration-300"
                                >
                                    Back to Home
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
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-gray-700/50 rounded-lg p-4 text-center text-sm">
                            <p className="text-gray-400">
                                Need help with payment? <br className="sm:hidden" />
                                <a href="#" className="text-green-400 hover:underline">Contact our support team</a>
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-gray-800 px-6 py-4 text-center border-t border-gray-700">
                        <p className="text-gray-400 text-sm">
                            You can still access our <Link href="/" className="text-green-400 hover:underline">free daily picks</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}