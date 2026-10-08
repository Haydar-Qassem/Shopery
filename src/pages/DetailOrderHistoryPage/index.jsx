import { Link, Navigate, useParams } from "react-router-dom";
import AppTemplate from "../../components/AppTemplate";
import AccountNavigation from "../../components/common/AccountNavigation";
import MyBreadcrumb from "../../components/common/MyBreadcrumb";
import { path } from "../../Constants/Paths";
import environment from "../../environment";
import {
  BillingandShipping,
  Content,
  DetailOrderHistoryPageStyles,
  Frame,
  Header,
  ProductTable,
  Total,
} from "./styles";
import { users } from "../../MockData/Users";
import { LuDot } from "react-icons/lu";
import PriceAmount from "../../components/common/PriceAmount";

function DetailOrderHistoryPage() {
  const { id } = useParams();

  const user = users[0];
  const order = user.orderHistory.find((o) => o.orderId === `#${id}`);

  if (!order) {
    return <Navigate to={path.orderHistory} replace />;
  }

  return (
    <AppTemplate
      pageTitle={`Order Details ${order.orderId}`}
      pageDescription="Order Details Meta Description"
      path={path.orderDetails}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "Order Details Meta Description",
      }}
    >
      <MyBreadcrumb />

      <DetailOrderHistoryPageStyles className="container">
        <AccountNavigation />
        <Frame>
          <Header>
            <div>
              <h2>Order Details</h2>
              <LuDot color="var(--gray-7)" />
              <span>{order.date}</span>
              <LuDot color="var(--gray-7)" />
              <span>{order.productCount} Products</span>
            </div>
            <Link to={path.orderHistory}>Back to List</Link>
          </Header>
          <Content>
            <div>
              <BillingandShipping>
                <h3>Billing Address</h3>
                <h3>Shipping Address</h3>
                <div className="border-right">
                  <p className="name">
                    {order.billingAddress.firstName}{" "}
                    {order.billingAddress.lastName}
                  </p>
                  <p className="address">
                    {order.billingAddress.street}, {order.billingAddress.city},{" "}
                    {order.billingAddress.state} <br />
                    {order.billingAddress.zipCode}
                  </p>
                </div>
                <div>
                  <p className="name">
                    {order.shippingAddress.firstName}{" "}
                    {order.shippingAddress.lastName}
                  </p>
                  <p className="address">
                    {order.shippingAddress.street}, {order.shippingAddress.city}
                    , {order.shippingAddress.state} <br />
                    {order.shippingAddress.zipCode}
                  </p>
                </div>
                <div className="border-right">
                  <div>
                    <div className="label">Email:</div>
                    <div className="value">{user.email}</div>
                  </div>
                  <div>
                    <div className="label">Phone:</div>
                    <div className="value">{user.phone}</div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="label">Email:</div>
                    <div className="value">{user.email}</div>
                  </div>
                  <div>
                    <div className="label">Phone:</div>
                    <div className="value">{user.phone}</div>
                  </div>
                </div>
              </BillingandShipping>
              <Total>
                <div>
                  <div>
                    <div className="label">Order ID:</div>
                    <div className="value">{order.orderId}</div>
                  </div>
                  <div>
                    <div className="label">Payment method:</div>
                    <div className="value">{order.paymentMethod}</div>
                  </div>
                </div>
                <div>
                  <div>
                    <span className="label">Subtotal:</span>
                    <PriceAmount price={order.subtotal} />
                  </div>
                  <div>
                    <span className="label">Discount:</span>
                    <span className="value">{order.discount * 100}%</span>
                  </div>
                  <div>
                    <span className="label">Shipping:</span>
                    <span className="value">{order.shipping}</span>
                  </div>
                  <p>
                    <span className="label">Total:</span>
                    <span className="value">${order.total}</span>
                  </p>
                </div>
              </Total>
            </div>
          </Content>

          <ProductTable>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="product-cell">
                      <img src={item.image} alt={item.name} />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td>
                    <PriceAmount price={item.price} size="small" />
                  </td>
                  <td>x{item.quantity}</td>
                  <td style={{ fontWeight: "500" }}>
                    <PriceAmount
                      price={item.price * item.quantity}
                      size="small"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>
        </Frame>
      </DetailOrderHistoryPageStyles>
    </AppTemplate>
  );
}

export default DetailOrderHistoryPage;
