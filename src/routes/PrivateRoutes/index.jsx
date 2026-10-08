import Cookies from "js-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import environment from "../../environment";
import { path } from "../../Constants/Paths";

function PrivateRoutes() {
  const location = useLocation();

  const isAuthorized = Cookies.get(environment.TOKEN_KEY);

  // return isAuthorized ? (
  //   <Outlet />
  // ) : (
  //   <Navigate to={path.login} state={{ from: location }} replace />
  // );

  // the following is for testing private routes
  return true ? (
    <Outlet />
  ) : (
    <Navigate to="/account/login" state={{ from: location }} replace />
  );
}

export default PrivateRoutes;
