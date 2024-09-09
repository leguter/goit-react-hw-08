import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";
export const filterValue = (state) => state.filter.filterValue;
export const filteredContacts = createSelector(
  [selectContacts, filterValue],
  (contacts, filterValue) => {
    return contacts.filter((card) =>
      card.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
