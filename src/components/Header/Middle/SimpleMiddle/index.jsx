import Logo from "../../../common/Logo";
import IconsPart from "../../Header-Components/IconsPart";
import NavigationList from "../../Header-Components/NavigationList";
import Telephone from "../../Header-Components/Telephone";

function SimpleMiddle() {
  return (
    <div
      style={{
        borderBlockStart: "1px solid var(--gray-2)",
        height: "78px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <NavigationList dontShowContactUs variant="simple" />
        <Logo />
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <Telephone notwhite />
          <IconsPart withSearch />
        </div>
      </div>
    </div>
  );
}

export default SimpleMiddle;
