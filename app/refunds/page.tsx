// app/(legal)/refunds/page.tsx
import React from "react";

export default function RefundsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-300 space-y-8">
      <h1 className="text-3xl font-bold text-brb-green">Refund Policy</h1>

      <p>
        BetBetter101 provides digital predictions and analytics services. Due to 
        the nature of digital goods, all sales are generally final. However, we 
        understand issues may arise.
      </p>

      <h2 className="text-xl font-semibold text-brb-green">1. Non-Refundable Services</h2>
      <p>
        Subscriptions, once purchased, are non-refundable as predictions and 
        insights are delivered instantly.
      </p>

      <h2 className="text-xl font-semibold text-brb-green">2. Exceptions</h2>
      <p>
        Refunds may be considered in cases of:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Duplicate payments</li>
        <li>Technical issues preventing access to your subscription</li>
        <li>Other valid billing errors</li>
      </ul>

      <h2 className="text-xl font-semibold text-brb-green">3. How to Request</h2>
      <p>
        To request a refund, please contact us within 7 days of purchase at 
        <a href="mailto:support@betbetter101.com" className="text-brb-gold underline"> support@betbetter101.com</a>.
      </p>
    </div>
  );
}
