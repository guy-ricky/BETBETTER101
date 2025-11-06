import { FeedItem } from "@/types";
import React from "react";

const HomeFeedList = ({ feed }: { feed: FeedItem[] }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {feed.map((x) => (
        <div
          key={x.id}
          className="bg-[#111] border border-neutral-800 rounded-xl overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/10"
        >
          {/* Header with date and league */}
          <div className="bg-neutral-900 p-3 flex justify-between items-center">
            <span className="text-xs text-neutral-400">
              {new Date(x.date).toLocaleDateString()}
            </span>
            <span className="text-xs font-medium text-green-400 bg-green-900/20 px-2 py-1 rounded">
              {x.league}
            </span>
          </div>

          {/* Match details */}
          <div className="p-4">
            <div className="text-base font-medium text-white text-center mb-4">
              {x.match}
            </div>

            {/* Prediction vs Actual */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-neutral-900/50 p-3 rounded-lg text-center">
                <div className="text-xs text-neutral-400 mb-1">Predicted</div>
                <div className="text-lg font-bold text-yellow-300">
                  {x.predicted}
                </div>
              </div>
              <div className="bg-neutral-900/50 p-3 rounded-lg text-center">
                <div className="text-xs text-neutral-400 mb-1">Actual</div>
                <div className="text-lg font-bold text-white">
                  {x.actual ?? "—"}
                </div>
              </div>
            </div>

            {/* Status and outcome */}
            <div className="flex justify-between items-center">
              <div className="text-xs text-neutral-400">
                Status:{" "}
                <span className="text-white ml-1">{x.status ?? "PENDING"}</span>
              </div>
              <div
                className={
                  x.outcome === "WIN"
                    ? "bg-emerald-400/10 text-emerald-400 px-2 py-1 rounded text-xs font-medium"
                    : x.outcome === "LOSE"
                    ? "bg-red-400/10 text-red-400 px-2 py-1 rounded text-xs font-medium"
                    : "bg-neutral-400/10 text-neutral-400 px-2 py-1 rounded text-xs font-medium"
                }
              >
                {x.exactHit ? (
                  <span className="flex items-center">
                    <span className="mr-1">⭐</span> EXACT HIT
                  </span>
                ) : (
                  x.outcome ?? "PENDING"
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeFeedList;
