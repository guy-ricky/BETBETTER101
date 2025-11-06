"use client";

import { useState, useEffect, useMemo } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { toast } from "react-hot-toast";
import {
  Settings,
  Shield,
  Search,
  ChevronLeft,
  ChevronRight,
  Users,
  CreditCard,
  TrendingUp,
  Clock,
  BarChart3,
  Filter,
  Download,
  RefreshCw,
} from "lucide-react";
import { Stats, Payment } from "@/types";
import { getOutcomeColors, getOutcomeText } from "@/utils/constants";
import { WonPrediction, WonPredictionsResponse } from "@/types";

// Import your generator component
import AdminGeneratePredictions from "@/components/AdminGeneratePredictions";
import UserAdminModal from "@/components/UserAdminModal";
import UserAdminModalContent from "@/components/UserAdminModalContent";
import { formatSmartDate } from "@/utils/dateFormatter";
import { User } from "@/types";

// ✅ Import the tickets manager component
import AdminTicketsManager from "@/components/admin/AdminTicketsManager";
import AdminAffiliates from "@/components/admin/AdminAffiliates";

export default function AdminDashboard() {
  const { user, isLoaded } = useUser();

  // Top summary + payments
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentPayments, setRecentPayments] = useState<Payment[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]); // Added users state
  const [loading, setLoading] = useState(true);

  // Won predictions state
  const [wonPreds, setWonPreds] = useState<WonPrediction[]>([]);
  const [wonTotal, setWonTotal] = useState(0);
  const [wonPage, setWonPage] = useState(1);
  const [wonPageSize, setWonPageSize] = useState(6);
  const [wonLoading, setWonLoading] = useState(true);
  const [syncLoading, setSyncLoading] = useState(false);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Search state (with debounce)
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedStat, setSelectedStat] = useState<string | null>(null);

  const openModal = (statLabel: string) => {
    setSelectedStat(statLabel);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStat(null);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleUserUpdate = async (userId: string, updates: Partial<User>) => {
    // notify feature coming soon
    toast.success("Feature coming soon");
  };
  const pageCount = useMemo(
    () => Math.max(1, Math.ceil(wonTotal / wonPageSize)),
    [wonTotal, wonPageSize]
  );

  useEffect(() => {
    const t = setTimeout(() => setDebounced(search.trim()), 400);
    return () => clearTimeout(t);
  }, [search]);

  useEffect(() => {
    if (!isLoaded) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const [statsRes, paymentsRes, usersRes] = await Promise.all([
          fetch("/api/admin/stats"),
          fetch("/api/admin/recent-payments"),
          fetch("/api/admin/users"), // Added users fetch
        ]);

        if (!statsRes.ok || !paymentsRes.ok || !usersRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const [statsData, paymentsData, usersData] = await Promise.all([
          statsRes.json(),
          paymentsRes.json(),
          usersRes.json(),
        ]);

        setStats(statsData);
        setRecentPayments(paymentsData);
        setAllUsers(usersData); // Set users data
      } catch (error) {
        toast.error(
          error instanceof Error
            ? error.message
            : "Failed to load dashboard data"
        );
        console.log(error instanceof Error ? error.message : error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isLoaded]);

  // Fetch won predictions when page / pageSize / search changes
  useEffect(() => {
    if (!isLoaded) return;

    const run = async () => {
      try {
        setWonLoading(true);
        const params = new URLSearchParams({
          page: String(wonPage),
          pageSize: String(wonPageSize),
        });
        if (debounced) params.set("query", debounced);

        const res = await fetch(
          `/api/admin/won-predictions?${params.toString()}`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("Failed to fetch won predictions");
        const data: WonPredictionsResponse = await res.json();

        setWonPreds(data.items);
        setWonTotal(data.total);
        setWonPage(data.page);
        setWonPageSize(data.pageSize);
      } catch (err) {
        toast.error(
          err instanceof Error ? err.message : "Failed to load won predictions"
        );
        console.error(err);
      } finally {
        setWonLoading(false);
      }
    };

    run();
  }, [isLoaded, wonPage, wonPageSize, debounced]);

  const syncResults = async () => {
    setSyncLoading(true);
    try {
      const res = await fetch("/api/predict/sync-results", { method: "POST" });
      if (!res.ok) throw new Error("Failed to sync results");
      const data = await res.json();
      console.log("Sync results data:", data);
      toast.success(
        `Successfully synced ${data.checked} match predictions & results`
      );
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to sync results"
      );
      console.error("Error syncing results:", error);
    } finally {
      setSyncLoading(false);
    }
  };

  const isAdmin =
    user?.publicMetadata?.role === "ADMIN" ||
    user?.emailAddresses?.[0]?.emailAddress?.includes("admin");

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-emerald-400 text-lg font-medium">
            Loading admin dashboard...
          </p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="text-center p-8 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/10 max-w-md mx-4">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            Admin Access Required
          </h2>
          <p className="text-gray-300 mb-6">
            You are not authorized to access this page
          </p>
          <Link
            href="/"
            className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-800/80 backdrop-blur-sm border-b border-emerald-500/30 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <Shield className="w-6 h-6 text-emerald-400" />
              </div>
              <h1 className="text-2xl font-bold text-white">
                Admin <span className="text-emerald-400">Dashboard</span>
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
              <span className="text-emerald-300 text-sm bg-gray-700/50 py-1 px-3 rounded-full">
                {user?.emailAddresses[0].emailAddress}
              </span>
              <Link
                href="/admin/dashboard"
                className="inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
              >
                <Settings className="w-5 h-5 mr-1" />
                <span className="hidden sm:inline">Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: "Total Users",
              value: stats?.totalUsers || "0",
              icon: Users,
              color: "bg-gradient-to-r from-blue-500 to-indigo-600",
              modal: true,
            },
            {
              label: "Active Subscribers",
              value: stats?.activeSubscribers || "0",
              icon: TrendingUp,
              color: "bg-gradient-to-r from-emerald-500 to-teal-600",
              modal: false,
            },
            {
              label: "Today's Payments",
              value: `£ ${stats?.todayPayments?.toLocaleString() || "0"}`,
              icon: CreditCard,
              color: "bg-gradient-to-r from-amber-500 to-orange-600",
              modal: false,
            },
            {
              label: "Pending Payments",
              value: stats?.pendingPayments || "0",
              icon: Clock,
              color: "bg-gradient-to-r from-purple-500 to-pink-600",
              modal: false,
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`bg-gray-800/60 backdrop-blur-sm p-5 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${stat.modal && "cursor-pointer hover:bg-gray-700/70"
                }`}
              onClick={stat.modal ? () => openModal(stat.label) : undefined}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-1">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="mt-4 h-1 bg-gray-700/50 rounded-full overflow-hidden">
                <div
                  className={`h-full ${stat.color.split(" ")[0]} ${stat.color.split(" ")[1]
                    }`}
                  style={{
                    width: `${Math.min(
                      100,
                      (parseInt(stat.value.toString().replace(/[^0-9]/g, "")) /
                        1000) *
                      100
                    )}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}

          <UserAdminModal isOpen={isModalOpen} onClose={closeModal}>
            <UserAdminModalContent
              users={allUsers} // Pass the users array
              onUserUpdate={handleUserUpdate}
            />
          </UserAdminModal>
        </div>

        {/* Generate Predictions */}
        <section className="mb-8">
          <AdminGeneratePredictions />
        </section>

        {/* ✅ Support Tickets Manager */}
        <section className="mb-8 bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg p-5">
          <AdminTicketsManager />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Payments */}
          <div className="lg:col-span-1 bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg p-5">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-emerald-400" />
                Recent Payments
              </h3>
              <Link
                href="#"
                className="text-xs text-emerald-400 hover:text-emerald-300 font-medium flex items-center"
              >
                View All
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {recentPayments.length === 0 ? (
              <div className="text-center py-8">
                <CreditCard className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                <p className="text-gray-400">No recent payments</p>
              </div>
            ) : (
              <div className="space-y-4">
                {recentPayments.map((p) => (
                  <div
                    key={p.id}
                    className="p-4 rounded-lg bg-gray-900/50 border border-gray-700/30 hover:border-emerald-500/30 transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-emerald-400">
                        £ {p.amount.toFixed(2)}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${p.status === "COMPLETED"
                          ? "bg-emerald-900/30 text-emerald-400"
                          : p.status === "PENDING"
                            ? "bg-amber-900/30 text-amber-400"
                            : "bg-rose-900/30 text-rose-400"
                          }`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mb-1">
                      {p.method} • {p.user.email}
                    </p>
                    <p className="text-xs text-gray-500 mb-1">
                      {formatSmartDate(new Date(p.createdAt).toLocaleString())}
                    </p>
                    <p className="text-xs text-gray-500 font-mono">
                      Ref: {p.reference}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Stats Chart Area */}
          <div className="lg:col-span-2 bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg p-5">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-amber-400" />
                Performance Overview
              </h3>
              <div className="flex items-center gap-2">
                <button className="text-xs text-gray-400 hover:text-white font-medium flex items-center p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition">
                  <Filter className="w-3 h-3 mr-1" />
                  Filter
                </button>
                <button className="text-xs text-gray-400 hover:text-white font-medium flex items-center p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition">
                  <Download className="w-3 h-3 mr-1" />
                  Export
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700/50">
                <p className="text-gray-400 text-sm mb-1">Win Rate</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-bold text-emerald-400">72.8%</p>
                  <div className="text-xs px-2 py-1 rounded-full bg-emerald-900/30 text-emerald-400">
                    +4.2%
                  </div>
                </div>
                <div className="mt-3 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-600"
                    style={{ width: "72.8%" }}
                  ></div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700/50">
                <p className="text-gray-400 text-sm mb-1">Avg. Payout</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-bold text-amber-400">£42.50</p>
                  <div className="text-xs px-2 py-1 rounded-full bg-amber-900/30 text-amber-400">
                    +£3.20
                  </div>
                </div>
                <div className="mt-3 h-2 bg-amber-500 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-600"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700/50">
                <p className="text-gray-400 text-sm mb-1">Active Predictions</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-bold text-blue-400">128</p>
                  <div className="text-xs px-2 py-1 rounded-full bg-blue-900/30 text-blue-400">
                    +12
                  </div>
                </div>
                <div className="mt-3 h-2 bg-blue-500 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700/50">
                <p className="text-gray-400 text-sm mb-1">New Users</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-bold text-purple-400">24</p>
                  <div className="text-xs px-2 py-1 rounded-full bg-purple-900/30 text-purple-400">
                    +3
                  </div>
                </div>
                <div className="mt-3 h-2 bg-purple-500 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-600"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Won Predictions: Search + Pagination + Grid/Table */}
        <section className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-emerald-400" />
              All Predictions
            </h3>

            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative flex-1 min-w-[200px]">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  value={search}
                  onChange={(e) => {
                    setWonPage(1); // reset page on new search
                    setSearch(e.target.value);
                  }}
                  placeholder="Search team, league, score, pick…"
                  className="w-full pl-9 pr-3 py-2 bg-gray-900/70 border border-gray-700/50 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/30 transition placeholder:text-sm"
                />
              </div>

              {/* Page size */}
              <select
                className="bg-gray-900/70 border border-gray-700/50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/30 transition"
                value={wonPageSize}
                onChange={(e) => {
                  setWonPage(1);
                  setWonPageSize(parseInt(e.target.value, 10));
                }}
              >
                {[6, 12].map((s) => (
                  <option key={s} value={s} className="text-sm">
                    {s} per page
                  </option>
                ))}
              </select>

              <button
                className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition border border-gray-700/30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                title="Sync Match Predictions & Results"
                onClick={syncResults}
                disabled={syncLoading}
              >
                <RefreshCw
                  className={`w-4 h-4 text-gray-400 transition-transform ${syncLoading ? "animate-spin" : ""
                    }`}
                />
              </button>
            </div>
          </div>

          {/* Grid / table */}
          <div className="mt-4">
            {wonLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                <span className="ml-3 text-emerald-400">
                  Loading predictions…
                </span>
              </div>
            ) : wonPreds.length === 0 ? (
              <div className="text-center py-12">
                <BarChart3 className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                <p className="text-gray-400">
                  No predictions found{debounced ? ` for “${debounced}”` : ""}.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-lg border border-gray-700/50">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-900/50">
                    <tr className="text-left text-gray-300">
                      <th className="py-3 px-4 font-medium">Date</th>
                      <th className="py-3 px-4 font-medium">League</th>
                      <th className="py-3 px-4 font-medium">Match</th>
                      <th className="py-3 px-4 font-medium">Pick</th>
                      <th className="py-3 px-4 font-medium">Predicted</th>
                      <th className="py-3 px-4 font-medium">Actual</th>
                      <th className="py-3 px-4 font-medium text-center">
                        Outcome
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    {wonPreds.map((wp) => (
                      <tr
                        key={wp.id}
                        className="hover:bg-gray-900/40 transition-colors"
                      >
                        <td className="py-3 px-4 whitespace-nowrap">
                          {new Date(wp.date).toLocaleDateString()}
                          <div className="text-xs text-gray-500">
                            {new Date(wp.date).toLocaleTimeString()}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="bg-gray-700/50 text-xs px-2 py-1 rounded-full">
                            {wp.league}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-medium">{wp.homeTeam}</div>
                          <div className="text-xs text-gray-400">vs</div>
                          <div className="font-medium">{wp.awayTeam}</div>
                        </td>
                        <td className="py-3 px-4 capitalize font-medium">
                          {wp.pick}
                        </td>
                        <td className="py-3 px-4 font-mono">
                          {wp.predictedScore}
                        </td>
                        <td className="py-3 px-4 font-mono">
                          {wp.actualScore}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span
                            className={`inline-block text-xs px-3 py-1 rounded-full font-medium ${getOutcomeColors(
                              wp.outcome
                            )} border border-gray-700/50 capitalize`}
                          >
                            {getOutcomeText(wp.outcome)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pagination */}
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">
                Showing{" "}
                <span className="text-white font-medium">
                  {wonPreds.length}
                </span>{" "}
                of <span className="text-white font-medium">{wonTotal}</span>{" "}
                predictions
                {debounced ? (
                  <>
                    {" "}
                    for{" "}
                    <span className="text-emerald-400">
                      &quot;{debounced}&quot;
                    </span>
                  </>
                ) : null}
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setWonPage((p) => Math.max(1, p - 1))}
                  disabled={wonPage <= 1 || wonLoading}
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg border transition
                    ${wonPage <= 1 || wonLoading
                      ? "border-gray-700/50 text-gray-500 cursor-not-allowed"
                      : "border-gray-700/50 text-white hover:bg-gray-900/50 hover:border-emerald-500/30"
                    }`}
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" /> Prev
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, pageCount) }, (_, i) => {
                    const pageNum =
                      wonPage <= 3
                        ? i + 1
                        : wonPage >= pageCount - 2
                          ? pageCount - 4 + i
                          : wonPage - 2 + i;

                    if (pageNum < 1 || pageNum > pageCount) return null;

                    return (
                      <button
                        key={i}
                        onClick={() => setWonPage(pageNum)}
                        className={`w-8 h-8 rounded-lg text-sm transition ${wonPage === pageNum
                          ? "bg-emerald-500 text-white font-medium"
                          : "text-gray-300 hover:bg-gray-700/50"
                          }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  {pageCount > 5 && (
                    <span className="px-1 text-gray-500">...</span>
                  )}
                </div>

                <button
                  onClick={() => setWonPage((p) => Math.min(pageCount, p + 1))}
                  disabled={wonPage >= pageCount || wonLoading}
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg border transition
                    ${wonPage >= pageCount || wonLoading
                      ? "border-gray-700/50 text-gray-500 cursor-not-allowed"
                      : "border-gray-700/50 text-white hover:bg-gray-900/50 hover:border-emerald-500/30"
                    }`}
                  aria-label="Next page"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Admin affiliates section */}
        <section id="affiliates">
          <AdminAffiliates />
        </section>
      </main>
    </div>
  );
}
