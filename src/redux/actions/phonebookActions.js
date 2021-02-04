import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction("phonebook/addContactRequest");
export const addContactSuccess = createAction("phonebook/addContactSuccess");
export const addContactError = createAction("phonebook/addContactError");

export const fetchContactsRequest = createAction("phonebook/fetchRequest");
export const fetchContactsSuccess = createAction("phonebook/fetchSuccess");
export const fetchContactsError = createAction("phonebook/fetchError");

export const removeContactRequest = createAction("phonebook/removeRequest");
export const removeContactSuccess = createAction("phonebook/removeSuccess");
export const removeContactError = createAction("phonebook/removeError");

export const setFilter = createAction("phonebook/setFilter");
