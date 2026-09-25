import { ImageResponse } from "next/og";

export const alt = "Meghana S. | Java Backend Developer";
export const size = { width: 1200, height: 630 };
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
          background: "#090b10",
          color: "#e7e9ee",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            color: "#b7c6ff",
          }}
        >
          JAVA BACKEND DEVELOPER
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 600, letterSpacing: -2 }}>Meghana S.</div>
          <div style={{ marginTop: 18, fontSize: 30, color: "#a8b1c0" }}>
            Spring Boot, REST APIs, PostgreSQL, AWS, and React
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
