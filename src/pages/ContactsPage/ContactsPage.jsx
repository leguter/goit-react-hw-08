import ContactList from '../../components/ContactList/ContactList'
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/contactsOps';
import { useDispatch } from 'react-redux';
const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList />
      <SearchBox />
    </div>
  );
}

export default ContactsPage;
