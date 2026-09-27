import { FaApple, FaGooglePlay } from "react-icons/fa";

function StoreButton({ platform, theme }) {
  const isDark = theme === "dark";

  const bgColor = isDark ? "var(--gray-8)" : "var(--white)";
  const textColor = isDark ? "var(--white)" : "var(--gray-9)";

  const isApple = platform === "apple";

  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: bgColor,
        color: textColor,
        border: "none",
        borderRadius: "4px",
        padding: "8px 12px",
        cursor: "pointer",
        transition: "opacity 0.2s ease",
      }}
    >
      <div style={{ fontSize: "24px" }}>
        {isApple ? <FaApple /> : <FaGooglePlay />}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <span
          style={{ fontSize: "10px", lineHeight: "1", marginBottom: "2px" }}
        >
          Download on the
        </span>
        <span style={{ fontSize: "14px", fontWeight: "600", lineHeight: "1" }}>
          {isApple ? "App Store" : "Google play"}
        </span>
      </div>
    </button>
  );
}

export default StoreButton;
