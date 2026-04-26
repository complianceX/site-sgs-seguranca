import { ImageResponse } from "next/og";

export const alt = "SGS Segurança - Gestão de SST com evidências em campo";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f8fafc",
          color: "#0f172a",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(2,132,199,0.18), rgba(16,185,129,0.08) 48%, rgba(255,255,255,0.96))",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -130,
            bottom: -130,
            width: 520,
            height: 520,
            borderRadius: 260,
            background: "rgba(2,132,199,0.12)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 22, position: "relative" }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 22,
              background: "#0284c7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 42,
              fontWeight: 900,
            }}
          >
            S
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 46, fontWeight: 900, letterSpacing: 0 }}>SGS</div>
            <div style={{ fontSize: 17, color: "#0284c7", fontWeight: 900, letterSpacing: 4 }}>
              SEGURANCA DO TRABALHO
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 870, position: "relative", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              padding: "12px 18px",
              borderRadius: 999,
              background: "rgba(2,132,199,0.1)",
              color: "#0284c7",
              fontSize: 18,
              fontWeight: 900,
              letterSpacing: 3,
              marginBottom: 30,
            }}
          >
            SITE INSTITUCIONAL
          </div>
          <div style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 900, letterSpacing: 0 }}>
            Gestão de SST com evidências em campo
          </div>
          <div style={{ marginTop: 28, fontSize: 28, lineHeight: 1.35, color: "#475569" }}>
            Documentos, prazos e governança rastreável para operações que precisam reduzir risco.
          </div>
        </div>
      </div>
    ),
    size
  );
}
