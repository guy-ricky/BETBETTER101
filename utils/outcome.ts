export type Outcome = "WIN" | "LOSE" | "PUSH" | null;

export function winnerFromScore(
  h: number,
  a: number
): "HOME" | "AWAY" | "DRAW" {
  if (h === a) return "DRAW";
  return h > a ? "HOME" : "AWAY";
}

export function calcOutcome(
  predHome: number,
  predAway: number,
  actHome?: number | null,
  actAway?: number | null
) {
  if (actHome == null || actAway == null)
    return { outcome: null as Outcome, exact: false };

  const predWinner = winnerFromScore(predHome, predAway);
  const actWinner = winnerFromScore(actHome, actAway);

  const outcome: Outcome = predWinner === actWinner ? "WIN" : "LOSE";
  const exact = predHome === actHome && predAway === actAway;

  return { outcome, exact };
}
