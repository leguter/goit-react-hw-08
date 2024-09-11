import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { filteredContacts } from "../../redux/filters/selectors";
const ContactList = () => {
  const dispatch = useDispatch();
  function deleteCard(item) {
    const action = deleteContact(item.id);
    dispatch(action);
  }
  const filtedContacts = useSelector(filteredContacts);
  return (
    <ul className={css.list}>
      {filtedContacts.map((card) => (
        <li key={card.id}>
          <Contact
            number={card.number}
            name={card.name}
            deleteCard={() => deleteCard(card)}
          />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
