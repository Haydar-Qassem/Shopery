import { useNavigate } from "react-router-dom";
import AppTemplate from "../../components/AppTemplate";
import AccountNavigation from "../../components/common/AccountNavigation";
import MyBreadcrumb from "../../components/common/MyBreadcrumb";
import { path } from "../../Constants/Paths";
import environment from "../../environment";
import { Card, LogoutStyles } from "./styles";
import Button from "../../components/common/Button";
import { logout } from "../../store/auth/authSlice";
import { useDispatch } from "react-redux";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // i should also clear tokens here
    console.log("User logged out");
    dispatch(logout());
    navigate(path.home);
  };

  const handleCancel = () => {
    navigate(path.dashboard);
  };

  return (
    <AppTemplate
      pageTitle={`Log-out`}
      pageDescription="Log-out Meta Description"
      path={path.logout}
      headerType="main"
      footerType="v1-gray-half"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "App Name",
        url: environment.siteUrl,
        description: "Log-out Meta Description",
      }}
    >
      <MyBreadcrumb />

      <LogoutStyles className="container">
        <AccountNavigation />

        <div className="content-wrapper">
          <Card>
            <h2>Sign Out</h2>
            <p>Are you sure you want to sign out of your account?</p>

            <div>
              <Button variant="fill-gray" size="medium" onClick={handleCancel}>
                Cancel
              </Button>

              <Button variant="fill" size="medium" onClick={handleLogout}>
                Log Out
              </Button>
            </div>
          </Card>
        </div>
      </LogoutStyles>
    </AppTemplate>
  );
}

export default Logout;
