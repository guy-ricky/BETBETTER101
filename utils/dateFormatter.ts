// utils/dateFormatter.ts

/**
 * Format a date string to relative time (e.g., "2 days ago, 7:10:04 PM")
 * @param dateString - The date string to format (e.g., '9/1/2025, 7:10:04 PM')
 * @param options - Formatting options
 * @returns Formatted date string
 */
export function formatRelativeTime(
  dateString: string | Date,
  options: {
    includeTime?: boolean; // Whether to include the time portion
    shortFormat?: boolean; // Use shorter time units (e.g., "2d ago" instead of "2 days ago")
  } = {}
): string {
  const { includeTime = true, shortFormat = false } = options;

  // Parse the input date
  const date =
    typeof dateString === "string" ? new Date(dateString) : dateString;

  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // Time formatting for the clock portion
  const timeString = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  // Handle future dates
  if (diffInSeconds < 0) {
    return includeTime ? `in the future, ${timeString}` : "in the future";
  }

  // Calculate time differences
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  // Find the appropriate interval
  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);

    if (interval >= 1) {
      const unitName = shortFormat
        ? unit.charAt(0)
        : interval === 1
        ? unit
        : `${unit}s`;

      const relativePart = shortFormat
        ? `${interval}${unitName} ago`
        : `${interval} ${unitName} ago`;

      return includeTime ? `${relativePart}, ${timeString}` : relativePart;
    }
  }

  // If less than 1 second ago
  return includeTime ? `just now, ${timeString}` : "just now";
}

/**
 * Alternative: More precise formatting with thresholds
 */
export function formatRelativeTimePrecise(
  dateString: string | Date,
  options: {
    includeTime?: boolean;
    includeSeconds?: boolean;
  } = {}
): string {
  const { includeTime = true, includeSeconds = false } = options;
  const date =
    typeof dateString === "string" ? new Date(dateString) : dateString;

  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  // Time string formatting
  const timeString = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    ...(includeSeconds && { second: "2-digit" }),
    hour12: true,
  });

  // Determine the appropriate relative time
  let relativePart: string;

  if (diffInYears > 0) {
    relativePart = `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
  } else if (diffInMonths > 0) {
    relativePart = `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
  } else if (diffInWeeks > 0) {
    relativePart = `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} ago`;
  } else if (diffInDays > 0) {
    relativePart = `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  } else if (diffInHours > 0) {
    relativePart = `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  } else if (diffInMinutes > 0) {
    relativePart = `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds > 30) {
    relativePart = `${diffInSeconds} second${diffInSeconds > 1 ? "s" : ""} ago`;
  } else {
    relativePart = "just now";
  }

  return includeTime ? `${relativePart}, ${timeString}` : relativePart;
}

/**
 * Format for recent dates (today/yesterday) and full date for older ones
 */
export function formatSmartDate(
  dateString: string | Date,
  options: {
    includeTime?: boolean;
    includeYear?: boolean;
  } = {}
): string {
  const { includeTime = true, includeYear = true } = options;
  const date =
    typeof dateString === "string" ? new Date(dateString) : dateString;

  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const inputDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  // Time string
  const timeString = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  // Check if date is today
  if (inputDate.getTime() === today.getTime()) {
    return includeTime ? `Today, ${timeString}` : "Today";
  }

  // Check if date is yesterday
  if (inputDate.getTime() === yesterday.getTime()) {
    return includeTime ? `Yesterday, ${timeString}` : "Yesterday";
  }

  // For dates within the last 7 days, use day names
  const daysDiff = Math.floor(
    (today.getTime() - inputDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (daysDiff < 7) {
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    return includeTime ? `${dayName}, ${timeString}` : dayName;
  }

  // For older dates, use full date format
  const dateFormat: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    ...(includeYear && { year: "numeric" }),
  };

  const datePart = date.toLocaleDateString("en-US", dateFormat);
  return includeTime ? `${datePart}, ${timeString}` : datePart;
}

// Example usage and test cases
export const DateFormatterExamples = {
  testExamples: () => {
    const now = new Date();
    const testDates = [
      new Date(now.getTime() - 1000), // 1 second ago
      new Date(now.getTime() - 30000), // 30 seconds ago
      new Date(now.getTime() - 120000), // 2 minutes ago
      new Date(now.getTime() - 3600000), // 1 hour ago
      new Date(now.getTime() - 86400000), // 1 day ago
      new Date(now.getTime() - 172800000), // 2 days ago
      new Date(now.getTime() - 604800000), // 1 week ago
      new Date(2024, 0, 1), // January 1, 2024
    ];

    console.log("=== formatRelativeTime Examples ===");
    testDates.forEach((date) => {
      console.log(formatRelativeTime(date));
    });

    console.log("\n=== formatSmartDate Examples ===");
    testDates.forEach((date) => {
      console.log(formatSmartDate(date));
    });
  },
};
