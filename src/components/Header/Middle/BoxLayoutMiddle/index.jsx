import Logo from "../../../common/Logo";
import Search from "../../Header-Components/Search";
import Telephone from "../../Header-Components/Telephone";

function BoxLayoutMiddle() {
  return (
    <div
      className="container"
      style={{
        borderBlockStart: "1px solid var(--gray-2)",
        height: "93px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      <Logo />
      <Search />
      <Telephone showText notwhite />
    </div>
  );
}

export default BoxLayoutMiddle;
