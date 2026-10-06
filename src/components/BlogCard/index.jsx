import { useState } from "react";
import { BsTag, BsPerson, BsChat, BsArrowRight } from "react-icons/bs";
import {
  BlogCardStyles,
  ContentWrapper,
  ImageWrapper,
  MetaItem,
  MetaRow,
} from "./styles";

export default function BlogCard({ data, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <BlogCardStyles
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <ImageWrapper>
        <img src={data.image} alt="Blog thumbnail" />

        <div className="dateBadge">
          <span className="dateDay">{data.date.day}</span>
          <span className="dateMonth">{data.date.month}</span>
        </div>
      </ImageWrapper>

      <ContentWrapper>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <MetaRow>
            <MetaItem>
              <BsTag />
              <span style={{ color: "var(--gray-7)" }}>{data.category}</span>
            </MetaItem>
            <MetaItem>
              <BsPerson />
              <span style={{ color: "var(--gray-7)" }}>
                <span style={{ color: "var(--gray-3)" }}>By</span> {data.author}
              </span>
            </MetaItem>
            <MetaItem>
              <BsChat />
              <span style={{ color: "var(--gray-6)" }}>
                {data.comments} Comments
              </span>
            </MetaItem>
          </MetaRow>

          <h3>{data.title}</h3>
        </div>
        <a href={data.link}>
          Read More
          <BsArrowRight />
        </a>
      </ContentWrapper>
    </BlogCardStyles>
  );
}
