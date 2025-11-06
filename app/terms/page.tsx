// app/(legal)/terms/page.tsx
import Link from "next/link";
import React from "react";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-300 space-y-8">
      <h1 className="text-3xl font-bold text-brb-green">Terms & Conditions</h1>

      <p>
        Welcome to{" "}
        <span className="text-brb-gold font-semibold">BetBetter101</span>. By
        accessing or using our website, services, or subscriptions, you agree to
        be bound by these Terms & Conditions. If you do not agree, please do not
        use our platform.
      </p>

      <h2 className="text-xl font-semibold text-brb-green">
        1. Service Description
      </h2>
      <p>
        BetBetter101 provides sports predictions, analytics, and insights for
        entertainment and informational purposes only. We do not guarantee
        outcomes, winnings, or profits.
      </p>

      <h2 className="text-xl font-semibold text-brb-green">2. Eligibility</h2>
      <p>
        You must be at least 18 years old to subscribe. By using our service,
        you confirm that online betting is legal in your jurisdiction.
      </p>

      <h2 className="text-xl font-semibold text-brb-green">
        3. Subscriptions & Billing
      </h2>
      <p>
        Subscriptions are billed through our payment provider (Paddle). Pricing
        is displayed clearly on our{" "}
        <Link href="/pricing" className="text-brb-gold underline">
          Pricing Page
        </Link>
        . You are responsible for ensuring your payment details remain valid.
      </p>

      <h2 className="text-xl font-semibold text-brb-green">
        4. Intellectual Property
      </h2>
      <p>
        All site content, including predictions, data, and branding, is the
        intellectual property of BetBetter101. You may not redistribute or
        resell our content without permission.
      </p>

      <h2 className="text-xl font-semibold text-brb-green">
        5. Limitation of Liability
      </h2>
      <p>
        BetBetter101 is not liable for financial losses, missed bets, or other
        consequences of using our predictions.
      </p>

      <h2 className="text-xl font-semibold text-brb-green">6. Legal Entity</h2>
      <p>
        This service is operated by{" "}
        <span className="text-brb-gold font-semibold">
          Elvis Kiarie trading as BetBetter101
        </span>
        .
      </p>
    </div>
  );
}
