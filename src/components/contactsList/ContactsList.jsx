import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContact } from "../../redux/contactSlice"
import {getContact,getFilterWord} from "../../redux/selector"
import { ListItem, Name, Number, DeleteButton } from './ContactsList.styled';

const ContactItem = ({ contact}) => {
  	const dispatch = useDispatch();
  const { name, number, id } = contact;
  return (
    <ListItem>
      <Name>{name}</Name>
      <Number>{number}</Number>

      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </ListItem>
  );
};
export const ContactsList = () => {
  	const contacts = useSelector(getContact);
  const filterWord = useSelector(getFilterWord);
  
	const isVisibleContacts = () => {
		if (filterWord) {
			const normalizeFilter = filterWord.toLowerCase();

			if (contacts.length !== 0) {
				return contacts.filter(contact =>
					contact.name.toLowerCase().includes(normalizeFilter)
				);
			}
		}
		return contacts;
	};
const visibleContacts = isVisibleContacts()
  return (
    <ul>
      
      {visibleContacts && visibleContacts.map(contact => (
        <ContactItem
          contact={contact}
          key={contact.id}
        />
      ))}
    </ul>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
