// app/(legal)/privacy/page.tsx
import React from "react";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-300 space-y-8">
      <h1 className="text-3xl font-bold text-brb-green">Privacy Policy</h1>

      <p>
        Your privacy is important to us. This Privacy Policy explains how
        BetBetter101 collects, uses, and protects your data.
      </p>

      <h2 className="text-xl font-semibold text-brb-green">
        1. Information We Collect
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Email, name, and account details when signing up</li>
        <li>Billing and subscription details processed via Paddle</li>
        <li>Analytics data (non-personal) to improve performance</li>
      </ul>

      <h2 className="text-xl font-semibold text-brb-green">
        2. How We Use Your Data
      </h2>
      <p>
        We use collected data to provide services, process payments, and improve
        the platform. We do not sell or rent your data to third parties.
      </p>

      <h2 className="text-xl font-semibold text-brb-green">
        3. Cookies & Tracking
      </h2>
      <p>
        BetBetter101 may use cookies to enhance your browsing experience. You
        may disable cookies in your browser settings.
      </p>

      <h2 className="text-xl font-semibold text-brb-green">
        4. Third-Party Services
      </h2>
      <p>
        Payments are securely handled by Paddle. Please review Paddle’s policies
        for further details.
      </p>

      <h2 className="text-xl font-semibold text-brb-green">5. Contact</h2>
      <p>
        For privacy-related inquiries, contact us at
        <a
          href="mailto:support@betbetter101.com"
          className="text-brb-gold underline"
        >
          {" "}
          support@betbetter101.com
        </a>
        .
      </p>
    </div>
  );
}
