import React from "react";
import { useSelector } from "react-redux";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import { CSSTransition } from "react-transition-group";
import { Container } from "./AppStyled";
import Loader from "./loader/Loader";
import Notification from "./notification/Notification";
import { getContacts, getError, getLoading } from "../redux/selectors/phonebookSelectors";

const App = () => {
  const contacts = useSelector(getContacts);
  const isLoadingContacts = useSelector(getLoading);
  const error = useSelector(getError);
  
  return (
    <Container>
      <CSSTransition
        in={true}
        appear={true}
        classNames="phonebook-title"
        timeout={500}
        unmountOnExit
      >
        <h1>Phonebook</h1>
      </CSSTransition>

      <ContactForm />

      <CSSTransition
        in={contacts.length > 1}
        classNames="filter"
        timeout={250}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>

      {isLoadingContacts && <Loader />}
      <ContactList />
      {!contacts.length && !isLoadingContacts && (
        <p>There are no contacts in current list.</p>
      )}
      {error && <Notification message={error.message} />}
    </Container>
  );
};

export default App;
