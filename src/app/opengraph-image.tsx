import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ShopBayHQ — Every car. Every bay. Full picture.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              background: "#dc2626",
              color: "white",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: 900,
            }}
          >
            SB
          </div>
          <span style={{ color: "#a1a1aa", fontSize: "20px", letterSpacing: "0.1em" }}>
            SHOPBAYHQ
          </span>
        </div>

        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.1,
            marginBottom: "24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Every car. Every bay.</span>
          <span style={{ color: "#dc2626" }}>Full picture.</span>
        </div>

        <div
          style={{
            fontSize: "24px",
            color: "#a1a1aa",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Real-time visibility for your entire shop floor.
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            display: "flex",
            gap: "32px",
            fontSize: "16px",
            color: "#52525b",
            letterSpacing: "0.15em",
          }}
        >
          <span>FREE TIER FOREVER</span>
          <span>·</span>
          <span>NO CONTRACTS</span>
          <span>·</span>
          <span>WORKS ON ANY IPAD</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
