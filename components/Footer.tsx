import Link from "next/link";
import { Trophy, ArrowRight } from "lucide-react";
import { FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black border-t border-gray-700/50 relative overflow-hidden w-full">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-yellow-500/5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mb-12 w-full mx-auto gap-x-8 gap-y-4">
          {/* Brand */}
          <div className="flex flex-col lg:col-span-1 sm:col-span-2">
            <div className="mb-6 flex items-center space-x-3 group">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-yellow-400 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-yellow-400 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Trophy
                    className="h-7 w-7 text-gray-900"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <h3 className="bg-gradient-to-r from-green-400 via-green-300 to-yellow-400 bg-clip-text text-2xl font-bold text-transparent">
                BetBetter101
              </h3>
            </div>
            <div className="mt-6 inline-flex">
              <Link
                href="/premium"
                className="group inline-flex items-center text-sm font-semibold text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm tracking-wide uppercase">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="#"
                  className="inline-flex items-center transition-colors hover:text-green-400 hover:translate-x-1 transform duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100"></span>
                  Predictions
                </Link>
              </li>
              <li>
                <Link
                  href="/league/premier-league"
                  className="inline-flex items-center transition-colors hover:text-green-400 hover:translate-x-1 transform duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100"></span>
                  League
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="inline-flex items-center transition-colors hover:text-green-400 hover:translate-x-1 transform duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center transition-colors hover:text-green-400 hover:translate-x-1 transform duration-300"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="inline-flex items-center transition-colors hover:text-green-400 hover:translate-x-1 transform duration-300"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Plans */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm tracking-wide uppercase">
              Plans
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/pricing"
                  className="inline-flex items-center transition-colors hover:text-green-400 hover:translate-x-1 transform duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/premium"
                  className="inline-flex items-center transition-colors hover:text-yellow-400 hover:translate-x-1 transform duration-300"
                >
                  Premium Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliate"
                  className="inline-flex items-center transition-colors hover:text-green-400 hover:translate-x-1 transform duration-300"
                >
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm tracking-wide uppercase">
              Help
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/faq"
                  className="inline-flex items-center transition-colors hover:text-green-400 hover:translate-x-1 transform duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/help-center"
                  className="inline-flex items-center transition-colors hover:text-green-400 hover:translate-x-1 transform duration-300"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center transition-colors hover:text-green-400 hover:translate-x-1 transform duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm tracking-wide uppercase">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/terms"
                  className="inline-flex items-center transition-colors hover:text-green-400 hover:translate-x-1 transform duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="inline-flex items-center transition-colors hover:text-green-400 hover:translate-x-1 transform duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refunds"
                  className="inline-flex items-center transition-colors hover:text-green-400 hover:translate-x-1 transform duration-300"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-700/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm md:flex-row md:text-left">
            <p className="text-gray-400">
              © {year}{" "}
              <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent font-semibold">
                BetBetter101
              </span>{" "}
              — All rights reserved.
            </p>

            {/* Follow Us Section */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm font-medium">
                Follow Us:
              </span>
              <div className="flex items-center gap-3">
                <Link
                  href="https://www.instagram.com/betbetter101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="Follow us on Instagram"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform group-hover:scale-110">
                    <FaInstagram className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </Link>

                <Link
                  href="https://x.com/betbetter101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="Follow us on X (Twitter)"
                >
                  <div className="absolute inset-0 bg-gray-300 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-300 transition-all duration-300 transform group-hover:scale-110">
                    <FaXTwitter className="h-5 w-5 text-gray-400 group-hover:text-gray-900 transition-colors duration-300" />
                  </div>
                </Link>

                <Link
                  href="https://www.tiktok.com/@betbetter101?_t=ZM-90vm58ixESG&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label="Follow us on TikTok"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-pink-500 transition-all duration-300 transform group-hover:scale-110">
                    <FaTiktok className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Designer Credit */}
          <div className="mt-6 flex justify-center">
            <p className="text-xs text-gray-500">
              Crafted with 💚 by{" "}
              <Link
                href="https://www.instagram.com/lvs.logic/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 font-medium underline underline-offset-2 transition-colors duration-300"
                aria-label="Designer credit: lvs on Instagram"
              >
                lvs
              </Link>
            </p>
          </div>

          {/* Responsible Gaming Notice */}
          <div className="mt-6 pt-6 border-t border-gray-800/50">
            <p className="text-xs text-gray-500 text-center max-w-3xl mx-auto leading-relaxed">
              Please bet responsibly. Gambling can be addictive. If you need
              help, contact support services in your region.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
