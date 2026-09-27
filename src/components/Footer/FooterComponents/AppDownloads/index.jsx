import StoreButton from "../StoreButton";

function AppDownloads({ theme = "dark", gap = "16px" }) {
  const title = "Download our Mobile App";
  const textColor = theme === "dark" ? "var(--white)" : "var(--gray-900)";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: gap,
      }}
    >
      <h3
        style={{
          font: "var(--body-large-500)",
          color: textColor,
          margin: 0,
        }}
      >
        {title}
      </h3>

      <div style={{ display: "flex", gap: "12px" }}>
        <StoreButton platform="apple" theme={theme} />
        <StoreButton platform="google" theme={theme} />
      </div>
    </div>
  );
}

export default AppDownloads;
