import type { Metadata } from "next";
import Link from "next/link";

// app/affiliate/page.tsx
// Remove: export const dynamic = "force-dynamic";
// Keep (recommended):
export const dynamic = "force-static";
export const revalidate = 86400;


export const metadata: Metadata = {
  title: "Affiliate Program — BetBetter101",
  description:
    "Earn £5 for every subscriber you refer to BetBetter101. Instant tracking, transparent reports, weekly payouts.",
  // Use a PATH here so Next resolves to https://www.betbetter101.com via metadataBase
  alternates: { canonical: "/affiliate" },
  robots: { index: true, follow: true },
  openGraph: {
    url: "/affiliate",
    title: "BetBetter101 Affiliate Program",
    description:
      "Share your link and earn £5 per paid subscriber. Instant tracking & weekly payouts.",
    siteName: "BetBetter101",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BetBetter101 Affiliate Program",
    description: "Earn £5 per referral. Instant tracking & weekly payouts.",
  },
};

export default function AffiliatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "BetBetter101 Affiliate Program",
    url: "https://www.betbetter101.com/affiliate",
    description: "Earn £5 for every subscriber you refer to BetBetter101.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.betbetter101.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Affiliate Program",
          item: "https://www.betbetter101.com/affiliate",
        },
      ],
    },
  };

  const features = [
    {
      h: "Easy Sharing",
      d: "One link. Works on WhatsApp, IG, TikTok bio.",
      icon: "🔗",
    },
    {
      h: "Transparent Reporting",
      d: "Real-time clicks & conversions.",
      icon: "📊",
    },
    {
      h: "Fast Payouts",
      d: "Local & international options.",
      icon: "💰",
    },
  ];

  const stats = [
    { value: "£5", label: "Per Referral" },
    { value: "Instant", label: "Tracking" },
    { value: "Weekly", label: "Payouts" },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Affiliate Program
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Share your unique link and earn{" "}
            <span className="text-primary font-bold">£5</span> for every paid
            subscriber. Track clicks, conversions, and payouts in your
            dashboard.
          </p>
        </div>

        {/* Main Content */}
        <section className="rounded-3xl border border-border bg-gradient-to-br from-card to-primary/5 p-8 md:p-12 shadow-2xl">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-popover border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-border bg-popover p-6 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="text-2xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.h}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.d}
                </p>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="bg-popover rounded-2xl p-8 border border-border mb-12">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  step: "1",
                  title: "Get Link",
                  desc: "Copy your unique affiliate link",
                },
                { step: "2", title: "Share", desc: "Post anywhere online" },
                { step: "3", title: "Earn", desc: "Get £5 per paid signup" },
                {
                  step: "4",
                  title: "Withdraw",
                  desc: "Weekly payout to your account",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3 shadow-brb-green">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Earning?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of affiliates already earning with BetBetter. No
                limits on how much you can earn.
              </p>
              <Link
                href="/user/dashboard"
                className="inline-flex items-center gap-3 rounded-xl bg-primary hover:bg-green-500 px-8 py-4 font-bold text-primary-foreground text-lg transition-all duration-200 transform hover:scale-105 shadow-brb-green hover:shadow-lg"
              >
                Get My Affiliate Link
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Instant Tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse animation-delay-2000"></div>
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-4000"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-12 space-x-3">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse-slow"></div>
          <div className="w-3 h-3 bg-secondary rounded-full animate-pulse-slow animation-delay-2000"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse-slow animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
}
