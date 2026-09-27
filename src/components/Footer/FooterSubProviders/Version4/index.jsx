import Logo from "../../../common/Logo";
import AppDownloads from "../../FooterComponents/AppDownloads";
import Company from "../../FooterComponents/Company";
import EmailInput from "../../FooterComponents/EmailInput";
import FooterColumn from "../../FooterComponents/FooterColumn";
import PaymentList from "../../FooterComponents/PaymentList";
import SocialMediaList from "../../FooterComponents/SocialMediaList";
import bgStickers from "../../../../assets/images/BG.png";
import { Version4Styles } from "./styles";

function Version4() {
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
    <Version4Styles>
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
            <EmailInput variant="v4" />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "var(--gray-9)",
          backgroundImage: `url(${bgStickers})`,
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "var(--gray-5)",
        }}
      >
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
          <Company variant="v4" />
          {columns.map((column) => (
            <FooterColumn title={column.title} links={column.links} />
          ))}
          <AppDownloads />
        </div>
        <div
          className="container"
          style={{
            borderTop: "1px solid var(--gray-3)",
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SocialMediaList variant="v4" />
          <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
          <PaymentList variant="v4" />
        </div>
      </div>
    </Version4Styles>
  );
}

export default Version4;
