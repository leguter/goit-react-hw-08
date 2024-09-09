import "./App.css";
import { fetchContacts } from "./redux/contacts/contactsOps";
import { useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { Route,Routes } from "react-router-dom";
import { selectError, selectIsLoading } from "./redux/contacts/selectors";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
function App() {
   const dispatch = useDispatch();
   const isLoading = useSelector(selectIsLoading);
   const error = useSelector(selectError);

   useEffect(() => {
     dispatch(fetchContacts());
   }, [dispatch]);
  return (
    <div>
      {isLoading && !error && <b>Request in progress...</b>}
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacts" element={<ContactsPage/>} />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
