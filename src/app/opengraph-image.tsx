import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#0f172a",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "18px",
              background: "#0284c7",
              color: "#ffffff",
              fontSize: "34px",
              fontWeight: 900,
            }}
          >
            S
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "42px", fontWeight: 900, lineHeight: 1 }}>SGS</span>
            <span style={{ color: "#0284c7", fontSize: "16px", fontWeight: 900, letterSpacing: "5px" }}>
              SEGURANCA
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "900px" }}>
          <span style={{ color: "#0284c7", fontSize: "22px", fontWeight: 900, letterSpacing: "4px" }}>
            GESTAO DE SST
          </span>
          <h1 style={{ margin: 0, fontSize: "72px", lineHeight: 1.02, fontWeight: 900 }}>
            Governanca documental com evidencias em campo
          </h1>
          <p style={{ margin: 0, color: "#475569", fontSize: "30px", lineHeight: 1.35, fontWeight: 600 }}>
            Documentos, prazos e rastreabilidade em uma plataforma SaaS para seguranca do trabalho.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "14px",
            color: "#475569",
            fontSize: "20px",
            fontWeight: 800,
          }}
        >
          <span>APR</span>
          <span>DDS</span>
          <span>PT</span>
          <span>Treinamentos</span>
          <span>LGPD</span>
        </div>
      </div>
    ),
    size
  );
}
