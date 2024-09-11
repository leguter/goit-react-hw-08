import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthIsLogin } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  const isLogin = useSelector(selectAuthIsLogin)
  const dispatch = useDispatch()
  const OnLogout = () => {
    dispatch(logout())
  }
  return (
    <header className={css.container}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        {isLogin === true ? (
          <div>
            <NavLink to="/contacts" className={buildLinkClass}>
              Contacts
            </NavLink>
            <button onClick={OnLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <NavLink to="/register" className={buildLinkClass}>
              Register
            </NavLink>
            <NavLink to="/login" className={buildLinkClass}>
              Login
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
