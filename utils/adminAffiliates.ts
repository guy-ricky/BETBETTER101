export const formatCurrency = (minor: number, currency: string = "GBP") => {
  const major = minor / 100;
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currency,
  }).format(major);
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const calculateConversionRate = (
  conversions: number,
  clicks: number
) => {
  if (clicks === 0) return "0%";
  return ((conversions / clicks) * 100).toFixed(1) + "%";
};
