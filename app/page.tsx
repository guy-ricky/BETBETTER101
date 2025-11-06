"use client";
import {
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
  Crown,
  Star,
} from "lucide-react";
import UpcomingMatchPredictions from "@/components/UpcomingMatchPredictions";
import HomeBlog from "@/components/HomeBlog";
import Link from "next/link";
import AffiliateBannerImage from "@/components/AffiliateBannerImage";

const stats = [
  { label: "Success Rate", value: "82%", icon: Target },
  { label: "Active Members", value: "2,847", icon: Users },
  { label: "Monthly Wins", value: "156", icon: Trophy },
  { label: "Avg. Odds", value: "5.8", icon: TrendingUp },
];

/** RevMasters: use the Landing page URL + your image URL */
const HOMEPAGE_LANDING =
  "https://record.revmasters.com/_Sh5q-z6I3kV8YAuMxhPI-WNd7ZgqdRLk/102/"; // Homepage CTA - Top Bookmakers
// ⬇️ Paste the exact 970x70 image URL from RevMasters → Banners → “View media”
const HOMEPAGE_BANNER_SRC =
  "https://media.revmasters.com/uploads/970x70-uefa25.gif"; // <-- replace with the real URL you copied

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#111]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-yellow-500/5"></div>

        <div className="container mx-auto px-4 py-24 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-neutral-900/80 rounded-full px-4 py-2 mb-8 border border-green-500/30 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-neutral-300">
                Live Now: 82% Success Rate This Month
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                WIN BIG
              </span>
              <br />
              <span className="text-white">With Expert Predictions</span>
            </h1>

            <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful bettors with our daily predictions
              and exclusive{" "}
              <span className="text-yellow-400 font-medium">
                VIP 50/3 Pot Picks
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/premium"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-500 to-yellow-500 text-neutral-900 font-bold text-lg rounded-lg hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Crown className="w-5 h-5" />
                Get Premium Access
              </Link>
              <a
                href="#predictions"
                className="w-full sm:w-auto px-8 py-4 border border-green-500/30 text-green-400 font-medium text-lg rounded-lg hover:bg-green-500/10 transition-all duration-300"
              >
                View Free Predictions
              </a>
            </div>
          </div>
        </div>

        {/* 🔗 RevMasters Image Banner — high visibility under hero */}
        <div className="container mx-auto px-4 pb-8">
          <AffiliateBannerImage
            href={HOMEPAGE_LANDING}
            src={HOMEPAGE_BANNER_SRC}
            alt="Bet on UEFA — BetUS"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group p-4 rounded-xl bg-neutral-900/30 hover:bg-neutral-900/50 border border-neutral-800 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-neutral-900" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-neutral-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Predictions Section */}
      <section id="predictions" className="py-16 px-4 container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-neutral-900/80 rounded-full px-4 py-2 mb-4 border border-green-500/30">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-neutral-300">Upcoming Matches</span>
          </div>

          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Expert </span>
            <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
              Predictions
            </span>
          </h2>

          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Get reliable and well-analyzed predictions to help you make smarter
            betting decisions every day.
          </p>
        </div>

        <UpcomingMatchPredictions />
      </section>

      {/* 🔗 RevMasters Image Banner — contextual (between Predictions and Blog) */}
      <section className="container mx-auto px-4 -mt-6 mb-10">
        <AffiliateBannerImage
          href={HOMEPAGE_LANDING}
          src={HOMEPAGE_BANNER_SRC}
          alt="Boosted Soccer Odds — BetUS"
        />
      </section>

      {/* Blog Section */}
      <HomeBlog />

      {/* Premium CTA Section */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 rounded-full px-4 py-2 mb-4 border border-yellow-500/30">
              <Crown className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-yellow-400">Premium Exclusive</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Ready for </span>
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Higher Odds?
              </span>
            </h2>

            <p className="text-neutral-400 text-lg mb-8">
              Unlock our exclusive{" "}
              <span className="text-yellow-400 font-medium">
                BetBetter101 50/3 Pot Picks
              </span>{" "}
              with odds over 50+ through 3 smart games combination.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { title: "High Odds", desc: "50+ odds combinations" },
                { title: "Smart Games", desc: "More fixtures from top leagues" },
                { title: "VIP Access", desc: "Exclusive member area" },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-neutral-800/50 p-6 rounded-xl border border-neutral-700"
                >
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                  </div>
                  <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/premium"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-neutral-900 font-bold text-lg rounded-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300"
              >
                Upgrade to Premium
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto px-8 py-4 border border-neutral-700 text-neutral-300 font-medium text-lg rounded-lg hover:bg-neutral-800/50 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
