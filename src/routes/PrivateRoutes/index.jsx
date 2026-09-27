import Cookies from "js-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import environment from "../../environment";

function PrivateRoutes() {
  const location = useLocation();

  const isAuthorized = Cookies.get(environment.TOKEN_KEY);

  return isAuthorized ? (
    <Outlet />
  ) : (
    <Navigate to="/account/login" state={{ from: location }} replace />
  );
}

export default PrivateRoutes;
