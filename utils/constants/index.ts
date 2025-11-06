function getCircularReplacer() {
  const seen = new WeakSet();
  return (_key: string, value: unknown) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value as object)) return "[Circular]";
      seen.add(value as object);
    }
    return value;
  };
}

// ---------- logging ----------
export function log(level: "info" | "warn" | "error", message: string, data?: unknown) {
  const ts = new Date().toISOString();
  const prefix = `[${ts}] [Paddle Webhook] [${level.toUpperCase()}]`;
  const logger =
    level === "error" ? console.error :
      level === "warn" ? console.warn :
        console.log;

  if (data === undefined) {
    logger(`${prefix} ${message}`);
    return;
  }

  // Pretty-print errors and safely stringify everything else (handles circular refs)
  if (data instanceof Error) {
    logger(`${prefix} ${message}`, {
      name: data.name,
      message: data.message,
      stack: data.stack,
    });
    return;
  }

  try {
    logger(`${prefix} ${message}`, JSON.stringify(data, getCircularReplacer(), 2));
  } catch {
    // Fallback: log raw if stringify fails for any reason
    logger(`${prefix} ${message}`, data);
  }
}





export const todaysPicks = [
  {
    match: "Manchester United vs Arsenal",
    prediction: "Over 2.5 Goals",
    odds: "1.85",
    confidence: "High",
    time: "15:30 GMT",
  },
  {
    match: "Barcelona vs Real Madrid",
    prediction: "BTTS Yes",
    odds: "1.75",
    confidence: "Medium",
    time: "18:00 GMT",
  },
  {
    match: "Liverpool vs Chelsea",
    prediction: "Liverpool Win",
    odds: "2.10",
    confidence: "High",
    time: "20:45 GMT",
  },
  {
    match: "PSG vs Monaco",
    prediction: "Over 1.5 Goals",
    odds: "1.45",
    confidence: "Very High",
    time: "21:00 GMT",
  },
  {
    match: "Bayern vs Dortmund",
    prediction: "Under 3.5 Goals",
    odds: "1.90",
    confidence: "Medium",
    time: "17:30 GMT",
  },
];

export const vipHighlights = [
  { title: "Weekend Mega Combo", odds: "75.5", games: 3, success: "89%" },
  { title: "Premier League Special", odds: "52.3", games: 3, success: "76%" },
  { title: "Champions League Pot", odds: "68.9", games: 3, success: "82%" },
];

// Format date for display
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Calculate confidence level based on odds
export const getConfidence = (odds: string) => {
  const oddsNum = parseFloat(odds);
  if (oddsNum < 2.0) return "Very High";
  if (oddsNum < 3.5) return "High";
  return "Medium";
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getOutcomeRecommendation = (prediction: any) => {
  const { home_win_prob, draw_prob, away_win_prob } = prediction;
  const max_prob = Math.max(home_win_prob, draw_prob, away_win_prob);

  if (max_prob === home_win_prob)
    return { outcome: "Home Win", confidence: home_win_prob };
  if (max_prob === draw_prob) return { outcome: "Draw", confidence: draw_prob };
  return { outcome: "Away Win", confidence: away_win_prob };
};

export const getConfidenceColor = (confidence: number) => {
  if (confidence >= 60) return "text-green-400";
  if (confidence >= 45) return "text-yellow-400";
  return "text-red-400";
};

export const getConfidenceBadge = (confidence: number) => {
  if (confidence >= 60)
    return "bg-green-500/20 text-green-400 border-green-500/30";
  if (confidence >= 45)
    return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
  return "bg-red-500/20 text-red-400 border-red-500/30";
};

// utils/leagues.ts
export type LeagueSlug =
  | "epl"
  | "la-liga"
  | "serie-a"
  | "bundesliga"
  | "ligue-1"
  | "eredivisie"
  | "ucl";

export type LeagueStatic = {
  leagueId: number; // API-Football ID (or your own if you prefer)
  slug: LeagueSlug;
  name: string;
  country: string;
  countryFlag?: string;
  logo?: string;
  order?: number; // for sidebar ordering
  active?: boolean;
};

export const LEAGUES: LeagueStatic[] = [
  {
    leagueId: 39,
    slug: "epl",
    name: "Premier League",
    country: "England",
    countryFlag: "https://flagcdn.com/w20/gb.png",
    logo: "https://media.api-sports.io/football/leagues/39.png",
    order: 1,
    active: true,
  },
  {
    leagueId: 140,
    slug: "la-liga",
    name: "La Liga",
    country: "Spain",
    countryFlag: "https://flagcdn.com/w20/es.png",
    logo: "https://media.api-sports.io/football/leagues/140.png",
    order: 2,
    active: true,
  },
  {
    leagueId: 135,
    slug: "serie-a",
    name: "Serie A",
    country: "Italy",
    countryFlag: "https://flagcdn.com/w20/it.png",
    logo: "https://media.api-sports.io/football/leagues/135.png",
    order: 3,
    active: true,
  },
  {
    leagueId: 78,
    slug: "bundesliga",
    name: "Bundesliga",
    country: "Germany",
    countryFlag: "https://flagcdn.com/w20/de.png",
    logo: "https://media.api-sports.io/football/leagues/78.png",
    order: 4,
    active: true,
  },
  {
    leagueId: 61,
    slug: "ligue-1",
    name: "Ligue 1",
    country: "France",
    countryFlag: "https://flagcdn.com/w20/fr.png",
    logo: "https://media.api-sports.io/football/leagues/61.png",
    order: 5,
    active: true,
  },
  {
    leagueId: 88,
    slug: "eredivisie",
    name: "Eredivisie",
    country: "Netherlands",
    countryFlag: "https://flagcdn.com/w20/nl.png",
    logo: "https://media.api-sports.io/football/leagues/88.png",
    order: 6,
    active: true,
  },
  {
    leagueId: 2,
    slug: "ucl",
    name: "UEFA Champions League",
    country: "Europe",
    countryFlag: "https://flagcdn.com/w20/eu.png",
    logo: "https://media.api-sports.io/football/leagues/2.png",
    order: 7,
    active: true,
  },
];

export const getOutcomeColors = (outcome: string) => {
  switch (outcome) {
    case "EXACT_HIT":
      return "bg-green-900/60 text-green-300";
    case "WIN":
      return "bg-green-900/40 text-green-400";
    case "LOSE":
      return "bg-red-900/40 text-red-400";
    case "PENDING":
      return "bg-yellow-900/40 text-yellow-300";
    default:
      return "bg-gray-800 text-gray-300";
  }
};

export const getOutcomeText = (outcome: string) => {
  switch (outcome) {
    case "EXACT_HIT":
      return "Exact Hit";
    case "WIN":
      return "Win";
    case "LOSE":
      return "Lose";
    default:
      return "bg-gray-800 text-gray-300";
  }
};

export const formatScore = (h?: number | null, a?: number | null) =>
  typeof h === "number" && typeof a === "number" ? `${h}-${a}` : "";


export const STATUS_OPTIONS = ["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"] as const;
export const PRIORITY_OPTIONS = ["LOW", "MEDIUM", "HIGH"] as const;
export const CATEGORY_OPTIONS = [
  "BILLING",
  "SUBSCRIPTION",
  "TECHNICAL",
  "ACCOUNT",
  "OTHER",
] as const;

export function formatWhen(iso: string) {
  const d = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMin = Math.floor(diffMs / 60000);

  if (isNaN(diffMin)) return "";
  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return `${diffH}h ago`;

  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Nairobi",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

export const appearance = {
  variables: {
    colorPrimary: "#00FF66",
    colorBackground: "#111827",
    colorInputBackground: "#1F2937",
    colorInputText: "#FFFFFF",
    colorText: "#FFFFFF",
    colorTextSecondary: "#D1D5DB",
    colorTextOnPrimaryBackground: "#000000",
    colorSuccess: "#00FF66",
    colorDanger: "#EF4444",
    colorWarning: "#FFD700",
    colorNeutral: "#6B7280",
    fontFamily: "var(--font-poppins)",
    borderRadius: "0.625rem",
    fontSize: "0.875rem",
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  elements: {
    // Main card styling
    card: {
      backgroundColor: "#1F2937",
      border: "1px solid #374151",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
    },

    // Header elements
    headerTitle: {
      color: "#FFFFFF",
      fontSize: "1.5rem",
      fontWeight: "700",
    },
    headerSubtitle: {
      color: "#D1D5DB",
      fontSize: "0.875rem",
    },

    // Form elements
    formFieldLabel: {
      color: "#E5E7EB",
      fontSize: "0.875rem",
      fontWeight: "500",
      marginBottom: "0.5rem",
    },
    formFieldInput: {
      backgroundColor: "#1F2937",
      borderColor: "#374151",
      color: "#FFFFFF",
      fontSize: "0.875rem",
      "&:focus": {
        borderColor: "#00FF66",
        boxShadow: "0 0 0 2px rgba(0, 255, 102, 0.1)",
      },
      "&::placeholder": {
        color: "#6B7280",
      },
    },
    formFieldInputShowPasswordButton: {
      color: "#9CA3AF",
      "&:hover": {
        color: "#D1D5DB",
      },
    },

    // Primary button (Sign in, Sign up, etc.)
    formButtonPrimary: {
      background: "linear-gradient(to right, #00FF66, #FFD700)",
      color: "#000000",
      fontWeight: "600",
      fontSize: "0.875rem",
      padding: "0.75rem 1.5rem",
      borderRadius: "0.625rem",
      boxShadow: "0 4px 14px rgba(0, 255, 102, 0.25)",
      transition: "all 0.3s ease",
      "&:hover": {
        background: "linear-gradient(to right, #00E055, #E6C200)",
        transform: "translateY(-1px)",
        boxShadow: "0 6px 20px rgba(0, 255, 102, 0.35)",
      },
      "&:active": {
        transform: "translateY(0)",
      },
    },

    // Secondary/Reset buttons
    formButtonReset: {
      color: "#D1D5DB",
      backgroundColor: "transparent",
      border: "1px solid #374151",
      "&:hover": {
        backgroundColor: "#374151",
        color: "#FFFFFF",
      },
    },

    // Links
    footerActionLink: {
      color: "#00FF66",
      fontWeight: "500",
      textDecoration: "underline",
      textUnderlineOffset: "2px",
      "&:hover": {
        color: "#00E055",
      },
    },
    link: {
      color: "#00FF66",
      fontWeight: "500",
      "&:hover": {
        color: "#00E055",
      },
    },

    // Social buttons (Google, etc.)
    socialButtonsBlockButton: {
      backgroundColor: "#1F2937",
      border: "1px solid #374151",
      color: "#FFFFFF",
      fontSize: "0.875rem",
      fontWeight: "500",
      "&:hover": {
        backgroundColor: "#374151",
        borderColor: "#4B5563",
      },
    },
    socialButtonsBlockButtonText: {
      color: "#FFFFFF",
      fontSize: "0.875rem",
      fontWeight: "500",
    },

    // Divider
    dividerLine: {
      backgroundColor: "#374151",
    },
    dividerText: {
      color: "#9CA3AF",
      fontSize: "0.75rem",
      fontWeight: "500",
    },

    // Footer
    footer: {
      backgroundColor: "#1F2937",
      borderTop: "1px solid #374151",
      padding: "1rem",
    },
    footerActionText: {
      color: "#D1D5DB",
      fontSize: "0.875rem",
    },

    // Error messages
    formFieldErrorText: {
      color: "#EF4444",
      fontSize: "0.75rem",
      fontWeight: "500",
    },
    alertText: {
      color: "#EF4444",
      fontSize: "0.875rem",
    },

    // Identity preview (user info display)
    identityPreviewText: {
      color: "#FFFFFF",
      fontSize: "0.875rem",
    },
    identityPreviewEditButton: {
      color: "#00FF66",
      fontSize: "0.875rem",
      "&:hover": {
        color: "#00E055",
      },
    },

    // OTP input
    formFieldInputOTP: {
      backgroundColor: "#1F2937",
      borderColor: "#374151",
      color: "#FFFFFF",
      fontSize: "1.25rem",
      "&:focus": {
        borderColor: "#00FF66",
      },
    },

    // Phone input
    formFieldInputPhoneCountrySelectTrigger: {
      backgroundColor: "#1F2937",
      borderColor: "#374151",
      color: "#FFFFFF",
    },

    // Tags (badges)
    badge: {
      backgroundColor: "#374151",
      color: "#D1D5DB",
      fontSize: "0.75rem",
      fontWeight: "500",
    },

    // User button
    userButtonAvatarBox: {
      width: "2.5rem",
      height: "2.5rem",
    },
    userButtonPopoverCard: {
      backgroundColor: "#1F2937",
      border: "1px solid #374151",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
    },
    userButtonPopoverActionButton: {
      color: "#D1D5DB",
      "&:hover": {
        backgroundColor: "#374151",
        color: "#FFFFFF",
      },
    },
    userButtonPopoverActionButtonText: {
      color: "#D1D5DB",
      fontSize: "0.875rem",
    },
    userButtonPopoverActionButtonIcon: {
      color: "#9CA3AF",
    },
    userButtonPopoverFooter: {
      backgroundColor: "#1F2937",
      borderTop: "1px solid #374151",
    },

    // Navbar button
    navbarButton: {
      color: "#D1D5DB",
      "&:hover": {
        color: "#FFFFFF",
      },
    },

    // Profile section
    profileSection: {
      borderBottom: "1px solid #374151",
    },
    profileSectionTitle: {
      color: "#FFFFFF",
      fontSize: "1rem",
      fontWeight: "600",
    },
    profileSectionSubtitle: {
      color: "#9CA3AF",
      fontSize: "0.875rem",
    },
    profileSectionContent: {
      color: "#D1D5DB",
      fontSize: "0.875rem",
    },

    // Modal backdrop
    modalBackdrop: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },

    // Organization switcher
    organizationSwitcherTrigger: {
      backgroundColor: "#1F2937",
      borderColor: "#374151",
      color: "#FFFFFF",
      "&:hover": {
        backgroundColor: "#374151",
      },
    },
    organizationSwitcherTriggerIcon: {
      color: "#9CA3AF",
    },

    // Avatar
    avatarBox: {
      width: "2.0rem",
      height: "2.0rem",
    },
    avatarImageActionsUpload: {
      color: "#00FF66",
    },
    avatarImageActionsRemove: {
      color: "#EF4444",
    },
  },
}