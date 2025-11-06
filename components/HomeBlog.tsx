// components/HomeBlog.tsx
import Link from "next/link";
import {
  BookOpen,
  TrendingUp,
  Target,
  Lightbulb,
  ArrowRight,
  Newspaper,
  BarChart3,
} from "lucide-react";

/**
 * HomeBlog - Blog Feature Teaser
 * Beautiful hero section showcasing the blog without fetching posts
 * Focuses on value proposition and compelling visuals
 */
export default function HomeBlog() {
  const features = [
    {
      icon: TrendingUp,
      title: "In-Depth Analytics",
      description:
        "Breakdowns of our prediction models, stats, and trends shaping every pick.",
      color: "from-emerald-400 to-green-500",
      bgColor: "from-emerald-400/10 to-green-500/5",
    },
    {
      icon: Target,
      title: "Winning Mindset",
      description:
        "Tactical betting approaches, bankroll discipline, and mindset for consistent profits.",
      color: "from-yellow-400 to-amber-500",
      bgColor: "from-yellow-400/10 to-amber-500/5",
    },
    {
      icon: Lightbulb,
      title: "Smart Education",
      description:
        "Guides that teach you how to read odds, find value bets, and avoid common pitfalls.",
      color: "from-sky-400 to-cyan-500",
      bgColor: "from-sky-400/10 to-cyan-500/5",
    },
  ];

  const topics = [
    { label: "Match Previews", count: "50+" },
    { label: "Statistical Models", count: "30+" },
    { label: "Betting Guides", count: "40+" },
    { label: "Market Analysis", count: "60+" },
  ];

  return (
    <section
      aria-labelledby="home-blog-title"
      className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl opacity-20 animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div
            className="w-full h-full opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="relative">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-gradient-to-r from-green-500/10 to-green-600/10 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-green-400 mb-6 shadow-lg shadow-green-500/10">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            BetBetter101 Insights Hub
          </div>

          {/* Title */}
          <h2
            id="home-blog-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-green-400 via-green-300 to-yellow-400 bg-clip-text text-transparent">
              Your Knowledge
            </span>
            <br />
            <span className="text-white">Is Your Edge</span>
          </h2>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-gray-300 text-lg sm:text-xl leading-relaxed">
            Dive into expert analysis, proven strategies, and data-driven
            insights that separate winning bettors from the rest.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Hero Card */}
          <div className="relative group overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900 p-8 sm:p-10">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/30 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-black" />
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold text-white mb-4">
                The BetBetter101 Blog
              </h3>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                From beginner fundamentals to advanced statistical models, our
                blog covers everything you need to transform your betting
                approach into a profitable, disciplined strategy.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    180+
                  </div>
                  <div className="text-xs text-gray-400">
                    Articles Published
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    Weekly
                  </div>
                  <div className="text-xs text-gray-400">New Content</div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 text-base font-bold text-black hover:from-green-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30 group"
              >
                Explore Articles
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative z-10 flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-green-400 transform group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Topics Bar */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-gray-800/50 backdrop-blur-sm p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30">
              <Newspaper className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Popular Topics</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-700/50 p-4 hover:border-green-500/30 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {topic.count}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {topic.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="relative overflow-hidden rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/10 via-gray-800/50 to-yellow-500/10 p-8 sm:p-10">
          {/* Decorative icon */}
          <div className="absolute top-6 right-6 opacity-10">
            <BarChart3 className="w-32 h-32 text-green-400" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-500/20 border border-green-500/30 px-4 py-1.5 text-xs font-bold text-green-400 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              START LEARNING TODAY
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Level Up Your Game?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl">
              Join thousands of smart bettors who use our insights to make
              informed decisions and consistently profit from sports betting.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-base font-bold text-black hover:from-green-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30"
              >
                Browse All Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/premium"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-yellow-500/50 bg-yellow-500/10 px-8 py-4 text-base font-bold text-yellow-400 hover:bg-yellow-500/20 hover:border-yellow-500 transition-all duration-300"
              >
                Get Premium Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
