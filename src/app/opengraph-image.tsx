import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Tanishk Jain — Software Engineer & AI Automation Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(at 0% 0%, #2a1a4a 0%, transparent 50%), radial-gradient(at 100% 100%, #073a4a 0%, transparent 55%), #050509",
          color: "white",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 24,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background:
                "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 700,
              fontSize: 22,
            }}
          >
            TJ
          </div>
          tanishk-jain.dev
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 28,
              color: "#a78bfa",
              fontWeight: 500,
            }}
          >
            Software Engineer · AI Automation Engineer
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 1000,
            }}
          >
            Building AI-powered systems that{" "}
            <span
              style={{
                background:
                  "linear-gradient(120deg, #c4b5fd 0%, #67e8f9 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              think, evaluate, and ship.
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <div>Java · Python · MCP · Claude AI · LLM Workflows</div>
          <div>Tanishk Jain</div>
        </div>
      </div>
    ),
    size
  );
}
