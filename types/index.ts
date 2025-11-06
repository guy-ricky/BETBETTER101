export type ParamProps = Promise<{
  id: string;
}>;
export type ParamSlugProps = Promise<{
  slug: string;
}>;

export type Stats = {
  totalUsers: number;
  activeSubscribers: number;
  todayPayments: number;
  pendingPayments: number;
};

export type FeedItem = {
  id: string;
  date: string;
  league: string;
  match: string;
  predicted: string;
  actual?: string | null;
  status?: string | null;
  outcome?: "WIN" | "LOSE" | "PUSH" | null;
  exactHit?: boolean;
};

export type FreePick = {
  id: string;
  match: string;
  prediction: string;
  odds: string;
  createdAt: string;
};

export type VipPick = {
  id: string;
  match: string;
  prediction: string;
  odds: string;
  date: string;
};

export type Payment = {
  id: string;
  amount: number;
  method: string;
  status: string;
  reference: string;
  createdAt: string;
  user: {
    email: string;
  };
};

export type AutoPickProps = {
  type: string;
};

export interface League {
  id: number;
  name: string;
  type: string;
  logo: string;
  country: {
    name: string;
    code: string;
    flag: string;
  };
}

export interface ProcessedPick {
  id: number | string;
  date: string;
  match: string;
  league: string;
  prediction: string;
  odds: string | number;
  status: string;
  detailedPrediction?: {
    home_win_prob: number;
    draw_prob: number;
    away_win_prob: number;
  };
}

/** You can move this to @/types if you already have it there. */
export type WonPrediction = {
  id: string;
  date: string; // ISO string
  league: string; // e.g. "epl" or "EPL"
  homeTeam: string;
  awayTeam: string;
  pick: string; // "Home Win" | "Away Win" | "Draw" | "2-1" etc
  // NEW: taken from Prediction.actualHome / Prediction.actualAway
  actualHome: number | null;
  actualAway: number | null;

  // Optional legacy support if your API still returns it.
  result?: string | null;

  // You said “locked to WIN” for this feed, but keep it typed for UI helpers
  outcome: "WIN" | "EXACT_HIT" | "LOSE" | "PENDING" | (string & {});

  actualScore:string;
  predictedScore:string;
};

export type WonPredictionsResponse = {
  items: WonPrediction[];
  total: number;
  page: number; // 1-based
  pageSize: number;
};

export interface User {
  id: string;
  clerkUserId: string;
  email: string;
  username?: string;
  avatar?: string;
  role: string;
  isSubscribed: boolean;
  telegramChatId?: string;
  telegramUsername?: string;
  telegramLinkedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserAdminModalContentProps {
  users: User[];
  onUserUpdate: (userId: string, updates: Partial<User>) => void;
}


export type Metrics = {
  range: { from: string; to: string };
  kpis: {
    mrr: number;
    activeSubscribersFlag: number;
    activeSubscribersDerived: number;
    arpu: number;
    churnRatePercent: number;
    predictionAccuracyPercent: number;
    exactHitRatePercent: number;
    totalSettled: number;
  };
  buckets: { bucket: string; count: number; accuracy: number }[];
  leagueAccuracy: { league: string; accuracy: number; total: number }[];
  totals: { users: number; paymentsCurrent: number; paymentsPrev: number };
  notes: string[];
};

export type Ticket = {
  id: string;
  subject: string;
  category:
    | "BILLING"
    | "SUBSCRIPTION"
    | "TECHNICAL"
    | "ACCOUNT"
    | "OTHER"
    | string;
  priority: "LOW" | "MEDIUM" | "HIGH" | string;
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED" | string;
  createdAt: string;
  user:{
    id: string;
    email: string;
    username?: string | null;
    isSubscribed: boolean;
  }
};

export type TicketWithMessages = Ticket & {
  messages: { id: string; body: string; createdAt: string; isStaff: boolean }[];
};