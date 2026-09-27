import Logo from "../../../common/Logo";
import AppDownloads from "../../FooterComponents/AppDownloads";
import Company from "../../FooterComponents/Company";
import EmailInput from "../../FooterComponents/EmailInput";
import FooterColumn from "../../FooterComponents/FooterColumn";
import PaymentList from "../../FooterComponents/PaymentList";
import SocialMediaList from "../../FooterComponents/SocialMediaList";
import { Version5Styles } from "./styles";
import leftSticker from "../../../../assets/images/LeftStickers.png";
import rightSticker from "../../../../assets/images/RightStickers.png";

import FooterInstagram from "../../FooterComponents/FooterInstagram";

function Version5() {
  const columns = [
    {
      title: "My Account",
      links: [
        { label: "My Account", url: "/" },
        { label: "Order History", url: "/" },
        { label: "Shopping Cart", url: "/" },
        { label: "Wishlist", url: "/" },
      ],
    },
    {
      title: "Helps",
      links: [
        { label: "Contact", url: "/" },
        { label: "Faqs", url: "/" },
        { label: "Terms & Conditions", url: "/" },
        { label: "Privacy Policy", url: "/" },
      ],
    },
    {
      title: "Proxy",
      links: [
        { label: "About", url: "/" },
        { label: "Shop", url: "/" },
        { label: "Product", url: "/" },
        { label: "Track Order", url: "/" },
      ],
    },
  ];
  return (
    <Version5Styles>
      <div style={{ backgroundColor: "var(--white)", padding: "40px 0" }}>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logo theme="dark" />
          <div style={{ display: "flex", gap: "40px" }}>
            <div style={{ width: "23vw" }}>
              <h2
                style={{ font: "var(--body-xxl-600)", color: "var(--gray-9)" }}
              >
                Subscribe to our Newsletter
              </h2>
              <p
                style={{
                  font: "var(--body-small-400)",
                  color: "var(--gray-4)",
                }}
              >
                Pellentesque eu nibh eget mauris congue mattis matti.
              </p>
            </div>
            <EmailInput variant="v5" />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "var(--green-gray-9)",
          color: "var(--green-gray-4)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={leftSticker}
          alt=""
          style={{
            position: "absolute",
            left: "-50px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <img
          src={rightSticker}
          alt=""
          style={{
            position: "absolute",
            right: "-50px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            padding: "60px 0",
          }}
        >
          <Company variant="v5" />
          {columns.map((column) => (
            <FooterColumn title={column.title} links={column.links} />
          ))}
          <FooterInstagram />
        </div>
        <div
          className="container"
          style={{
            borderTop: "1px solid var(--green-gray-5)",
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SocialMediaList variant="v5" />
          <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
          <PaymentList variant="v5" />
        </div>
      </div>
    </Version5Styles>
  );
}

export default Version5;
