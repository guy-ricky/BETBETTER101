/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Calendar as CalendarIcon,
  Loader2,
  Send,
  Zap,
  Bell,
  Sparkles,
  X,
} from "lucide-react";
import { format } from "date-fns";
import { toast } from "react-hot-toast";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { LEAGUES } from "@/utils/leagues";

const LS_KEY = "bb101_admin_generate_config";

type Persisted = {
  endpoint?: string;
  secret?: string;
  lastLeague?: string;
  notifyDefault?: boolean;
};

function getLeagueEntries(): ReadonlyArray<readonly [string, string]> {
  if (Array.isArray(LEAGUES)) {
    return (LEAGUES as any[])
      .map((l) => {
        const slug = typeof l?.slug === "string" ? l.slug.toLowerCase() : null;
        if (!slug) return null;
        const label =
          (typeof l?.name === "string" && l.name) ||
          (typeof l?.title === "string" && l.title) ||
          slug.toUpperCase();
        return [slug, label] as const;
      })
      .filter(Boolean) as ReadonlyArray<readonly [string, string]>;
  }

  const entries = Object.entries(LEAGUES as Record<string, any>);
  return entries.map(([slug, val]) => {
    const label =
      (typeof val?.name === "string" && val.name) ||
      (typeof val?.title === "string" && val.title) ||
      slug.toUpperCase();
    return [slug.toLowerCase(), label] as const;
  });
}

export default function AdminGeneratePredictions() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const leagues = useMemo(() => getLeagueEntries(), []);
  const allowedSlugs = useMemo(
    () => new Set(leagues.map(([s]) => s)),
    [leagues]
  );
  const firstSlug = leagues[0]?.[0] ?? "epl";

  const today = useMemo(() => new Date(), []);
  const [date, setDate] = useState<Date | undefined>(today);
  const [league, setLeague] = useState<string>(firstSlug);
  const [endpoint] = useState<string>("/api/predict/generate");
  const [secret] = useState<string>("BetBetter101");
  const [notify, setNotify] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [responsePreview, setResponsePreview] = useState<string>("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return;
      const parsed: Persisted = JSON.parse(raw);
      if (typeof parsed.notifyDefault === "boolean")
        setNotify(parsed.notifyDefault);

      if (
        parsed.lastLeague &&
        allowedSlugs.has(parsed.lastLeague.toLowerCase())
      ) {
        setLeague(parsed.lastLeague.toLowerCase());
      } else {
        setLeague(firstSlug);
      }
    } catch {
      // ignore
    }
  }, [allowedSlugs, firstSlug]);

  useEffect(() => {
    const payload: Persisted = {
      endpoint,
      secret,
      lastLeague: league,
      notifyDefault: notify,
    };
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(payload));
    } catch {
      // ignore
    }
  }, [endpoint, secret, league, notify]);

  async function handleGenerate() {
    if (!date) {
      toast.error("Please pick the match date to generate predictions for.");
      return;
    }

    const trimmedLeague = (league || "").toLowerCase().trim();
    if (!trimmedLeague || !allowedSlugs.has(trimmedLeague)) {
      toast.error("Please choose a valid league.");
      return;
    }

    setLoading(true);
    setResponsePreview("");

    const dateISO = format(date, "yyyy-MM-dd");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-cron-secret": secret || "",
        },
        body: JSON.stringify({ league: trimmedLeague, date: dateISO, notify }),
      });

      const text = await res.text();
      setResponsePreview(text);

      if (!res.ok) {
        toast.error(
          `Failed (${res.status}): Check your secret, endpoint, and server logs.`
        );
        return;
      }

      toast.success(
        `Predictions generated for ${trimmedLeague.toUpperCase()} on ${dateISO}`
      );

      try {
        router.refresh();
      } catch {
        // ignore
      }
    } catch (err: any) {
      toast.error(`Network error: ${err?.message ?? "Something went wrong."}`);
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    setIsOpen(false);
    setResponsePreview("");
  }

  return (
    <>
      {/* Simple top-right button instead of bubble */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-xl shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 font-medium"
        >
          <Sparkles className="h-5 w-5" />
          Generate Predictions
        </Button>
      </div>

      {/* Modal */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl bg-gray-800/95 backdrop-blur-md border border-gray-700/50 shadow-2xl animate-modal-in max-h-[90vh] overflow-y-auto">
              <CardHeader className="border-b border-gray-700/50 relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-white" />
                </button>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <Sparkles className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">
                      Generate Predictions
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Create AI-powered match predictions
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-6">
                {/* League Selection */}
                <div className="space-y-2">
                  <Label
                    htmlFor="league"
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <Zap className="h-4 w-4 text-yellow-400" />
                    League
                  </Label>
                  <Select
                    value={league}
                    onValueChange={(v) => setLeague(v.toLowerCase().trim())}
                  >
                    <SelectTrigger className="w-full bg-gray-700/50 border-gray-600/50 text-white h-11">
                      <SelectValue placeholder="Select league" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 max-h-60">
                      {leagues.map(([slug, label]) => (
                        <SelectItem
                          key={slug}
                          value={slug}
                          className="focus:bg-gray-700/50 text-white"
                        >
                          <span className="font-medium">{label}</span>
                          <span className="text-gray-400 ml-2 text-sm">
                            ({slug})
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Selection */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-300">
                    <CalendarIcon className="h-4 w-4 text-blue-400" />
                    Match Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start font-normal h-11 bg-gray-700/50 border-gray-600/50 text-white hover:bg-gray-700/70"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? (
                          format(date, "EEE, MMM d, yyyy")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-gray-800 border-gray-700"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="text-white"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Notification Toggle */}
                <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <Bell className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <Label
                          htmlFor="notify"
                          className="text-gray-200 font-medium"
                        >
                          Telegram Notifications
                        </Label>
                        <p className="text-sm text-gray-400">
                          Send updates after generation
                        </p>
                      </div>
                    </div>
                    <Switch
                      id="notify"
                      checked={notify}
                      onCheckedChange={setNotify}
                      className="data-[state=checked]:bg-blue-500"
                    />
                  </div>
                </div>

                {/* Response Preview */}
                {responsePreview && (
                  <div className="space-y-2">
                    <Label className="text-gray-300">Server Response</Label>
                    <Textarea
                      className="h-32 font-mono text-xs bg-gray-900/50 border-gray-700 text-white"
                      value={responsePreview}
                      readOnly
                      placeholder="Response will appear here..."
                    />
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="flex-1 gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white font-semibold h-11 transition-all duration-300"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Generate
                      </>
                    )}
                  </Button>

                  <Button
                    variant="outline"
                    onClick={handleClose}
                    className="border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:text-white h-11"
                  >
                    Close
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </>
  );
}
