export const getFixtures = async () => {
  const url = "https://v3.football.api-sports.io/fixtures?live=all";
  const options = {
    method: "GET",
    headers: {
      "x-apisports-key": process.env.NEXT_PUBLIC_API_FOOTBALL_KEY!, // or APISPORTS_KEY (safer on server side)
    },
    // Cache lightly if used in Next.js (optional)
    next: { revalidate: 60 },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`API error ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("Live fixtures:", result?.response);
    return result?.response ?? [];
  } catch (error) {
    console.error("Error fetching fixtures:", error);
    return [];
  }
};
