import { PiEnvelopeOpenLight } from "react-icons/pi";
import Company from "../../FooterComponents/Company";
import EmailInput from "../../FooterComponents/EmailInput";
import FooterColumn from "../../FooterComponents/FooterColumn";
import PaymentList from "../../FooterComponents/PaymentList";
import SocialMediaList from "../../FooterComponents/SocialMediaList";
import { FirstSection, SecondSection, ThirdSection } from "./styles";
import AppDownloads from "../../FooterComponents/AppDownloads";

function Version2() {
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
    <>
      <FirstSection className="container">
        <div style={{ display: "flex", gap: "8px" }}>
          <PiEnvelopeOpenLight
            style={{ width: "56px", height: "56px", color: "var(--primary)" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h2 style={{ font: "var(--body-xxl-600)", color: "var(--white)" }}>
              Subscribe to our Newsletter
            </h2>
            <p
              style={{
                font: "var(--body-small-400)",
                color: "var(--gray-6)",
                display: "inline-block",
              }}
            >
              Pellentesque eu nibh eget mauris congue mattis matti.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "40px" }}>
          <EmailInput variant="v2" />
          <SocialMediaList variant="v2" />
        </div>
      </FirstSection>
      <SecondSection className="container">
        <Company variant="v2" />
        {columns.map((column) => (
          <FooterColumn title={column.title} links={column.links} />
        ))}
        <AppDownloads theme="light" />
      </SecondSection>
      <ThirdSection className="container">
        <p>Ecobazar eCommerce &copy; 2021. All Rights Reserved</p>
        <PaymentList variant="v2" />
      </ThirdSection>
    </>
  );
}

export default Version2;
