import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works - BetBetter",
  description:
    "From raw data to your daily picks — our transparent prediction pipeline.",
  alternates: { canonical: "https://betbetter101.com/how-it-works" },
};

export default function HowItWorksPage() {
  const steps = [
    {
      n: 1,
      h: "Collect",
      d: "We ingest fixtures, odds, team strength, injuries, and form.",
    },
    {
      n: 2,
      h: "Model",
      d: "Poisson sim returns scorelines, probabilities & edge signals.",
    },
    {
      n: 3,
      h: "Curate",
      d: "We filter for value bets with conservative risk thresholds.",
    },
    {
      n: 4,
      h: "Deliver",
      d: "Subscribers receive concise picks with rationale.",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From raw data to your daily picks — our transparent prediction
            pipeline designed for consistent value
          </p>
        </div>

        {/* Process Steps */}
        <section className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-2xl">
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30 -z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {steps.map((step, index) => (
                <div key={step.n} className="relative group">
                  {/* Step Card */}
                  <div className="relative rounded-2xl p-6 border border-border bg-popover hover:border-primary/50 transition-all duration-300 hover:shadow-brb-green hover:transform hover:-translate-y-2 h-full">
                    {/* Step Number with Glow */}
                    <div className="absolute -top-4 -left-4 h-12 w-12 rounded-xl bg-primary text-primary-foreground font-bold grid place-items-center shadow-brb-green z-10 group-hover:scale-110 transition-transform duration-300">
                      {step.n}
                    </div>

                    {/* Content */}
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                        {step.h}
                        <svg
                          className="w-5 h-5 text-secondary ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.d}
                      </p>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>

                  {/* Mobile Connector Dots */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center py-4">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-gray-300 mb-8 text-lg">
              Ready to access our carefully curated predictions?
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-3 rounded-xl bg-primary hover:bg-green-500 px-8 py-4 font-semibold text-primary-foreground transition-all duration-200 transform hover:scale-105 shadow-brb-green hover:shadow-lg"
            >
              Start Your Journey
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

            {/* Trust Badge */}
            <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>
                Transparent Process • Data-Driven • Professional Grade
              </span>
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
