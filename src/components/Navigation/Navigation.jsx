// import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectAuthIsLogin } from "../../redux/auth/selectors";
// import { logout } from "../../redux/auth/operations";
const Navigation = () => {
  // const buildLinkClass = ({ isActive }) => {
  //   return clsx(css.link, isActive && css.active);
  // };
  const isLogin = useSelector(selectAuthIsLogin)
  // const dispatch = useDispatch()
  // const OnLogout = () => {
  //   dispatch(logout())
  // }
  return (
    // <header className={css.container}>
    // <nav className={css.nav}>
    <div className={css.links}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLogin && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
    // </nav>
    // </header>
  );
};

export default Navigation;
