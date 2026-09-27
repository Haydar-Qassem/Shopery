import { HomeHeroStyles } from "./styles";
import banner1 from "../../../../assets/images/Banners/Banner_1.png";
import banner2 from "../../../../assets/images/Banners/Banner_2.png";
import banner3 from "../../../../assets/images/Banners/Banner_3.png";
import Tag from "../../../../components/common/Tag";
import IconButton from "../../../../components/common/IconButton";
import { BsArrowRight } from "react-icons/bs";

function HomeHero() {
  return (
    <div
      // className="container"
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "24px",
        height: "600px",
      }}
    >
      <div
        style={{
          gridRow: "span 2",
          borderRadius: "10px",
          backgroundImage: `url(${banner1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "28px",
            // height: "100%",
            color: "var(--white)",
            // textAlign: "center",
            padding: "48px",
            width: "60%",
            position: "absolute",
            top: "20%",
            left: "5%",
            // transform: "translate(-50%, -50%)",
          }}
        >
          <h3
            style={{
              font: "var(--heading-3-400)",
              // width: "50%"
            }}
          >
            Fresh & Healthy Organic Food
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              borderInlineStart: "1px solid var(--white)",
              paddingInline: "12px",
            }}
          >
            <span
              style={{
                font: "var(--body-xl-500)",
              }}
            >
              Sale up to <Tag variant="new">30% OFF</Tag>
            </span>
            <span style={{ font: "var(--body-small-400)" }}>
              Free shipping on all your order.
            </span>
          </div>

          <IconButton
            variant="fill-white"
            size="large"
            // style={{
            //   backgroundColor: "var(--white)",
            //   color: "var(--primary)",
            // }}
          >
            Shop now
          </IconButton>
        </div>
      </div>
      <div
        style={{
          borderRadius: "10px",
          backgroundImage: `url(${banner2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "24px",
            // height: "100%",
            color: "var(--gray-9)",
            // textAlign: "center",
            // padding: "48px",
            width: "50%",
            position: "absolute",
            top: "32px",
            left: "32px",
            // transform: "translate(-50%, -50%)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <span style={{ font: "var(--body-small-500)" }}>SUMMER SALE</span>
            <h3 style={{ font: "var(--heading-5-600)" }}>75% OFF</h3>
            <span
              style={{
                font: "var(--body-small-400)",
                color: "var(--gray-6)",
              }}
            >
              Only Fruits & Vegetables
            </span>
          </div>
          <button
            style={{
              backgroundColor: "transparent",
              color: "var(--primary)",
              font: "var(--body-medium-600)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Shop now
            <BsArrowRight />
          </button>
        </div>
      </div>
      <div
        style={{
          borderRadius: "10px",
          backgroundImage: `url(${banner3})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            width: "80%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <span
              style={{
                font: "var(--body-small-500)",
                color: "var(--white)",
              }}
            >
              BEST DEAL
            </span>
            <h3
              style={{
                font: "var(--heading-5-600)",
                color: "var(--white)",
                textAlign: "center",
              }}
            >
              Special Products
              <br /> Deal of the Month
            </h3>
          </div>
          <button
            style={{
              backgroundColor: "transparent",
              color: "var(--primary)",
              font: "var(--body-medium-600)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Shop now
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
