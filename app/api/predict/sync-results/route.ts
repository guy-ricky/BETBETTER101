export const runtime = "nodejs";

import { NextResponse } from "next/server";
import prisma from "@/utils";
import { fetchFixtureById } from "@/utils/rapid";

export async function POST(){
    const now = new Date();

    // Look back 7 days; adjust as you like
  const from = new Date(now);
  from.setDate(from.getDate() - 7);

  // Only those without a final score or not FT yet
  const preds = await prisma.prediction.findMany({
    where: {
      date: { gte: from, lte: now },
      // optional: OR status not FT, or missing actuals
    },
    take: 200,
    orderBy: { date: "desc" },
  });

  let updated = 0;

  for(const p of preds){
    try {
      const fx = await fetchFixtureById(p.fixtureId);
      const status = fx?.fixture?.status?.short as string | undefined;
      const gh = fx?.goals?.home;
      const ga = fx?.goals?.away;

      // Only persist when the provider says it's finished
      if (status === "FT" || status === "AET" || status === "PEN") {
        await prisma.prediction.update({
          where: { fixtureId: p.fixtureId },
          data: {
            status,
            actualHome: gh ?? null,
            actualAway: ga ?? null,
          },
        });
        updated++;
      }
    } catch {
      // ignore individual failures; try again next run
    }
  }
  return NextResponse.json({ok:true,checked:preds.length, updated});
}