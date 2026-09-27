import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";

import { FooterInstagramStyles } from "./styles";

// هاد مشان import كلشي صور بقلب الفولدر
// in case i added images to the folder later
const importAll = (r) => r.keys().map(r);
const instagramImages = importAll(
  require.context(
    "../../../../assets/images/Hall of Fame",
    false,
    /\.(png|jpe?g|svg)$/,
  ),
);

function FooterInstagram() {
  return (
    <FooterInstagramStyles>
      <h3>Instagram</h3>

      <Swiper
        modules={[Autoplay, Grid]}
        spaceBetween={10}
        slidesPerView={4}
        grid={{
          rows: 2,
          fill: "row",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{ width: "100%" }}
      >
        {instagramImages.map((src, index) => (
          <SwiperSlide key={index}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                width: "100%",
                aspectRatio: "1/1",
                overflow: "hidden",
              }}
            >
              <img
                src={src.default || src}
                alt={`Instagram post ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </FooterInstagramStyles>
  );
}

export default FooterInstagram;
