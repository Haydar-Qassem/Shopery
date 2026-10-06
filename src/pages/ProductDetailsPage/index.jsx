import ProductDetailsCard from "../../components/common/ProductDetailsCard";
import { ProductDetailsPageStyles, RelatedSection } from "./styles";
import { products } from "../../MockData/Products";
import MyBreadcrumb from "../../components/common/MyBreadcrumb";
import AppTemplate from "../../components/AppTemplate";
import { path } from "../../Constants/Paths";
import environment from "../../environment";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Tabs from "./Tabs";
import ProductCard from "../../components/common/ProductCard";

function ProductDetailsPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState(() => {
    return products.find((p) => p.id === parseInt(productId)) || null;
  });

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const relatedProducts = products.slice(0, 4);

  return (
    <AppTemplate
      pageTitle="Vegetables"
      pageDescription="Vegetables Meta Description"
      path={path.productDetails}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "Vegetables Meta Description",
      }}
    >
      <MyBreadcrumb />
      <ProductDetailsPageStyles className="container">
        <ProductDetailsCard product={product} />
        <Tabs product={product} />
        <RelatedSection>
          <h2>Related Products</h2>
          <div>
            {relatedProducts.map((relatedproduct) => (
              <ProductCard
                key={relatedproduct.id}
                product={relatedproduct}
                variant="big"
              />
            ))}
          </div>
        </RelatedSection>
      </ProductDetailsPageStyles>
    </AppTemplate>
  );
}

export default ProductDetailsPage;
