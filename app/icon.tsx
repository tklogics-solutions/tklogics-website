import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #00D4FF 0%, #7B61FF 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "11px",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "26px",
            fontWeight: 800,
            letterSpacing: "-1px",
            fontFamily: "system-ui, sans-serif",
            lineHeight: 1,
          }}
        >
          tk
        </span>
      </div>
    ),
    { ...size }
  );
}
