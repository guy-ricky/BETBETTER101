import { ImageResponse } from "next/og";
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0b",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 800 }}>
          <span style={{ color: "#00FF66" }}>Bet</span>Better101
        </div>
      </div>
    ),
    { ...size }
  );
}
