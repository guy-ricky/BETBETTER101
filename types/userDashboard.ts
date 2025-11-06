export type Payment = {
  id: string;
  amount: number;
  method: string;
  status: string;
  reference: string;
  createdAt: string;
};

export type SubscriptionSummary = {
  status:
    | "ACTIVE"
    | "PAST_DUE"
    | "CANCELED"
    | "PAUSED"
    | "TRIALING"
    | "EXPIRED";
  productName: string | null;
  currency: string | null;
  interval: string;
  intervalCount: number;
  cancelAtPeriodEnd: boolean;
  currentPeriodEndISO: string | null;
  nextBillingDateISO: string | null;
  nextBillingLabel: "RENEWS" | "ENDS" | "N/A";
} | null;

export type UserData = {
  username?: string;
  email: string;
  role: "USER" | "ADMIN";
  isSubscribed: boolean;
  payments: Payment[];
  lastActivePick?: {
    match: string;
    prediction: string;
    odds: string;
    date: string;
  };
  subscriptionSummary?: SubscriptionSummary;
  telegramChatId?: string | null;
  telegramUsername?: string | null;
  telegramLinkedAt?: string | null; // ISO string
};