/** SAME CODE AS YOURS — ONLY RESPONSIVE CLASSES ADDED **/

import { useEffect, useState } from "react";
import {
    Users,
    TrendingUp,
    MousePointerClick,
    DollarSign,
    Calendar,
    Mail,
    Code,
    CheckCircle,
    XCircle,
    RefreshCcw,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { Affiliate } from "@/types/adminAffiliates";
import {
    formatCurrency,
    formatDate,
    calculateConversionRate,
} from "@/utils/adminAffiliates";
import Image from "next/image";

const ITEMS_PER_PAGE = 6;

const AdminAffiliates = () => {
    const [affiliates, setAffiliates] = useState<Affiliate[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        fetchAffiliates();
    }, []);

    const fetchAffiliates = async (isRefresh: boolean = false) => {
        if (isRefresh) setRefreshing(true);
        else setLoading(true);

        try {
            const res = await fetch("/api/admin/affiliates");
            if (!res.ok) throw new Error("Failed to fetch affiliates");
            const data = await res.json();
            setAffiliates(data);
        } catch (error) {
            setError(
                error instanceof Error ? error.message : "An unknown error occurred"
            );
            setTimeout(() => setError(null), 5000);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    // Pagination
    const totalPages = Math.ceil(affiliates.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentAffiliates = affiliates.slice(startIndex, endIndex);

    const goToPage = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) goToPage(currentPage - 1);
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) goToPage(currentPage + 1);
    };

    const handleRefresh = () => {
        fetchAffiliates(true);
        setCurrentPage(1);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#111827] p-6 mt-12 rounded-2xl flex items-center justify-center">
                <div className="animate-pulse-green text-[#00ff66] text-xl">
                    Loading affiliates...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#111827] p-6 mt-12 rounded-2xl">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#1f2937] border border-[#374151] rounded-lg p-6 text-center">
                        <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                        <p className="text-red-400 text-lg">{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#111827] p-4 sm:p-6 mt-12 rounded-2xl">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-white mb-1 flex items-center gap-3">
                            <Users className="w-7 h-7 text-[#00ff66]" />
                            Affiliate Management
                        </h1>
                        <p className="text-[#9ca3af] text-sm sm:text-base">
                            Total Affiliates:{" "}
                            <span className="text-[#00ff66] font-semibold">
                                {affiliates.length}
                            </span>
                        </p>
                    </div>

                    <button
                        onClick={handleRefresh}
                        className="cursor-pointer bg-[#1f2937] hover:bg-[#374151] flex justify-center items-center p-3 rounded-full w-12 h-12 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mx-auto sm:mx-0"
                        disabled={refreshing}
                        title="Refresh data"
                    >
                        <RefreshCcw
                            className={`${refreshing && "animate-spin"} text-gray-300 text-lg w-full h-full`}
                        />
                    </button>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 mt-6">
                    <div className="bg-[#1f2937] border border-[#374151] rounded-lg p-4 sm:p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[#9ca3af] text-xs sm:text-sm mb-1">
                                    Total Clicks
                                </p>
                                <p className="text-xl sm:text-2xl font-bold text-white">
                                    {affiliates
                                        .reduce((sum, a) => sum + a.clicks, 0)
                                        .toLocaleString()}
                                </p>
                            </div>
                            <MousePointerClick className="w-6 h-6 sm:w-8 sm:h-8 text-[#00ff66]" />
                        </div>
                    </div>

                    <div className="bg-[#1f2937] border border-[#374151] rounded-lg p-4 sm:p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[#9ca3af] text-xs sm:text-sm mb-1">
                                    Total Conversions
                                </p>
                                <p className="text-xl sm:text-2xl font-bold text-white">
                                    {affiliates
                                        .reduce((sum, a) => sum + a.conversions, 0)
                                        .toLocaleString()}
                                </p>
                            </div>
                            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffd700]" />
                        </div>
                    </div>

                    <div className="bg-[#1f2937] border border-[#374151] rounded-lg p-4 sm:p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[#9ca3af] text-xs sm:text-sm mb-1">
                                    Total Revenue
                                </p>
                                <p className="text-xl sm:text-2xl font-bold text-white">
                                    {formatCurrency(
                                        affiliates.reduce((sum, a) => sum + a.lifetimeMinor, 0)
                                    )}
                                </p>
                            </div>
                            <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-[#00ff66]" />
                        </div>
                    </div>

                    <div className="bg-[#1f2937] border border-[#374151] rounded-lg p-4 sm:p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[#9ca3af] text-xs sm:text-sm mb-1">
                                    Active Affiliates
                                </p>
                                <p className="text-xl sm:text-2xl font-bold text-white">
                                    {affiliates.filter((a) => a.isActive).length}
                                </p>
                            </div>
                            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffd700]" />
                        </div>
                    </div>
                </div>

                {/* Pagination Info */}
                {affiliates.length > 0 && (
                    <div className="mb-4 text-[#9ca3af] text-sm">
                        Showing {startIndex + 1}-
                        {Math.min(endIndex, affiliates.length)} of {affiliates.length}{" "}
                        affiliates
                    </div>
                )}

                {/* Affiliates Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {currentAffiliates.map((affiliate) => (
                        <div
                            key={affiliate.id}
                            className="bg-[#1f2937] border border-[#374151] rounded-lg p-5 sm:p-6 hover:border-[#00ff66] transition-all duration-300 shadow-lg hover:shadow-brb-green"
                        >
                            {/* Header */}
                            <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-4 mb-4">
                                <div className="flex items-center gap-3">
                                    {affiliate.user?.avatar ? (
                                        <Image
                                            src={affiliate.user.avatar}
                                            alt={affiliate.name}
                                            width={48}
                                            height={48}
                                            className="w-12 h-12 rounded-full border-2 border-[#00ff66]"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-[#00ff66] flex items-center justify-center text-black font-bold text-xl">
                                            {affiliate.name.charAt(0).toUpperCase()}
                                        </div>
                                    )}

                                    <div className="min-w-0">
                                        <h3 className="text-lg sm:text-xl font-bold text-white truncate">
                                            {affiliate.name}
                                        </h3>
                                        {affiliate.user?.username && (
                                            <p className="text-[#9ca3af] text-sm truncate">
                                                @{affiliate.user.username}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    {affiliate.isActive ? (
                                        <span className="px-3 py-1 bg-[#00ff66] bg-opacity-20 text-white rounded-full text-xs font-semibold flex items-center gap-1">
                                            <CheckCircle className="w-3 h-3" />
                                            Active
                                        </span>
                                    ) : (
                                        <span className="px-3 py-1 bg-red-500 bg-opacity-20 text-white rounded-full text-xs font-semibold flex items-center gap-1">
                                            <XCircle className="w-3 h-3" />
                                            Inactive
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="mb-4 space-y-2">
                                {affiliate.email && (
                                    <div className="flex items-center gap-2 text-[#9ca3af] text-sm break-all sm:break-normal">
                                        <Mail className="w-4 h-4 text-[#00ff66]" />
                                        <span className="break-words">{affiliate.email}</span>
                                    </div>
                                )}

                                <div className="flex items-center gap-2 text-[#9ca3af] text-sm">
                                    <Code className="w-4 h-4 text-[#ffd700]" />
                                    <span className="font-mono bg-[#111827] px-2 py-1 rounded text-[#00ff66] break-all sm:break-normal">
                                        {affiliate.code}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-[#9ca3af] text-sm">
                                    <Calendar className="w-4 h-4 text-[#00ff66]" />
                                    <span>Joined {formatDate(affiliate.createdAt)}</span>
                                </div>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4">
                                <div className="bg-[#111827] rounded-lg p-3 border border-[#374151]">
                                    <p className="text-[#9ca3af] text-xs mb-1">Clicks</p>
                                    <p className="text-white font-bold text-lg">
                                        {affiliate.clicks.toLocaleString()}
                                    </p>
                                </div>

                                <div className="bg-[#111827] rounded-lg p-3 border border-[#374151]">
                                    <p className="text-[#9ca3af] text-xs mb-1">Conversions</p>
                                    <p className="text-[#ffd700] font-bold text-lg">
                                        {affiliate.conversions}
                                    </p>
                                </div>

                                <div className="bg-[#111827] rounded-lg p-3 border border-[#374151]">
                                    <p className="text-[#9ca3af] text-xs mb-1">Conv. Rate</p>
                                    <p className="text-[#00ff66] font-bold text-lg">
                                        {calculateConversionRate(
                                            affiliate.conversions,
                                            affiliate.clicks
                                        )}
                                    </p>
                                </div>
                            </div>

                            {/* Revenue & Commission */}
                            <div className="bg-gradient-to-r from-[#00ff66] to-[#ffd700] bg-opacity-10 rounded-lg p-4 border border-[#00ff66]">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div>
                                        <p className="text-[#9ca3af] text-sm mb-1">
                                            Lifetime Revenue
                                        </p>
                                        <p className="text-2xl font-bold text-white">
                                            {formatCurrency(
                                                affiliate.lifetimeMinor,
                                                affiliate.currency || "GBP"
                                            )}
                                        </p>
                                    </div>

                                    <div className="text-left sm:text-right text-sm">
                                        {affiliate.ratePct && (
                                            <p className="text-[#00ff66] font-semibold">
                                                {affiliate.ratePct}% rate
                                            </p>
                                        )}
                                        {affiliate.flatMinor && (
                                            <p className="text-[#ffd700] font-semibold">
                                                +
                                                {formatCurrency(
                                                    affiliate.flatMinor,
                                                    affiliate.currency || "GBP"
                                                )}{" "}
                                                flat
                                            </p>
                                        )}
                                        {!affiliate.ratePct && !affiliate.flatMinor && (
                                            <p className="text-[#9ca3af]">Default terms</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Footer Stats */}
                            <div className="mt-4 pt-4 border-t border-[#374151] flex flex-wrap sm:flex-nowrap items-center justify-between text-xs text-[#9ca3af] gap-2">
                                <span>{affiliate.commissions.length} commissions</span>
                                <span>{affiliate.payouts.length} payouts</span>
                                <span>{affiliate.referralClicks.length} tracked clicks</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                {affiliates.length > ITEMS_PER_PAGE && (
                    <div className="mt-8 flex items-center justify-center gap-2 flex-wrap text-sm overflow-x-auto">
                        <button
                            onClick={goToPreviousPage}
                            disabled={currentPage === 1}
                            className="bg-[#1f2937] hover:bg-[#374151] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg flex items-center gap-2 border border-[#374151] disabled:opacity-50"
                        >
                            <ChevronLeft className="w-4 h-4" /> Previous
                        </button>

                        <div className="flex items-center gap-2 overflow-x-auto">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                (page) => {
                                    const showPage =
                                        page === 1 ||
                                        page === totalPages ||
                                        (page >= currentPage - 1 && page <= currentPage + 1);

                                    const showEllipsis =
                                        (page === 2 && currentPage > 3) ||
                                        (page === totalPages - 1 &&
                                            currentPage < totalPages - 2);

                                    if (!showPage && !showEllipsis) return null;

                                    if (showEllipsis) {
                                        return (
                                            <span key={page} className="text-[#9ca3af] px-2">
                                                ...
                                            </span>
                                        );
                                    }

                                    return (
                                        <button
                                            key={page}
                                            onClick={() => goToPage(page)}
                                            className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg border ${currentPage === page
                                                    ? "bg-[#00ff66] text-black border-[#00ff66] font-semibold"
                                                    : "bg-[#1f2937] text-white border-[#374151] hover:bg-[#374151]"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    );
                                }
                            )}
                        </div>

                        <button
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                            className="bg-[#1f2937] hover:bg-[#374151] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg flex items-center gap-2 border border-[#374151] disabled:opacity-50"
                        >
                            Next <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* Empty State */}
                {affiliates.length === 0 && (
                    <div className="text-center py-16">
                        <Users className="w-16 h-16 text-[#374151] mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">
                            No Affiliates Yet
                        </h3>
                        <p className="text-[#9ca3af]">
                            Start adding affiliates to track performance.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminAffiliates;
