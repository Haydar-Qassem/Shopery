import { useLocation } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
import breadcrumb from "../../../assets/images/Breadcrumb.png";
import {
  BreadcrumbWrapper,
  BreadcrumbContainer,
  StyledLink,
  ActiveSpan,
} from "./styles";
import { Fragment } from "react/jsx-runtime";

export default function MyBreadcrumb({
  bgImage = breadcrumb,
  isErrorPage = false,
}) {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  const formatLabel = (string) => {
    return string.replace(/-/g, " ");
  };

  return (
    <BreadcrumbWrapper $bg={bgImage}>
      <BreadcrumbContainer className="container">
        <StyledLink to="/">
          <VscHome size={24} />
        </StyledLink>
        {isErrorPage ? (
          <>
            <IoIosArrowForward />
            <ActiveSpan>404 Error Page</ActiveSpan>
          </>
        ) : (
          pathnames.map((segment, index) => {
            const isLast = index === pathnames.length - 1;

            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

            return (
              <Fragment key={routeTo}>
                <IoIosArrowForward />

                {isLast ? (
                  <ActiveSpan>{formatLabel(segment)}</ActiveSpan>
                ) : (
                  <StyledLink to={routeTo}>{formatLabel(segment)}</StyledLink>
                )}
              </Fragment>
            );
          })
        )}{" "}
      </BreadcrumbContainer>
    </BreadcrumbWrapper>
  );
}
