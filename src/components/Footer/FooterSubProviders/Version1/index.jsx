import Company from "../../FooterComponents/Company";
import EmailInput from "../../FooterComponents/EmailInput";
import FooterColumn from "../../FooterComponents/FooterColumn";
import PaymentList from "../../FooterComponents/PaymentList";
import SocialMediaList from "../../FooterComponents/SocialMediaList";
import { Version1Styles } from "./styles";

function Version1() {
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
    {
      title: "Categories",
      links: [
        { label: "Fruit & Vegetables", url: "/" },
        { label: "Meat & Fish", url: "/" },
        { label: "Bread & Bakery", url: "/" },
        { label: "Beauty & Health", url: "/" },
      ],
    },
  ];
  return (
    <Version1Styles>
      <div style={{ backgroundColor: "var(--white)", padding: "40px 0" }}>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "23vw" }}>
            <h2 style={{ font: "var(--body-xxl-600)", color: "var(--gray-9)" }}>
              Subscribe to our Newsletter
            </h2>
            <p
              style={{ font: "var(--body-small-400)", color: "var(--gray-4)" }}
            >
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div style={{ display: "flex", gap: "40px" }}>
            <EmailInput variant="v1" />
            <SocialMediaList variant="v1" />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "var(--gray-9)",
          height: "368px",
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
          <Company variant="v1" />
          {columns.map((column) => (
            <FooterColumn title={column.title} links={column.links} />
          ))}
        </div>
        <div
          className="container"
          style={{
            borderTop: "1px solid var(--gray-5)",
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
          <PaymentList variant="v1" />
        </div>
      </div>
    </Version1Styles>
  );
}

export default Version1;
