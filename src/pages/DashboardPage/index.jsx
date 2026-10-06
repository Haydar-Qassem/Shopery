import { DashboardPageStyles, Frame } from "./styles";
import { users } from "../../MockData/Users";

function DashboardPage() {
  return (
    <DashboardPageStyles className="container">
      <Frame></Frame>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "5fr 4fr",
          gap: "24px",
        }}
      >
        <Frame></Frame>
        <Frame></Frame>
        <Frame style={{ span: "2" }}></Frame>
      </div>
    </DashboardPageStyles>
  );
}

export default DashboardPage;
