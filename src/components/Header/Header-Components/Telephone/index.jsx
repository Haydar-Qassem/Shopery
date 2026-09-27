import telephone from "../../../../assets/images/telephone.svg";
import { PiPhoneCallLight } from "react-icons/pi";

function Telephone({ showText, notwhite }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: showText ? "12px" : "8px",
        color: notwhite ? "var(--gray-9)" : "var(--white)",
      }}
    >
      <PiPhoneCallLight
        style={{
          transform: showText ? "scale(2.62)" : "scale(1.9)",
          transformOrigin: "center",
        }}
      />
      {/* <img
        src={telephone}
        alt="telephone"
        style={{ width: showText ? "28px" : "21px", aspectRatio: "1/1" }}
      /> */}
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          alignItems: "flex-start",
        }}
      >
        {showText && (
          <span
            style={{ font: "var(--body-small-400)", color: "var(--gray-4)" }}
          >
            Customer Services
          </span>
        )}
        <span
          style={{
            font: showText ? "var(--body-xl-500)" : "var(--body-small-500)",
          }}
        >
          (219) 555-0114
        </span>
      </span>
    </div>
  );
}

export default Telephone;
