import AppTemplate from "../../components/AppTemplate";
import MyBreadcrumb from "../../components/common/MyBreadcrumb";
import WishlistProduct from "../../components/common/WishlistProduct";
import { path } from "../../Constants/Paths";
import environment from "../../environment";
import { WishlistPageStyles } from "./styles";
import { wishlistProducts } from "../../MockData/WishlistProducts";
import WishlistTable from "../../components/common/WishlistTable";

function WishlistPage() {
  return (
    <AppTemplate
      pageTitle="Wishlist"
      pageDescription="Wishlist Meta Description"
      path={path.wishlist}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "Wishlist Meta Description",
      }}
    >
      <MyBreadcrumb />
      <WishlistPageStyles className="container">
        <h2>My Wishlist</h2>
        <WishlistTable products={wishlistProducts} />
      </WishlistPageStyles>
    </AppTemplate>
  );
}

export default WishlistPage;
