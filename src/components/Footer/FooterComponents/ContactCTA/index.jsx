import React from "react";

function ContactCTA({
  phone = "(219) 555-0114",
  email = "Proxy@gmail.com",
  theme = "dark",
}) {
  const primaryColor = theme === "light" ? "var(--white)" : "var(--gray-9)";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        flexWrap: "wrap",
      }}
    >
      <a
        href={`tel:${phone.replace(/[^0-9]/g, "")}`}
        style={{
          color: primaryColor,
          textDecoration: "none",
          borderBottom: "2px solid var(--primary)",
          paddingBottom: "6px",
          font: "var(--body-medium-500)",
        }}
      >
        {phone}
      </a>

      <span>or</span>

      <a
        href={`mailto:${email}`}
        style={{
          color: primaryColor,
          textDecoration: "none",
          borderBottom: "2px solid var(--primary)",
          paddingBottom: "6px",
          font: "var(--body-medium-5)",
        }}
      >
        {email}
      </a>
    </div>
  );
}

export default ContactCTA;
