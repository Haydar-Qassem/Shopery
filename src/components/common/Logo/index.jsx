import icon from "../../../assets/images/icon.png";

function Logo({ theme }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img
        src={icon}
        alt="Logo image"
        style={{ width: "32px", height: "32px" }}
      />
      <span
        style={{
          color: theme === "dark" ? "var(--green-gray-9)" : "var(--white)",
          font: "var(--heading-5-600)",
          letterSpacing: "-3%",
          fontWeight: "600",
        }}
      >
        Ecobazar
      </span>
    </div>
  );
}

export default Logo;
