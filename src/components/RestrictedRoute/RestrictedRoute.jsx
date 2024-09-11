import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthIsLogin } from "../../redux/auth/selectors";
export const RestrictedRoute = ({ component, redirectTo = "/contacts" }) => {
  const isLoggedIn = useSelector(selectAuthIsLogin);

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};
