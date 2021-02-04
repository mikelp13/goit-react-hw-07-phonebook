import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addContact, fetchContacts} from "../../redux/operations/phonebookOperations";

import Notification from "../notification/Notification";
import { Form, Input, Button } from "./ContactFormStyled";
import { CSSTransition } from "react-transition-group";
import { getContacts } from "../../redux/selectors/phonebookSelectors";

const initialState = {
  name: "",
  number: "",
  alert: false,
};

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [state, setState] = useState({ ...initialState });

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = state;

    if (!name || !number) {
      return setState((prevState) => ({
        ...prevState,
        alert: true,
        alertMessage: "Please enter some contact information.",
      }));
    }

    contacts.some((cont) => cont.name.toLowerCase() === name.toLowerCase())
      ? setState((prevState) => ({
          ...prevState,
          alert: true,
          alertMessage: `${name} is already in contacts!`,
        }))
      : dispatch(addContact({ name, number }));

    setState((prevState) => ({ ...prevState, name: "", number: "" }));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter your name"
            onChange={handleChange}
          ></Input>
        </label>
        <label>
          Number
          <Input
            type="tel"
            name="number"
            value={state.number}
            placeholder="123-45-678"
            onChange={handleChange}
          ></Input>
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
      <CSSTransition
        in={state.alert}
        classNames="Notification"
        onEntered={() =>
          setState((prevState) => ({ ...prevState, alert: false }))
        }
        timeout={3000}
        unmountOnExit
      >
        <Notification message={state.alertMessage} />
      </CSSTransition>
    </>
  );
};

export default ContactForm;
