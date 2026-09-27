import { TiSocialFacebook } from "react-icons/ti";
import { SocialMediaListStyles } from "./styles";
import { FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";

function SocialMediaList({ variant }) {
  return (
    <SocialMediaListStyles variant={variant}>
      <span>
        <TiSocialFacebook style={{ width: "18px", height: "18px" }} />
      </span>
      <span>
        <FaTwitter style={{ width: "18px", height: "18px" }} />
      </span>
      <span>
        <FaPinterestP style={{ width: "18px", height: "18px" }} />
      </span>
      <span>
        <FaInstagram style={{ width: "18px", height: "18px" }} />
      </span>
    </SocialMediaListStyles>
  );
}

export default SocialMediaList;
