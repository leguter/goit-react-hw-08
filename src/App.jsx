import "./App.css";
// import { fetchContacts } from "./redux/contacts/contactsOps";
import { useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { Route,Routes } from "react-router-dom";
import { selectError, selectIsLoading } from "./redux/contacts/selectors";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { apiRefreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import HomePage from "./pages/HomePage/HomePage";
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute'
// import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
function App() {
   const dispatch = useDispatch();
   const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isRefreshing = useSelector(selectIsRefreshing)
useEffect(() => {
  dispatch(apiRefreshUser());
}, [dispatch]);
  if(isRefreshing) return <p>User is refreshing, please wait</p>
  return (
    <div>
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
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
