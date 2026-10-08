import AppTemplate from "../../components/AppTemplate";
import AccountNavigation from "../../components/common/AccountNavigation";
import MyBreadcrumb from "../../components/common/MyBreadcrumb";
import { path } from "../../Constants/Paths";
import environment from "../../environment";
import { Frame, OrderHistoryPageStyles, OrderTable } from "./styles";
import { users } from "../../MockData/Users";
import PriceAmount from "../../components/common/PriceAmount";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "../../components/common/Pagination";

function OrderHistoryPage() {
  const user = users[0];
  const allOrders = user.orderHistory;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = allOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPages = Math.ceil(user.orderHistory.length / itemsPerPage);

  return (
    <AppTemplate
      pageTitle="Order History"
      pageDescription="Order History Meta Description"
      path={path.orderHistory}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "Order History Meta Description",
      }}
    >
      <MyBreadcrumb />

      <OrderHistoryPageStyles className="container">
        <AccountNavigation />
        <Frame>
          <h2>Order History</h2>

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
              {currentOrders.map((order) => (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td>{order.date}</td>
                  <td>
                    <PriceAmount size="small" price={order.total} /> (
                    {order.productCount} Products)
                  </td>
                  <td>{order.status}</td>
                  <td style={{ textAlign: "end" }}>
                    <Link
                      to={path.orderDetails.replace(
                        ":id",
                        order.orderId.replace("#", ""),
                      )}
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </OrderTable>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "24px",
            }}
          >
            <Pagination
              totalPages={totalPages}
              // currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </Frame>
      </OrderHistoryPageStyles>
    </AppTemplate>
  );
}

export default OrderHistoryPage;
