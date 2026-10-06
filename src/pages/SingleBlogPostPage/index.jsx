import {
  CommentsSection,
  Content,
  Filter,
  Gallery,
  MetaItem,
  MetaRow,
  SingleBlogPostPageStyles,
  Title,
} from "./styles";
import { mockBlogData } from "../../MockData/BlogData";
import { Form, useParams } from "react-router-dom";
import { MainContent } from "./styles";
import { FaUser, FaCalendar, FaComment } from "react-icons/fa";
import { path } from "../../Constants/Paths";
import AppTemplate from "../../components/AppTemplate";
import MyBreadcrumb from "../../components/common/MyBreadcrumb";
import environment from "../../environment";
import Button from "../../components/common/Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsTag, BsPerson, BsChat } from "react-icons/bs";

import { useState } from "react";
import HorizontalBlogCard from "../../components/common/HorizontalBlogCard";
import img1 from "../../assets/images/Gallery/img1.png";
import img2 from "../../assets/images/Gallery/img2.png";
import img3 from "../../assets/images/Gallery/img3.png";
import img4 from "../../assets/images/Gallery/img4.png";
import img5 from "../../assets/images/Gallery/img5.png";
import img6 from "../../assets/images/Gallery/img6.png";
import img7 from "../../assets/images/Gallery/img7.png";
import img8 from "../../assets/images/Gallery/img8.png";
import banner from "../../assets/images/Banners/Banner_7.png";
import SocialMediaList from "../../components/Footer/FooterComponents/SocialMediaList";
import { LuDot } from "react-icons/lu";
import FormControl from "../../components/Forms/FormControl";
import { Formik, FormikProvider, useFormik } from "formik";
import { commentSchema } from "../../Validation/CommentSchema";
import { FIELD_TYPE } from "../../Constants/fieldTypes";
import BlogPostComment from "../../components/common/BlogPostComment";

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

function SingleBlogPostPage() {
  const { id } = useParams();

  const post = mockBlogData.find((post) => post.id === parseInt(id));

  const [isTopCategoriesOpen, setIsTopCategoriesOpen] = useState(true);
  const [isPopularOpen, setIsPopularOpen] = useState(true);
  const [isGalleryOpen, setIsGalleryOpen] = useState(true);
  const [isRecentlyAddedOpen, setIsRecentlyAddedOpen] = useState(true);

  const [activeTags, setActiveTags] = useState(["Low fat"]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comment: "",
      saveInfo: false,
    },
    validationSchema: commentSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Comment submitted:", values);
      resetForm();
    },
  });

  const toggleTag = (clickedTag) => {
    setActiveTags((prevTags) =>
      prevTags.includes(clickedTag)
        ? prevTags.filter((tag) => tag !== clickedTag)
        : [...prevTags, clickedTag],
    );
  };

  if (!post) {
    return <h2>Blog post not found</h2>;
  }

  return (
    <AppTemplate
      pageTitle="Blog Post"
      pageDescription="Blog Post Meta Description"
      path={path.blogDetails.replace(":id", id)}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "Blog Post Meta Description",
      }}
    >
      <MyBreadcrumb />

      <SingleBlogPostPageStyles className="container">
        <MainContent>
          <img src={post.image} alt={post.title} className="hero-image" />
          <MetaRow>
            <MetaItem>
              <BsTag color="var(--primary)" />
              <span style={{ color: "var(--gray-7)" }}>{post.category}</span>
            </MetaItem>
            <MetaItem>
              <BsPerson color="var(--primary)" />
              <span style={{ color: "var(--gray-7)" }}>
                <span style={{ color: "var(--gray-3)" }}>By</span> {post.author}
              </span>
            </MetaItem>
            <MetaItem>
              <BsChat color="var(--primary)" />
              <span style={{ color: "var(--gray-6)" }}>
                {post.comments} Comments
              </span>
            </MetaItem>
          </MetaRow>

          <h2 style={{ font: "var(--heading-5-400)", fontWeight: "500" }}>
            {post.title}
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBlockStart: "32px",
              paddingBlockEnd: "24px",
              borderBottom: "1px solid var(--gray-1)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "var(--gray-1)",
                  borderRadius: "999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--gray-5)",
                }}
              >
                {post.authorProfileImage ? (
                  <img
                    src={post.authorProfileImage}
                    alt="Author profile"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "999px",
                    }}
                  />
                ) : (
                  <FaUser size={20} />
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    font: "var(--body-medium-500)",
                    color: "var(--gray-9)",
                  }}
                >
                  {post.author}
                </span>
                <span
                  style={{
                    font: "var(--body-small-400)",
                    color: "var(--gray-5)",
                  }}
                >
                  {post.date.month} {post.date.day}, {post.date.year} <LuDot />{" "}
                  {post.estimatedTimeToRead}
                </span>
              </div>
            </div>
            <SocialMediaList />
          </div>

          <Content>
            {post.contentBlocks.map((block, index) => {
              if (block.type === "heading") {
                return <h3 key={index}>{block.content}</h3>;
              }
              if (block.type === "paragraph") {
                return <p key={index}>{block.content}</p>;
              }
              if (block.type === "image-grid") {
                return (
                  <div
                    key={index}
                    style={{
                      display: "grid",
                      gridTemplateColumns: `repeat(${block.images.length}, 1fr)`,
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    {block.images.map((image, imgIndex) => (
                      <img
                        src={image}
                        alt={`Blog content ${imgIndex + 1}`}
                        key={imgIndex}
                        style={{ width: "100%", borderRadius: "8px" }}
                      />
                    ))}
                  </div>
                );
              }

              return null;
            })}
          </Content>

          <img
            src={banner}
            alt="Banner"
            style={{ width: "100%", borderRadius: "8px" }}
          />

          <h2 style={{ font: "var(--body-xxl-500)" }}>Leave a Comment</h2>

          <FormikProvider value={formik}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              <FormControl
                label="Full Name"
                type={FIELD_TYPE.text}
                placeholder="Enter your full name"
                name="name"
                style={{ width: "100%" }}
              />
              <FormControl
                label="Email"
                type={FIELD_TYPE.email}
                placeholder="Enter your email"
                name="email"
              />
              <FormControl
                label="Message"
                type={FIELD_TYPE.textarea}
                placeholder="Write your comment here..."
                name="comment"
                span={2}
              />
              <FormControl
                label="Save my name and email in this browser for the next time I comment."
                type={FIELD_TYPE.checkbox}
                name="saveInfo"
                span={2}
              />
              <Button
                variant="fill"
                style={{ marginBlockStart: "16px", width: "fit-content" }}
              >
                Post Comment
              </Button>
            </div>
          </FormikProvider>

          <h2 style={{ font: "var(--body-xxl-500)" }}>Comments</h2>
          <CommentsSection>
            <div className="comments-section">
              {post?.commentsData.length === 0 ? (
                <p
                  style={{
                    font: "var(--body-medium-400)",
                    color: "var(--gray-5)",
                  }}
                >
                  No comments yet. Be the first to comment!
                </p>
              ) : (
                post?.commentsData.map((comment) => (
                  <BlogPostComment key={comment.id} comment={comment} />
                ))
              )}
            </div>
            <Button variant="border" onClick={() => {}}>
              Load More
            </Button>
          </CommentsSection>
        </MainContent>

        <Filter>
          <div>
            <Title>
              <h3>Top Categories</h3>
              {isTopCategoriesOpen && (
                <IoIosArrowUp onClick={() => setIsTopCategoriesOpen(false)} />
              )}
              {!isTopCategoriesOpen && (
                <IoIosArrowDown onClick={() => setIsTopCategoriesOpen(true)} />
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
                <IoIosArrowDown onClick={() => setIsRecentlyAddedOpen(true)} />
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
      </SingleBlogPostPageStyles>
    </AppTemplate>
  );
}

export default SingleBlogPostPage;
