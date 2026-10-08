import {
  BillingAddressCard,
  DashboardPageStyles,
  Frame,
  OrderTable,
  ProfileCard,
} from "./styles";
import { users } from "../../MockData/Users";
import AppTemplate from "../../components/AppTemplate";
import { path } from "../../Constants/Paths";
import environment from "../../environment";
import MyBreadcrumb from "../../components/common/MyBreadcrumb";
import AccountNavigation from "../../components/common/AccountNavigation";
import { Link } from "react-router-dom";
import { IoLogoHtml5 } from "react-icons/io";
import PriceAmount from "../../components/common/PriceAmount";

function DashboardPage() {
  const user = users[0];

  return (
    <AppTemplate
      pageTitle="Dashboard"
      pageDescription="Dashboard Meta Description"
      path={path.dashboard}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "Dashboard Meta Description",
      }}
    >
      <MyBreadcrumb />

      <DashboardPageStyles className="container">
        <AccountNavigation />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 4fr",
            gap: "24px",
          }}
        >
          <ProfileCard>
            {user.profileImage ? (
              <img src={user.profileImage} alt={user.firstName} />
            ) : (
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "999px",
                  backgroundColor: "var(--gray-2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    fontSize: "48px",
                    color: "var(--gray-5)",
                    fontWeight: "bold",
                  }}
                >
                  {user.firstName.charAt(0)}
                </span>
              </div>
            )}
            <h3>
              {user.firstName} {user.lastName}
            </h3>
            <span
              style={{
                font: "var(--body-small-400)",
                color: "var(--gray-5)",
                marginBottom: "8px",
              }}
            >
              {user.role}
            </span>
            <Link
              to={path.settings}
              style={{
                color: "var(--primary)",
                font: "var(--body-medium-500)",
              }}
            >
              Edit Profile
            </Link>
          </ProfileCard>
          <BillingAddressCard>
            <h5
              style={{
                font: "var(--body-small-400)",
                transform: "uppercase",
                color: "var(--gray-4)",
                letterSpacing: "1px",
                marginBottom: "8px",
              }}
            >
              BILLING ADDRESS
            </h5>
            <h4 style={{ marginBottom: "4px" }}>
              {user.billingAddress.firstName} {user.billingAddress.lastName}
            </h4>
            <p
              style={{
                font: "var(--body-small-400)",
                color: "var(--gray-6)",
                lineHeight: "1.5",
              }}
            >
              {user.billingAddress.street}, {user.billingAddress.city},{" "}
              {user.billingAddress.state}
              <br />
              {user.billingAddress.zipCode}
            </p>
            <span
              style={{
                font: "var(--body-medium-400)",
                color: "var(--gray-9)",
                marginBlockStart: "8px",
              }}
            >
              {user.email}
            </span>
            <p
              style={{ font: "var(--body-medium-400)", color: "var(--gray-9)" }}
            >
              {user.phone}
            </p>
            <Link
              to={path.settings}
              style={{
                color: "var(--primary)",
                font: "var(--body-medium-500)",
                marginTop: "8px",
              }}
            >
              Edit Address
            </Link>
          </BillingAddressCard>
          <Frame style={{ gridColumn: "span 2", paddingBlock: "24px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingInline: "24px",
                marginBottom: "16px",
              }}
            >
              <h3>Recent Order History</h3>
              <Link
                to={path.orderHistory}
                style={{
                  color: "var(--primary)",
                  font: "var(--body-medium-500)",
                  textDecoration: "none",
                }}
              >
                View All
              </Link>
            </div>

            <OrderTable>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {user.orderHistory.slice(0, 6).map((order) => (
                  <tr key={order.orderId}>
                    <td>{order.orderId}</td>
                    <td>{order.date}</td>
                    <td>
                      <PriceAmount size="small" price={order.total} /> (
                      {order.productCount} Products)
                    </td>
                    <td>{order.status}</td>
                    <td style={{ textAlign: "inline-end" }}>
                      <Link>View Details</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </OrderTable>
          </Frame>
        </div>
      </DashboardPageStyles>
    </AppTemplate>
  );
}

export default DashboardPage;
