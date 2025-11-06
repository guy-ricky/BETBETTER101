import type { Metadata } from "next";
import Link from "next/link";
import {
  Trophy,
  Target,
  Shield,
  LineChart,
  Smartphone,
  Clock3,
  BellRing,
  Globe2,
  Zap,
  Sparkles,
  BadgeCheck,
  Users,
  FileBarChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Our mission, team, and methodology powering accurate football insights.",
  alternates: { canonical: "https://betbetter101.com/about" },
};

/**
 * About Page
 * — Purpose‑built for the BetBetter101 project
 * — Server component (no client hooks) for maximum performance
 * — TailwindCSS layout with a clean, modern aesthetic
 * — Clear, conversion‑minded copy that explains what we offer
 */
export default function AboutPage() {
  return (
    <main className="relative">
      {/* --- Hero --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-900 via-neutral-900 to-black">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_0%,#000_45%,transparent_100%)]">
          <div className="absolute -top-24 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-emerald-500/30" />
          <div className="absolute top-40 left-20 h-72 w-72 rounded-full blur-2xl opacity-20 bg-yellow-400/20" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <Sparkles className="h-3.5 w-3.5" /> Powered by data + domain
              expertise
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              We help you <span className="text-emerald-400">bet better</span>{" "}
              with explainable, transparent football predictions.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-neutral-300">
              BetBetter101 blends statistical models with real‑world football
              insight to deliver high‑confidence picks, smart staking guidance,
              and a verifiable track record—so you can make informed decisions,
              not guesses.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/premium"
                className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
              >
                Explore Premium Predictions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Value Props --- */}
      <section className="bg-black py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Target className="h-5 w-5" />,
              title: "AI‑assisted picks",
              text: "Model‑driven probabilities fused with human review for realism and edge.",
            },
            {
              icon: <FileBarChart className="h-5 w-5" />,
              title: "Explainable rationale",
              text: "Key drivers explained—form, injuries, schedule density, H2H, and more.",
            },
            {
              icon: <Trophy className="h-5 w-5" />,
              title: "League coverage",
              text: "Top domestic and international leagues, tuned per‑league for accuracy.",
            },
            {
              icon: <LineChart className="h-5 w-5" />,
              title: "Track record",
              text: "Real‑time results with clear WIN/LOSE/PUSH outcomes. No cherry‑picking.",
            },
            {
              icon: <BellRing className="h-5 w-5" />,
              title: "Timely alerts",
              text: "Get notified when new picks drop or when lines move (premium).",
            },
            {
              icon: <Shield className="h-5 w-5" />,
              title: "Secure & private",
              text: "Clerk‑powered auth, Stripe payments, and role‑based access control.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition hover:border-neutral-700 hover:bg-neutral-900/60"
            >
              <div className="flex items-center gap-3 text-emerald-400">
                <span className="inline-grid h-9 w-9 place-content-center rounded-xl bg-emerald-500/10">
                  {f.icon}
                </span>
                <h3 className="text-base font-semibold text-white">
                  {f.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- How it works --- */}
      <section className="bg-gradient-to-b from-black to-neutral-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              How BetBetter101 works
            </h2>
            <p className="mt-3 text-neutral-300">
              Our workflow is engineered for both speed and accountability.
            </p>
          </div>

          <ol className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Data intake",
                text: "We aggregate fixtures, odds, team and player metrics, injuries, and schedule context by league.",
                icon: <Globe2 className="h-5 w-5" />,
              },
              {
                step: "02",
                title: "Model + review",
                text: "Our models produce probabilities and score‑line lean; analysts review edge and market fit.",
                icon: <Zap className="h-5 w-5" />,
              },
              {
                step: "03",
                title: "Publish & verify",
                text: "Picks go live with timestamps. After full‑time, outcomes are auto‑graded and visible to all.",
                icon: <BadgeCheck className="h-5 w-5" />,
              },
            ].map((s, i) => (
              <li
                key={i}
                className="relative rounded-2xl border border-neutral-800 bg-neutral-950 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 font-semibold">
                    {s.step}
                  </span>
                  <div className="text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">{s.icon}</span>
                      <h3 className="text-base font-semibold">{s.title}</h3>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-neutral-800 bg-neutral-950 p-6 text-sm text-neutral-300">
            <p>
              <span className="font-semibold text-white">
                Transparency first.
              </span>{" "}
              You can cross‑check our calls on the {""}
              and explore upcoming slates on the {""}
              <Link
                href="/"
                className="text-emerald-400 underline-offset-4 hover:underline"
              >
                Homepage
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* --- What you get --- */}
      <section className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              What you get with Premium
            </h2>
            <p className="mt-3 text-neutral-300">
              A focused toolset to turn analysis into action.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Clock3 className="h-5 w-5" />,
                title: "Early releases",
                text: "Access predictions as soon as our confidence thresholds are met.",
              },
              {
                icon: <Smartphone className="h-5 w-5" />,
                title: "Mobile‑first experience",
                text: "Quickly scan picks, reasoning, and odds movement from any device.",
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: "Members‑only notes",
                text: "Deeper context on risk, alternatives, and portfolio‑style bankroll tips.",
              },
            ].map((x, i) => (
              <div
                key={i}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6"
              >
                <div className="flex items-center gap-3 text-emerald-400">
                  <span className="inline-grid h-9 w-9 place-content-center rounded-xl bg-emerald-500/10">
                    {x.icon}
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    {x.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  {x.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/premium"
              className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
            >
              See plans
            </Link>
          </div>
        </div>
      </section>

      {/* --- Social proof / Stats --- */}
      <section className="bg-neutral-950 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "Leagues covered", value: "10+" },
              { label: "Predictions graded", value: "2,000+" },
              { label: "Avg. weekly slates", value: "40+" },
              { label: "Uptime", value: "99.9%" },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-neutral-800 bg-black px-6 py-8 text-center"
              >
                <div className="text-3xl font-semibold text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-neutral-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Responsible use --- */}
      <section className="bg-black py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
              <Shield className="h-5 w-5 text-emerald-400" /> Responsible
              Betting & Fair Use
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300">
              We provide information and tools—not guarantees. Always set
              limits, never chase losses, and only stake what you can afford to
              lose. If you feel your gambling is no longer fun, seek help from
              local support resources.
            </p>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="bg-gradient-to-b from-neutral-950 to-black py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to make smarter football bets?
          </h2>
          <p className="mt-3 text-neutral-300">
            Start with our free slates on the homepage, then upgrade to Premium
            when you’re ready for deeper insights and earlier access.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/premium"
              className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
            >
              Get Premium
            </Link>
            <Link
              href="/"
              className="rounded-2xl border border-neutral-700 bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-neutral-600 hover:bg-neutral-800"
            >
              Browse free picks
            </Link>
          </div>
        </div>
      </section>

      {/* Footer micro‑badges */}
      <section className="bg-black pb-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1">
              <Shield className="h-3.5 w-3.5 text-emerald-400" /> Clerk Auth
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1">
              <Trophy className="h-3.5 w-3.5 text-emerald-400" /> Track Record
              Transparency
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1">
              <LineChart className="h-3.5 w-3.5 text-emerald-400" /> Data‑Driven
              Models
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
