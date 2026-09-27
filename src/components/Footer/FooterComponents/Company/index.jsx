import Logo from "../../../common/Logo";
import ContactCTA from "../ContactCTA";
import SocialMediaList from "../SocialMediaList";
import { CompanyStyles } from "./styles";

function Company({ variant }) {
  return (
    <CompanyStyles variant={variant}>
      {variant === "v1" && <Logo theme="light" />}
      {variant === "v2" && <Logo theme="dark" />}
      {variant === "v3" && <h3>About Shopery</h3>}
      {variant === "v4" && <Logo theme="light" />}
      {variant === "v5" && <h3>About Shopery</h3>}

      {variant === "v4" && (
        <p>
          Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
          dui, eget bibendum magn.
        </p>
      )}
      {variant !== "v4" && (
        <p>
          Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
          dui, eget bibendum magna congue nec.
        </p>
      )}

      {variant === "v1" && <ContactCTA theme="light" />}
      {variant === "v2" && <ContactCTA theme="dark" />}
      {variant === "v3" && <ContactCTA theme="light" />}
      {variant === "v4" && <SocialMediaList variant="v4" />}
      {variant === "v5" && <ContactCTA theme="light" />}
    </CompanyStyles>
  );
}

export default Company;
