import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  removeContactError,
  removeContactRequest,
  removeContactSuccess,
  setFilter,
} from "../actions/phonebookActions";


const items = createReducer([], {
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [fetchContactsSuccess]: (_, action) => [...action.payload],
  [removeContactSuccess]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});

const filter = createReducer("", {
  [setFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});


const error = createReducer(null, {
  [addContactError]: (_, action) => action.payload,
  [addContactSuccess]: () => null,

  [fetchContactsError]: (_, action) => action.payload,
  [fetchContactsSuccess]: () => null,

  [removeContactError]: (_, action) => action.payload,
  [removeContactSuccess]: () => null,
})

const phonebookReducer = combineReducers({
  items,
  filter,
  loading,
  error,
});

export default phonebookReducer;
