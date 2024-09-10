import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthIsLogin } from "../../redux/auth/selectors";
export const PrivateRoute = ({ component, redirectTo = "/contacts" }) => {
  const isLoggedIn = useSelector(selectAuthIsLogin);

  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
};