import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ArrowButton } from "./styles";
import TeamCard from "../TeamCard";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import TeamCard from "../TeamCard";

function Carousel({ teamMembers }) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <div style={{ position: "relative" }}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={4}
        navigation={{ prevEl, nextEl }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        style={{ width: "100%", maxWidth: "1320px" }}
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id}>
            <TeamCard member={member} />
          </SwiperSlide>
        ))}
      </Swiper>

      <ArrowButton $direction="left" ref={(node) => setPrevEl(node)}>
        <BsArrowLeft />
      </ArrowButton>

      <ArrowButton $direction="right" ref={(node) => setNextEl(node)}>
        <BsArrowRight />
      </ArrowButton>
    </div>
  );
}

export default Carousel;
