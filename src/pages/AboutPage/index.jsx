import { AboutPageStyles } from "./styles";
import AppTemplate from "../../components/AppTemplate";
import environment from "../../environment";
import breadcrumb from "../../assets/images/Breadcrumb.png";
import aboutimg1 from "../../assets/images/About/About_1.png";
import aboutimg2 from "../../assets/images/About/About_2.png";
import aboutimg3 from "../../assets/images/About/About_3.png";
import bgabout2 from "../../assets/images/About/BGAbout_2.png";
import { path } from "../../Constants/Paths";
import IconButton from "../../components/common/IconButton";
import { Temoignages } from "../../Constants/Temoignage";
import { ArrowButton } from "./styles";
import {
  FaLeaf,
  FaHeadset,
  FaStar,
  FaShieldAlt,
  FaTruck,
  FaBox,
} from "react-icons/fa";
import { BsCheckCircleFill, BsArrowRight, BsArrowLeft } from "react-icons/bs";
import {
  SectionGrid,
  TextContent,
  Title,
  Description,
  ImageWrapper,
  StyledImage,
  FeatureItem,
  IconCircle,
  FeatureText,
  BulletList,
  BulletItem,
  CheckIcon,
} from "./styles";
import TestimonialCard from "../../components/common/TestimonialCard";
import { members } from "../../Constants/TeamMembers";
import Carousel from "../../components/common/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { VscHome } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
import MyBreadcrumb from "../../components/common/MyBreadcrumb";

const aboutsections = [
  {
    title: "100% Trusted Organic Food Store",
    imageSrc: aboutimg1,
    imageAlt: "Farmer",
  },
  {
    title: "100% Trusted Organic Food Store",
    imageSrc: aboutimg2,
    imageAlt: "Younger Farmer",
  },
  {
    title: "We Delivered, You Enjoy Your Order.",
    imageSrc: aboutimg3,
    imageAlt: "The youngest Farmer",
  },
];

function AboutPage() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <AppTemplate
      pageTitle="About"
      pageDescription="About Meta Description"
      path={path.about}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "About Meta Description",
      }}
    >
      <AboutPageStyles>
        {/* old breadcrumb */}
        {/* <div
          style={{
            backgroundImage: `url(${breadcrumb})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "120px",
            padding: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            className="container"
            style={{
              color: "var(--gray-5)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              font: "var(--body-medium-400)",
            }}
          >
            <a href="/">
              <VscHome size={24} />
            </a>
            <IoIosArrowForward />
            <span style={{ color: "var(--primary)" }}>About</span>
          </div>
        </div> */}

        <MyBreadcrumb bgImage={breadcrumb} />

        {/* first */}
        <div>
          <SectionGrid className="container">
            <TextContent>
              <Title>{aboutsections[0].title}</Title>
              <Description>
                Morbi porttitor ligula id varius sagittis. Proin dui nisi,
                laoreet ut tempor ac, cursus vitae erat. Cras quis ultricies
                elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at
                accumsan. Donec a eros non massa vulputate ornare. Vivamus
                ornare commodo ante, et commodo felis congue vitae.
              </Description>
            </TextContent>
            <ImageWrapper>
              <StyledImage
                src={aboutsections[0].imageSrc}
                alt={aboutsections[0].imageAlt}
              />
            </ImageWrapper>
          </SectionGrid>
        </div>

        {/* second */}
        <div
          style={{
            backgroundImage: `url(${bgabout2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <SectionGrid
            className="container"
            // style={{ position: "relative", zIndex: 1, padding: "80px 0" }}
          >
            <div></div>
            <TextContent>
              <Title>{aboutsections[1].title}</Title>
              <Description>
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget.
              </Description>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "24px 16px",
                }}
              >
                <FeatureItem>
                  <IconCircle>
                    <FaLeaf />
                  </IconCircle>
                  <FeatureText>100% Organic food</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <IconCircle>
                    <FaHeadset />
                  </IconCircle>
                  <FeatureText>Great Support 24/7</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <IconCircle>
                    <FaStar />
                  </IconCircle>
                  <FeatureText>Customer Feedback</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <IconCircle>
                    <FaShieldAlt />
                  </IconCircle>
                  <FeatureText>100% Secure Payment</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <IconCircle>
                    <FaTruck />
                  </IconCircle>
                  <FeatureText>Free Shipping</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <IconCircle>
                    <FaBox />
                  </IconCircle>
                  <FeatureText>100% Organic Food</FeatureText>
                </FeatureItem>
              </div>
            </TextContent>
          </SectionGrid>
        </div>

        {/* third */}
        <div>
          <SectionGrid className="container">
            <TextContent>
              <Title>{aboutsections[2].title}</Title>
              <Description>
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget.
              </Description>

              <BulletList>
                <BulletItem>
                  <CheckIcon>
                    <BsCheckCircleFill />
                  </CheckIcon>
                  Sed in metus pellentesque.
                </BulletItem>
                <BulletItem>
                  <CheckIcon>
                    <BsCheckCircleFill />
                  </CheckIcon>
                  Fusce et ex commodo, aliquam erat aliquet.
                </BulletItem>
                <BulletItem>
                  <CheckIcon>
                    <BsCheckCircleFill />
                  </CheckIcon>
                  Macenas tincidunt aliquet velit, scelerisque congue.
                </BulletItem>
              </BulletList>

              <IconButton
                variant="fill"
                size="large"
                style={{ width: "fit-content" }}
              >
                Shop Now
              </IconButton>
            </TextContent>
            <ImageWrapper>
              <StyledImage
                src={aboutsections[2].imageSrc}
                alt={aboutsections[2].imageAlt}
              />
            </ImageWrapper>
          </SectionGrid>
        </div>

        <div>
          <section className="container">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginBlockEnd: "32px",
              }}
            >
              <h2
                style={{
                  font: "var(--heading-2-600)",
                  color: "var(--gray-9)",
                }}
              >
                Our Awesome Team
              </h2>
              <span
                style={{
                  font: "var(--body-medium-400)",
                  color: "var(--gray-6)",
                  textAlign: "center",
                }}
              >
                Pellentesque a ante vulputate leo porttitor luctus sed eget
                eros. Nulla et rhoncus <br /> neque. Duis non diam eget est
                luctus tincidunt a a mi.
              </span>
            </div>
            <Carousel teamMembers={members} />
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
              <span style={{ display: "flex", gap: "12px" }}>
                <ArrowButton ref={(node) => setPrevEl(node)}>
                  <BsArrowLeft />
                </ArrowButton>
                <ArrowButton ref={(node) => setNextEl(node)}>
                  <BsArrowRight />
                </ArrowButton>
              </span>
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={3}
              navigation={{ prevEl, nextEl }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              style={{ width: "100%" }}
            >
              {Temoignages.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialCard data={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>
      </AboutPageStyles>
    </AppTemplate>
  );
}

export default AboutPage;
