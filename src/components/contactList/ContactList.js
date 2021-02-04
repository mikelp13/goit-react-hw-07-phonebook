import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactListItem from "./contactListItem/ContactListItem";
import { setFilter } from "../../redux/actions/phonebookActions";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Wrapper } from "./ContactListStyled";
import { removeContact } from "../../redux/operations/phonebookOperations";
import { getVisibleContacts } from "../../redux/selectors/phonebookSelectors";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (e) => {
    const { id } = e.target.dataset;
    dispatch(removeContact(id));
    dispatch(setFilter(""));
  };
  return (
    <Wrapper>
      <TransitionGroup component="ul">
        {contacts.map((contact) => (
          <CSSTransition
            key={contact.id}
            timeout={250}
            classNames="ContactList-item"
          >
            <ContactListItem
              contact={contact}
              onDeleteContact={handleDeleteContact}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Wrapper>
  );
};

export default ContactList;
