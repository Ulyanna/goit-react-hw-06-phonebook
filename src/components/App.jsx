
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from "../redux/contactSlice"
import {getContact,getFilterWord} from "../redux/selector"

import { Filter } from './filter/Filter';
import {ContactForm} from './contactForm/ContactForm';
import { ContactsList } from './contactsList/ContactsList';

export const App = () => {
  	const dispatch = useDispatch();

	const contacts = useSelector(getContact);
	const filterWord = useSelector(getFilterWord);
	const addItem = contactObj => {
		const findContact = contacts.find(contact =>
			contact.name.toLowerCase().includes(contactObj.name.toLowerCase())
		);
		findContact
			? alert(`${contactObj.name} is already in contact`)
			: dispatch(addContact(contactObj));
	};

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

 


  return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addItem} />

        <h2>Contacts</h2>
        <Filter />
        <ContactsList
visibleContacts={isVisibleContacts()}
        />
      </>
    );
  
}
