import "./App.css";
// import { fetchContacts } from "./redux/contacts/contactsOps";
import { useEffect, lazy, Suspense } from "react";
// import Navigation from "./components/Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { Route,Routes } from "react-router-dom";
import { selectError, selectIsLoading } from "./redux/contacts/selectors";
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const ContactsPage =   lazy(() => import("./pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
import Loader from './components/Loader/Loader'
import { apiRefreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute'
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import {Layout} from './components/Layout/Layout'
function App() {
   const dispatch = useDispatch();
   const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isRefreshing = useSelector(selectIsRefreshing)
useEffect(() => {
  dispatch(apiRefreshUser());
}, [dispatch]);
  if(isRefreshing) return <p>User is refreshing, please wait</p>
   return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Suspense fallback={<Loader />}>
        {/* <Navigation /> */}
        {isLoading && !error && <b>Request in progress...</b>}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegisterPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactsPage />} />}
          />
        </Routes>
           </Suspense>
           </Layout>
  );
}

export default App;
