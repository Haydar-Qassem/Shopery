import { HomePageStyles } from "./styles";
import AppTemplate from "../../components/AppTemplate";
import environment from "../../environment";
import ProductCard from "../../components/common/ProductCard";
import HomeHero from "./Home-Components/HomeHero";
import FeaturesItem from "./Home-Components/FeaturesItem";
import ViewAll from "../../components/ViewAll";
import CategoryCard from "../../components/common/CategoryCard";
import InteractiveProductCard from "../../components/common/InteractiveProductCard";
import BlogCard from "../../components/BlogCard";
import InstagramSection from "../../components/common/InstagramSection";
import TestimonialCard from "../../components/common/TestimonialCard";
import IconButton from "../../components/common/IconButton";

// Banners
import bannerimage from "../../assets/images/Banners/DiscountBanner.png";
import SecondBannerSection from "./Home-Components/SecondBannerSection";

// Constants and Mock Data
import { path } from "../../Constants/Paths";
import { categories } from "../../Constants/Categories";
import { products } from "../../MockData/Products";
import { features } from "../../Constants/Features";
import { mockBlogData } from "../../MockData/BlogData";
import { Temoignages } from "../../MockData/Temoignage";

function HomePage() {
  return (
    <AppTemplate
      pageTitle="Home Page"
      pageDescription="Home Meta Description"
      path={path.home}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "Home Meta Description",
      }}
    >
      <HomePageStyles>
        <div style={{ paddingBlockStart: "24px" }}>
          <section className="container">
            <HomeHero />
            <br />
            <div
              className="Features-Container"
              style={{
                backgroundColor: "var(--white)",
                padding: "40px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0px 0px 16px rgba(from var(--gray-4) r g b/ 0.1)",
              }}
            >
              {features.map((feature) => (
                <FeaturesItem key={feature.id} feature={feature} />
              ))}
            </div>
          </section>
          {/* Popular Categories Section */}
          <section className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2>Popular Categories</h2>
              <ViewAll href="/categories" />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gridTemplateRows: "repeat(2, 1fr)",
                gap: "24px",
              }}
            >
              {Object.values(categories).map((category) => (
                <CategoryCard key={category.id} rounded type={category.id} />
              ))}
            </div>
          </section>
          {/* Popular Products Section */}
          <section className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2>Popular Products</h2>
              <ViewAll href="/products" />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gridTemplateRows: "repeat(2, 1fr)",
              }}
            >
              {Object.values(products).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  variant="medium-sharp"
                />
              ))}
            </div>
          </section>
          {/* Second Banner Section */}
          <section className="container">
            <SecondBannerSection />
          </section>
        </div>

        <div>
          {/* Hot Deals Section */}
          <section className="container">
            {/* Section Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBlockEnd: "32px",
              }}
            >
              <h2 style={{ marginBlockEnd: "0px" }}>Hot Deals</h2>
              <ViewAll href="/deals" />
            </div>

            {/* Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gridAutoRows: "minmax(327px, auto)",
                // gap: "24px",
              }}
            >
              {products.map((product, index) => {
                const isRightEdge = (index + 1) % 5 === 0;
                const currentRow = Math.floor(index / 5) + 1;
                const isBottomEdge = currentRow === 2;

                return (
                  <InteractiveProductCard
                    key={product.id}
                    product={product}
                    isRightEdge={isRightEdge}
                    isBottomEdge={isBottomEdge}
                  />
                );
              })}
            </div>
          </section>
        </div>

        <div>
          {/* Banner Section */}
          <section
            className="container"
            style={{
              backgroundImage: `url(${bannerimage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "358px",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "60px",
                right: "51px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <span
                  style={{
                    font: "var(--body-medium-500)",
                    color: "var(--white)",
                    lineHeight: "1",
                  }}
                >
                  SUMMER SALE
                </span>
                <h3
                  style={{
                    font: "var(--heading-1-400)",
                    color: "var(--white)",
                  }}
                >
                  <span
                    style={{
                      font: "var(--heading-1-600)",
                      color: "var(--warning)",
                    }}
                  >
                    37%
                  </span>{" "}
                  OFF
                </h3>
              </div>
              <span
                style={{
                  font: "var(--body-medium-400)",
                  color: "var(--white)",
                }}
              >
                Free on all your order, Free Shipping and 30 days
                <br /> money-back guarantee
              </span>
              <IconButton variant="fill" size="large">
                Shop Now
              </IconButton>
            </div>
          </section>
          {/* Featured Producrs */}
          <section className="container">
            <div
              className="container"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2>Featured Products</h2>
              <ViewAll href="/products" />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gridAutoRows: "minmax(327px, auto)",
              }}
            >
              {products.map((product, index) => {
                if (index < 5) {
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      variant="medium-sharp"
                    />
                  );
                }
                return null;
              })}
            </div>
          </section>
          {/* Our latest news */}
          <section
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 style={{ font: "var(--heading-5-600)" }}>Latest News</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
            >
              <BlogCard data={mockBlogData[0]} />
              <BlogCard data={mockBlogData[1]} />
              <BlogCard data={mockBlogData[2]} />
            </div>
          </section>
        </div>

        <div>
          {/* Temoiniages */}
          <section
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "32px",
              // marginBlock: "60px",
              width: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2
                style={{ font: "var(--heading-5-600)", marginBlockEnd: "0px" }}
              >
                Client Testimonials
              </h2>
              <span>navigation arrows</span>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "24px",
              }}
            >
              <TestimonialCard data={Temoignages[0]} />
              <TestimonialCard data={Temoignages[1]} />
              <TestimonialCard data={Temoignages[2]} />
            </div>
          </section>
        </div>

        <div>
          <InstagramSection />
        </div>
      </HomePageStyles>
    </AppTemplate>
  );
}

export default HomePage;
