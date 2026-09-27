import { SiDiscover, SiMastercard, SiVisa } from "react-icons/si";
import { FaApplePay, FaCcDiscover, FaCcMastercard } from "react-icons/fa";
import { LuLock } from "react-icons/lu";
import { PaymentListStyles } from "./styles";

function PaymentList({ variant }) {
  return (
    <PaymentListStyles $variant={variant}>
      <span className="icon-box">
        <FaApplePay />
      </span>
      <span className="icon-box">
        <SiVisa />
      </span>
      <span className="icon-box">
        <SiDiscover />
      </span>
      <span className="icon-box">
        <SiMastercard />
      </span>

      <span className="secure-box">
        <span className="secure-top-row">
          <LuLock style={{ fontSize: "12px" }} />
          <span style={{ fontSize: "10px", fontWeight: 400 }}>Secure</span>
        </span>
        <span
          className="secure-bottom-row"
          style={{ fontSize: "10px", fontWeight: 600 }}
        >
          Payment
        </span>
      </span>
    </PaymentListStyles>
  );
}

export default PaymentList;
