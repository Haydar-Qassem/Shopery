import { EmailStyles } from "./styles";
import { useState } from "react";
import Button from "../../../common/Button";

function EmailInput({ variant = "v1" }) {
  const [email, setEmail] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex" }}>
      <EmailStyles variant={variant}>
        <input
          style={{
            color: variant === "property3" ? "var(--green-gray-5)" : "var(--gray-5)",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "21px",
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
        />
        <Button type="submit" variant="fill" size="large">
          Subscribe
        </Button>
      </EmailStyles>
    </form>
  );
}

export default EmailInput;
