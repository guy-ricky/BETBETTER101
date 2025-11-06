export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
}

export interface Affiliate {
  id: string;
  userId?: string;
  user?: User;
  name: string;
  email?: string;
  code: string;
  ratePct?: number;
  flatMinor?: number;
  currency?: string;
  isActive: boolean;
  clicks: number;
  conversions: number;
  lifetimeMinor: number;
  createdAt: string;
  updatedAt: string;
  referralClicks: any[];
  commissions: any[];
  payouts: any[];
}
