/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";

type Ticket = {
  id: string;
  subject: string;
  category: string;
  priority: string;
  status: string;
  createdAt: string;
};

type TicketWithMessages = Ticket & {
  messages: { id: string; body: string; createdAt: string; isStaff: boolean }[];
};

export default function HelpCenter() {
  const [tab, setTab] = useState<"faq" | "new" | "mine">("faq");

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-200 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3 text-white bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text text-transparent">
          Help Center
        </h1>
        <p className="text-gray-400 text-lg">
          Welcome to the BetBetter101 Help Center. Find answers or raise a
          support ticket.
        </p>
      </div>

      <div className="flex gap-2 mb-8 p-1 bg-gray-900 rounded-lg w-fit">
        <button
          onClick={() => setTab("faq")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            tab === "faq"
              ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg"
              : "text-gray-400 hover:text-white"
          }`}
        >
          FAQs
        </button>
        <button
          onClick={() => setTab("new")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            tab === "new"
              ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Create Ticket
        </button>
        <button
          onClick={() => setTab("mine")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            tab === "mine"
              ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg"
              : "text-gray-400 hover:text-white"
          }`}
        >
          My Tickets
        </button>
      </div>

      {tab === "faq" && <FAQs />}
      {tab === "new" && <NewTicketForm />}
      {tab === "mine" && <MyTickets />}
    </div>
  );
}

function FAQs() {
  const faqs = [
    {
      question: "How do I subscribe?",
      answer:
        "Simply choose a plan on our premium page and complete checkout securely via Stripe.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes. You can manage or cancel your subscription from your account settings.",
    },
    {
      question: "Are predictions guaranteed?",
      answer:
        "No. Our predictions are based on analytics and historical data. They are for guidance only.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login page and follow the instructions sent to your email.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards through our secure Stripe payment gateway.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-5 rounded-xl border border-gray-800 mb-6">
        <h2 className="text-xl font-semibold text-white mb-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-emerald-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400">
          Find quick answers to common questions about our service.
        </p>
      </div>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden transition-all"
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left"
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          >
            <span className="font-medium text-white">{faq.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 text-emerald-400 transition-transform ${
                expandedIndex === index ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {expandedIndex === index && (
            <div className="px-4 pb-4 text-gray-400">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

function NewTicketForm() {
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("SUBSCRIPTION");
  const [priority, setPriority] = useState("MEDIUM");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setOk(null);
    setErr(null);
    try {
      const res = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, category, priority, message }),
      });
      if (!res.ok) throw new Error(await res.text());
      setOk("Ticket submitted. We'll get back to you soon.");
      setSubject("");
      setMessage("");
      setCategory("SUBSCRIPTION");
      setPriority("MEDIUM");
    } catch (e: any) {
      console.error("Ticket submission error:", e);
      setErr("Could not submit ticket. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-blue-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          Create Support Ticket
        </h2>
        <p className="text-gray-400">
          We&apos;re here to help! Submit a ticket and our team will assist you.
        </p>
      </div>

      <form onSubmit={submit} className="space-y-6">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-gray-300">Subject</label>
          <input
            className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="e.g., I paid but premium isn't enabled"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-300">
              Category
            </label>
            <select
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="BILLING">Billing</option>
              <option value="SUBSCRIPTION">Subscription</option>
              <option value="TECHNICAL">Technical</option>
              <option value="ACCOUNT">Account</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-300">
              Priority
            </label>
            <select
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
            </select>
          </div>
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium text-gray-300">Message</label>
          <textarea
            className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 min-h-[150px] focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Add as much detail as possible (email used to pay, time of payment, last 4 of card, screenshot if available)…"
            required
          />
        </div>

        <button
          type="submit"
          disabled={busy}
          className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all shadow-lg disabled:opacity-50 flex items-center justify-center"
        >
          {busy ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Submit Ticket
            </>
          )}
        </button>

        {ok && (
          <div className="p-3 bg-emerald-900/30 border border-emerald-800 rounded-lg text-emerald-400">
            {ok}
          </div>
        )}
        {err && (
          <div className="p-3 bg-red-900/30 border border-red-800 rounded-lg text-red-400">
            {err}
          </div>
        )}
      </form>
    </div>
  );
}

function MyTickets() {
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState<TicketWithMessages[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/tickets");
      const data = await res.json();
      setTickets(data || []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "OPEN":
        return "text-blue-400";
      case "PENDING":
        return "text-yellow-400";
      case "RESOLVED":
        return "text-emerald-400";
      case "CLOSED":
        return "text-gray-400";
      default:
        return "text-gray-400";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "HIGH":
        return "text-red-400";
      case "MEDIUM":
        return "text-yellow-400";
      case "LOW":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        <div className="flex items-center">
          <svg
            className="animate-spin h-5 w-5 mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="text-gray-400">Loading your tickets...</span>
        </div>
      </div>
    );
  }

  if (!tickets.length) {
    return (
      <div className="text-center py-10 bg-gray-900 rounded-xl border border-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mx-auto text-gray-600 mb-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h3 className="text-lg font-medium text-white mb-1">No tickets yet</h3>
        <p className="text-gray-400">
          You haven&apos;t created any support tickets yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-5 rounded-xl border border-gray-800 mb-4">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-blue-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
            <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
          </svg>
          My Support Tickets
        </h2>
        <p className="text-gray-400">View your support requests.</p>
      </div>

      {tickets.map((t) => (
        <div
          key={t.id}
          className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden transition-all hover:border-gray-700"
        >
          <div className="p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white truncate">
                  {t.subject}
                </div>
                <div className="text-xs flex flex-wrap gap-2 mt-1">
                  <span className="bg-gray-800 px-2 py-1 rounded-md">
                    {t.category}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-md ${getPriorityColor(
                      t.priority
                    )}`}
                  >
                    {t.priority}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-md ${getStatusColor(
                      t.status
                    )}`}
                  >
                    {t.status}
                  </span>
                  <span className="text-gray-500">
                    {new Date(t.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setExpanded(expanded === t.id ? null : t.id)}
                className="flex-shrink-0 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors flex items-center"
              >
                {expanded === t.id ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Collapse
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Expand
                  </>
                )}
              </button>
            </div>

            {expanded === t.id && (
              <div className="mt-4 space-y-4 pt-4 border-t border-gray-800">
                <div className="space-y-3">
                  {t.messages.map((m) => (
                    <div
                      key={m.id}
                      className={`p-4 rounded-lg ${
                        m.isStaff
                          ? "bg-blue-500/10 border border-blue-500/20"
                          : "bg-gray-800/50 border border-gray-700"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span
                          className={`text-xs font-medium ${
                            m.isStaff ? "text-blue-400" : "text-gray-400"
                          }`}
                        >
                          {m.isStaff ? "Support Agent" : "You"}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(m.createdAt).toLocaleString()}
                        </span>
                      </div>
                      <div className="text-sm">{m.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
