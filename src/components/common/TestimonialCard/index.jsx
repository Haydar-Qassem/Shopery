import { BsStarFill } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import {
  CardContainer,
  QuoteIconWrapper,
  QuoteText,
  Footer,
  Profile,
  Avatar,
  ProfileText,
  Name,
  Role,
} from "./styles";
import ProductRating from "../ProductRating";
import { RiDoubleQuotesR } from "react-icons/ri";

export default function TestimonialCard({ data }) {
  return (
    <CardContainer>
      <QuoteIconWrapper>
        <RiDoubleQuotesR />
      </QuoteIconWrapper>

      <QuoteText>{data.quote}</QuoteText>

      <Footer>
        <Profile>
          <Avatar src={data.image} alt={data.name} />
          <ProfileText>
            <Name>{data.name}</Name>
            <Role>{data.role}</Role>
          </ProfileText>
        </Profile>

        <ProductRating rating={data.rating} />
      </Footer>
    </CardContainer>
  );
}
