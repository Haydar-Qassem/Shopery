import Version1 from "./FooterSubProviders/Version1";
import Version1GH from "./FooterSubProviders/Version1GH";
import Version2 from "./FooterSubProviders/Version2";
import Version3 from "./FooterSubProviders/Version3";
import Version4 from "./FooterSubProviders/Version4";
import Version5 from "./FooterSubProviders/Version5";

function Footer({ footerType = "v1" }) {
  return (
    <>
      {footerType === "v1" && <Version1 />}
      {footerType === "v1-gray-half" && <Version1GH />}
      {footerType === "v2" && <Version2 />}
      {footerType === "v3" && <Version3 />}
      {footerType === "v4" && <Version4 />}
      {footerType === "v5" && <Version5 />}
    </>
  );
}

export default Footer;
