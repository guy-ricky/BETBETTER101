import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - BetBetter",
  description: "Answers to common questions and responsible betting guidance.",
  alternates: { canonical: "https://betbetter101.com/faq" },
};

const faqs = [
  {
    q: "How accurate are your predictions?",
    a: "Our Poisson-based approach is calibrated weekly and combined with human review.",
  },
  {
    q: "Do you guarantee profits?",
    a: "No. We promote responsible betting and long-term discipline, not guarantees.",
  },
  {
    q: "How much is the subscription?",
    a: "See our Pricing page for current plans.",
  },
  {
    q: "How do referrals work?",
    a: "Share your unique link; earn £5 per paid subscriber you refer.",
  },
];

export default function FAQPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } as const;

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get answers to common questions about our prediction methodology and
            services
          </p>
        </div>

        {/* FAQ Section */}
        <section className="rounded-3xl border border-gray-700 bg-card p-8 md:p-12 shadow-2xl">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
          />

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-border bg-popover p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-brb-green"
              >
                <summary className="cursor-pointer list-none font-semibold text-white flex items-center justify-between">
                  <span className="text-lg md:text-xl pr-4">{faq.q}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted-foreground group-open:hidden transition-colors">
                      Click to expand
                    </span>
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/20 group-open:bg-secondary/20 transition-all duration-300">
                      <svg
                        className="w-4 h-4 text-primary group-open:text-secondary transform group-open:rotate-180 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </summary>
                <div className="mt-4 pl-2 border-l-2 border-primary">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-12 space-x-3">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-secondary rounded-full animate-pulse animation-delay-2000"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
}
