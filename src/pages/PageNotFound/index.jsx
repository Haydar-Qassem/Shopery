import { PageNotFoundStyles } from "./styles";
import pagenotfoundimage from "../../assets/images/page-not-found-image.png";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { path } from "../../Constants/Paths";
import environment from "../../environment";
import AppTemplate from "../../components/AppTemplate";
import MyBreadcrumb from "../../components/common/MyBreadcrumb";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <AppTemplate
      pageTitle="Page Not Found"
      pageDescription="Page Not Found"
      // path={path.}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "Page Not Found Meta Description",
      }}
    >
      <MyBreadcrumb isErrorPage />

      <PageNotFoundStyles className="container">
        <img src={pagenotfoundimage} alt="Page Not Found Image" />
        <h2>Oops! page not found</h2>
        <p>
          Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
          Maecenas sagittis tortor at metus mollis
        </p>
        <Button size="medium" onClick={() => navigate(path.home)}>
          Back To Home
        </Button>
      </PageNotFoundStyles>
    </AppTemplate>
  );
}

export default PageNotFound;
