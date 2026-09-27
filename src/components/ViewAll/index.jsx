import { BsArrowRight } from "react-icons/bs";

function ViewAll({ href }) {
  return (
    <a
      style={{
        color: "var(--primary)",
        font: "var(--body-medium-500)",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        cursor: "pointer",
      }}
      href={href}
    >
      View All <BsArrowRight />
    </a>
  );
}

export default ViewAll;
