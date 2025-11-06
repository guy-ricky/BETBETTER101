"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import {
  Menu,
  X,
  Star,
  /* Home, */ Shield,
  Crown,
  Newspaper,
  Trophy,
} from "lucide-react";
import { MdArticle } from "react-icons/md";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavDropdown from "./NavDropdown";

const Navbar = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const isAdmin =
    user?.publicMetadata?.role === "ADMIN" ||
    user?.emailAddresses?.[0]?.emailAddress?.includes("admin");
  const isSubscribed = user?.publicMetadata?.isSubscribed === true;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    {
      href: "/football/news",
      label: "Football News",
      icon: Newspaper,
      public: true,
    },
    {
      href: "/league/la-liga",
      label: "Leagues",
      icon: Trophy,
      public: true,
    },
    {
      href: "/blog",
      label: "Blog",
      icon: MdArticle,
      public: true,
    },
    { href: "/premium", label: "Premium VIP", icon: Star, highlight: true },
    ...(isAdmin
      ? [
          {
            href: "/admin/dashboard",
            label: "Admin Dashboard",
            icon: Shield,
            adminOnly: true,
          },
        ]
      : []),
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 border-b border-gray-700/50 backdrop-blur-lg sticky top-0 z-50 w-full shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 sm:space-x-3 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-yellow-400 rounded-lg blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <Image
                src="/newLogo.png"
                alt="BRB Logo"
                width={80}
                height={50}
                className="w-9 h-9 sm:w-10 sm:h-10 object-cover relative z-10"
                priority
              />
            </div>
            <div className="leading-tight">
              <span className="text-white font-bold text-base sm:text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                BetBetter101
              </span>
              <div className="text-green-400 text-[10px] sm:text-xs font-medium tracking-wide">
                Your Winning Edge
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => {
              const Icon = link.icon as React.ElementType | undefined;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                    link.highlight
                      ? "bg-gradient-to-r from-green-500 via-green-600 to-yellow-500 text-black hover:from-green-400 hover:via-green-500 hover:to-yellow-400 rounded-lg shadow-lg hover:shadow-green-500/50 transform hover:scale-105"
                      : link.adminOnly
                      ? "text-purple-400 hover:text-purple-300 hover:bg-purple-900/30 rounded-lg"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg"
                  } ${
                    isActive && !link.highlight && !link.adminOnly
                      ? "text-green-400"
                      : ""
                  }`}
                >
                  {isActive && !link.highlight && !link.adminOnly && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full"></div>
                  )}
                  {Icon && (
                    <Icon
                      className={`w-4 h-4 mr-2 transition-transform duration-300 ${
                        link.highlight ? "" : "group-hover:scale-110"
                      }`}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {link.highlight && (
                    <Crown className="w-4 h-4 ml-1 text-yellow-700 animate-pulse" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {isLoaded && (
              <>
                {isSignedIn ? (
                  <div className="hidden md:flex items-center space-x-2">
                    {/* {isSubscribed && (
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs px-3 py-1.5 rounded-full flex items-center font-bold shadow-lg shadow-yellow-500/30 animate-pulse-slow">
                        <Crown className="w-3 h-3 mr-1" />
                        VIP
                      </div>
                    )}
                    {isAdmin && (
                      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs px-3 py-1.5 rounded-full flex items-center font-bold shadow-lg shadow-purple-500/30">
                        <Shield className="w-3 h-3 mr-1" />
                        ADMIN
                      </div>
                    )} */}
                    {/* Replaced Clerk <UserButton /> with our dropdown */}
                    <NavDropdown
                      user={{
                        avatar: user?.imageUrl,
                        username:
                          user?.username || user?.firstName || "Account",
                        email:
                          user?.emailAddresses?.[0]?.emailAddress || undefined,
                      }}
                      isSubscribed={isSubscribed}
                      isAdmin={isAdmin}
                    />
                  </div>
                ) : (
                  <div className="hidden md:flex items-center space-x-3">
                    <Link
                      href="/sign-in"
                      className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black px-5 py-2.5 rounded-lg flex items-center text-sm font-bold shadow-lg shadow-yellow-500/30 transition-all duration-300 transform hover:scale-105"
                    >
                      <Star className="w-4 h-4 mr-2" />
                      Sign In
                    </Link>
                  </div>
                )}
              </>
            )}

            {/* Mobile Toggle */}
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X
                  size={24}
                  className="transition-transform duration-300 rotate-90"
                />
              ) : (
                <Menu size={24} className="transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-800 to-gray-900 border-t border-gray-700/50 px-3 sm:px-4 py-4 space-y-2 shadow-xl animate-modal-in">
          {navLinks.map((link) => {
            const Icon = link.icon as React.ElementType | undefined;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-102 ${
                  link.highlight
                    ? "bg-gradient-to-r from-green-500 via-green-600 to-yellow-500 text-black shadow-lg shadow-green-500/30"
                    : link.adminOnly
                    ? "text-purple-400 hover:text-purple-300 hover:bg-purple-900/30"
                    : isActive
                    ? "text-green-400 bg-gray-700/50"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                {Icon && <Icon className="w-5 h-5 mr-3" />}
                <span className="flex-1">{link.label}</span>
                {link.highlight && (
                  <Crown className="w-4 h-4 text-yellow-700" />
                )}
                {isActive && !link.highlight && (
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                )}
              </Link>
            );
          })}

          {/* Auth Section */}
          <div className="space-y-3 pt-4 border-t border-gray-700/50">
            {isLoaded && !isSignedIn ? (
              <Link
                href="/sign-in"
                onClick={closeMobileMenu}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black py-3 rounded-lg flex items-center justify-center text-sm font-bold shadow-lg shadow-yellow-500/30 transition-all duration-300"
              >
                <Star className="w-4 h-4 mr-2" />
                Sign In
              </Link>
            ) : (
              <div className="flex items-center gap-6 px-3 py-3  rounded-lg">
                {/* Mobile uses the same dropdown button for actions, with badges passed in */}
                <NavDropdown
                  user={{
                    avatar: user?.imageUrl,
                    username: user?.username || user?.firstName || "Account",
                    email: user?.emailAddresses?.[0]?.emailAddress || undefined,
                  }}
                  isSubscribed={isSubscribed}
                  isAdmin={isAdmin}
                  setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
                <span className="text-gray-200 font-medium">
                  {user?.username}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
