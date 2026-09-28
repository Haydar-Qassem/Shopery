import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import {
  CardContainer,
  ImageContainer,
  Overlay,
  SocialIcon,
  CardFooter,
  Name,
  Role,
} from "./styles";

const TeamCard = ({ member }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <img
          src={member.image}
          alt={member.name}
          styel={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        <Overlay>
          <SocialIcon href={member.social.facebook} target="_blank">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href={member.social.twitter} target="_blank">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href={member.social.pinterest} target="_blank">
            <FaPinterestP />
          </SocialIcon>
          <SocialIcon href={member.social.instagram} target="_blank">
            <FaInstagram />
          </SocialIcon>
        </Overlay>
      </ImageContainer>

      <CardFooter>
        <Name>{member.name}</Name>
        <Role>{member.role}</Role>
      </CardFooter>
    </CardContainer>
  );
};

export default TeamCard;
