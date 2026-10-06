import {
  Filter,
  PriceLabel,
  Results,
  SliderContainer,
  Title,
  Top,
  BlogPageStyles,
  Gallery,
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
import { mockBlogData } from "../../MockData/BlogData";
import BlogCard from "../../components/BlogCard";
import HorizontalBlogCard from "../../components/common/HorizontalBlogCard";
import img1 from "../../assets/images/Gallery/img1.png";
import img2 from "../../assets/images/Gallery/img2.png";
import img3 from "../../assets/images/Gallery/img3.png";
import img4 from "../../assets/images/Gallery/img4.png";
import img5 from "../../assets/images/Gallery/img5.png";
import img6 from "../../assets/images/Gallery/img6.png";
import img7 from "../../assets/images/Gallery/img7.png";
import img8 from "../../assets/images/Gallery/img8.png";

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

function BlogPage() {
  const navigate = useNavigate();

  const [isTopCategoriesOpen, setIsTopCategoriesOpen] = useState(true);
  const [isPopularOpen, setIsPopularOpen] = useState(true);
  const [isGalleryOpen, setIsGalleryOpen] = useState(true);
  const [isRecentlyAddedOpen, setIsRecentlyAddedOpen] = useState(true);

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
      pageTitle="Blog"
      pageDescription="Blog Meta Description"
      path={path.blog}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "Blog Meta Description",
      }}
    >
      <MyBreadcrumb />
      <BlogPageStyles className="container">
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
            gridTemplateColumns: "1fr 2fr",
            gap: "24px",
            // marginBottom: "24px",
          }}
        >
          <Filter>
            <div>
              <Title>
                <h3>Top Categories</h3>
                {isTopCategoriesOpen && (
                  <IoIosArrowUp onClick={() => setIsTopCategoriesOpen(false)} />
                )}
                {!isTopCategoriesOpen && (
                  <IoIosArrowDown
                    onClick={() => setIsTopCategoriesOpen(true)}
                  />
                )}
              </Title>
              {isTopCategoriesOpen && (
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
                <h3>Our Gallery</h3>
                {isGalleryOpen && (
                  <IoIosArrowUp onClick={() => setIsGalleryOpen(false)} />
                )}
                {!isGalleryOpen && (
                  <IoIosArrowDown onClick={() => setIsGalleryOpen(true)} />
                )}
              </Title>
              {isGalleryOpen && (
                <Gallery>
                  <img src={img1} alt="Gallery 1" />
                  <img src={img2} alt="Gallery 2" />
                  <img src={img3} alt="Gallery 3" />
                  <img src={img4} alt="Gallery 4" />
                  <img src={img5} alt="Gallery 5" />
                  <img src={img6} alt="Gallery 6" />
                  <img src={img7} alt="Gallery 7" />
                  <img src={img8} alt="Gallery 8" />
                </Gallery>
              )}
            </div>

            <div>
              <Title>
                <h3>Recently Added</h3>
                {isRecentlyAddedOpen && (
                  <IoIosArrowUp onClick={() => setIsRecentlyAddedOpen(false)} />
                )}
                {!isRecentlyAddedOpen && (
                  <IoIosArrowDown
                    onClick={() => setIsRecentlyAddedOpen(true)}
                  />
                )}
              </Title>
              {isRecentlyAddedOpen && (
                <ul>
                  {mockBlogData
                    .filter((blog) => blog.date.year === "2026")
                    .map((blog) => (
                      <li>
                        <HorizontalBlogCard data={blog} />
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </Filter>

          <Results>
            {mockBlogData.map((data) => {
              const blogUrl = path.blogDetails.replace(":id", data.id);

              return (
                <BlogCard
                  key={data.id}
                  data={data}
                  onClick={() => navigate(blogUrl)}
                />
              );
            })}
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
      </BlogPageStyles>
    </AppTemplate>
  );
}

export default BlogPage;
