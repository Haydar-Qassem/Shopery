import Logo from "../../../common/Logo";
import IconsPart from "../../Header-Components/IconsPart";
import Search from "../../Header-Components/Search";

function MainMiddle() {
  return (
    <div
      style={{
        borderBlockStart: "1px solid var(--gray-2)",
        height: "93px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--white)",
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
        <Logo theme="dark" />
        <Search />
        <IconsPart variant="main" />
      </div>
    </div>
  );
}

export default MainMiddle;
