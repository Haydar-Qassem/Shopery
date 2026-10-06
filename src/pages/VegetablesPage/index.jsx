import {
  Filter,
  PriceLabel,
  Results,
  SliderContainer,
  Title,
  Top,
  VegetablesPageStyles,
} from "./styles";
import ProductQuickView from "../../components/common/ProductQuickView";
import { useState } from "react";
import { products } from "../../MockData/Products";
import ProductCard from "../../components/common/ProductCard";
import AppTemplate from "../../components/AppTemplate";
import { path } from "../../Constants/Paths";
import environment from "../../environment";
import MyBreadcrumb from "../../components/common/MyBreadcrumb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FormControl from "../../components/Forms/FormControl";
import { FIELD_TYPE } from "../../Constants/fieldTypes";
import ProductRating from "../../components/common/ProductRating";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Button from "../../components/common/Button";
import HorizontalCard from "../../components/common/HorizontalCard";
import Pagination from "../../components/common/Pagination";
import { LuSettings2 } from "react-icons/lu";
import { Form, useNavigate } from "react-router-dom";
import { Formik } from "formik";

const ratings = [
  { value: 5, label: "5.0" },
  { value: 4, label: "4.0 & up" },
  { value: 3, label: "3.0 & up" },
  { value: 2, label: "2.0 & up" },
  { value: 1, label: "1.0 & up" },
];

const Tags = [
  "Healthy",
  "Low fat",
  "Vegeterian",
  "Kid foods",
  "Vitamins",
  "Bread",
  "Meat",
  "Snacks",
  "Tiffin",
  "Lunch",
  "Dinner",
  "Breakfast",
  "Fruit",
];

const sortOptions = [
  { value: "latest", label: "Latest" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "rating", label: "Average Rating" },
];

function VegetablesPage() {
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isRatingOpen, setIsRatingOpen] = useState(true);
  const [isPopularOpen, setIsPopularOpen] = useState(true);
  const [isSalesOpen, setIsSalesOpen] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // <ScrollToTop />;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [priceRange, setPriceRange] = useState([50, 1500]);

  const [activeTags, setActiveTags] = useState(["Low fat"]);

  const toggleTag = (clickedTag) => {
    setActiveTags((prevTags) =>
      prevTags.includes(clickedTag)
        ? prevTags.filter((tag) => tag !== clickedTag)
        : [...prevTags, clickedTag],
    );
  };

  return (
    <AppTemplate
      pageTitle="Vegetables"
      pageDescription="Vegetables Meta Description"
      path={path.vegetables}
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
      <VegetablesPageStyles className="container">
        <Top>
          <Button
            variant="fill-gray"
            $isActive={true}
            size="big"
            style={{
              width: "fit-content",
              padding: "14px 32px",
              display: "flex",
              gap: "12px",
              font: "var(--body-small-600)",
            }}
          >
            Filter <LuSettings2 />
          </Button>
          <Formik
            initialValues={{ sortBy: "latest" }}
            onSubmit={(values) => {
              console.log("Sorting products by:", values.sortBy);
              // Add your logic here to re-sort the 'products' array
            }}
          >
            {({ handleChange, submitForm }) => (
              <Form>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      font: "var(--body-small-400)",
                      color: "var(--gray-5)",
                    }}
                  >
                    Sort by:
                  </span>
                  <FormControl
                    type={FIELD_TYPE.select}
                    name="sortBy"
                    options={sortOptions}
                    // style={{ color: "var(--gray-5)" }}
                  />
                </div>
              </Form>
            )}
          </Formik>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "8px",
              font: "var(--body-medium-400)",
              color: "var(--gray-6)",
            }}
          >
            <span
              style={{ font: "var(--body-medium-600)", color: "var(--gray-9)" }}
            >
              {products.length}
            </span>
            <span>results found</span>
          </div>
        </Top>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr",
            gap: "24px",
            // marginBottom: "24px",
          }}
        >
          <Filter>
            <div>
              <Title>
                <h3>All Categories</h3>
                {isAllCategoriesOpen && (
                  <IoIosArrowUp onClick={() => setIsAllCategoriesOpen(false)} />
                )}
                {!isAllCategoriesOpen && (
                  <IoIosArrowDown
                    onClick={() => setIsAllCategoriesOpen(true)}
                  />
                )}
              </Title>
              {isAllCategoriesOpen && (
                <ul>
                  <li>Fresh Fruit</li>
                  <li>Vegetables</li>
                  <li>Cooking</li>
                  <li>Snacks</li>
                  <li>Beverages</li>
                  <li>Beauty & health</li>
                  <li>Bread & Bakery</li>
                </ul>
              )}
            </div>
            <div>
              <Title>
                <h3>Price</h3>
                {isPriceOpen && (
                  <IoIosArrowUp onClick={() => setIsPriceOpen(false)} />
                )}
                {!isPriceOpen && (
                  <IoIosArrowDown onClick={() => setIsPriceOpen(true)} />
                )}
              </Title>

              {isPriceOpen && (
                <div>
                  <SliderContainer>
                    <Slider
                      range
                      min={0}
                      max={2000}
                      defaultValue={priceRange}
                      onChange={(value) => setPriceRange(value)}
                    />
                  </SliderContainer>
                  <PriceLabel>
                    Price: <strong>{priceRange[0]}</strong> -{" "}
                    <strong>{priceRange[1]}</strong>
                  </PriceLabel>
                </div>
              )}
            </div>
            <div>
              <Title>
                <h3>Rating</h3>
                {isRatingOpen && (
                  <IoIosArrowUp onClick={() => setIsRatingOpen(false)} />
                )}
                {!isRatingOpen && (
                  <IoIosArrowDown onClick={() => setIsRatingOpen(true)} />
                )}
              </Title>
              {isRatingOpen && (
                <ul>
                  <input
                    type="checkbox"
                    name="5"
                    style={{ display: "inline-block" }}
                  />
                  <ProductRating price={5} />
                </ul>
              )}
            </div>
            <div>
              <Title>
                <h3>Popular Tags</h3>
                {isPopularOpen && (
                  <IoIosArrowUp onClick={() => setIsPopularOpen(false)} />
                )}
                {!isPopularOpen && (
                  <IoIosArrowDown onClick={() => setIsPopularOpen(true)} />
                )}
              </Title>
              {isPopularOpen && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {" "}
                  {Tags.map((tag) => (
                    <Button
                      key={tag}
                      variant="fill-gray"
                      style={{
                        padding: "6px 16px",
                      }}
                      className="btn"
                      $isActive={activeTags.includes(tag)}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              )}
            </div>
            <div>
              <Title>
                <h3>Sale Products</h3>
                {isSalesOpen && (
                  <IoIosArrowUp onClick={() => setIsSalesOpen(false)} />
                )}
                {!isSalesOpen && (
                  <IoIosArrowDown onClick={() => setIsSalesOpen(true)} />
                )}
              </Title>
              {isSalesOpen && (
                <ul>
                  {products
                    .filter((product) => product.oldPrice !== null)
                    .map((product) => (
                      <li>
                        <HorizontalCard
                          size="small"
                          product={product}
                          variant="small"
                          onQuickView={(product) => setSelectedProduct(product)}
                        />
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </Filter>

          <Results>
            {products.map((product) => {
              const productUrl = path.productDetails.replace(
                ":productId",
                product.id,
              );

              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  variant="big"
                  onQuickView={() => navigate(productUrl)}
                  onClick={(product) => setSelectedProduct(product)}
                />
              );
            })}
            <ProductQuickView
              product={selectedProduct}
              isOpen={Boolean(selectedProduct)}
              onClose={() => setSelectedProduct(null)}
            />
            <div
              style={{
                gridColumn: "1 / -1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gridColumnStart: 1,
                marginTop: "24px",
              }}
            >
              <Pagination
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </Results>
        </div>
      </VegetablesPageStyles>
    </AppTemplate>
  );
}

export default VegetablesPage;
