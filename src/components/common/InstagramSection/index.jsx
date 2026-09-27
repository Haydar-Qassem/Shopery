import React from "react";
import { FaInstagram } from "react-icons/fa";
import {
  SectionContainer,
  Title,
  ImageGrid,
  ImageWrapper,
  StyledImage,
  Overlay,
  InstagramIcon,
} from "./styles";

import post1 from "../../../assets/images/InstaPosts/Post_1.png";
import post2 from "../../../assets/images/InstaPosts/Post_2.png";
import post3 from "../../../assets/images/InstaPosts/Post_3.png";
import post4 from "../../../assets/images/InstaPosts/Post_4.png";
// import post5 from "../../../assets/images/InstaPosts/Post_5.png";
import post6 from "../../../assets/images/InstaPosts/Post_6.png";
import post7 from "../../../assets/images/InstaPosts/Post_7.png";

const InstaImages = [post1, post2, post3, post4, post6, post7];

export default function InstagramSection({ images = InstaImages }) {
  return (
    <SectionContainer className="container">
      <Title>Follow us on Instagram</Title>

      <ImageGrid>
        {images.map((imgSrc, index) => (
          <ImageWrapper
            key={index}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImage src={imgSrc} alt={`Instagram post ${index + 1}`} />

            <Overlay>
              <InstagramIcon>
                <FaInstagram />
              </InstagramIcon>
            </Overlay>
          </ImageWrapper>
        ))}
      </ImageGrid>
    </SectionContainer>
  );
}
