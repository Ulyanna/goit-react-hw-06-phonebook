
import { Filter } from './filter/Filter';
import {ContactForm} from './contactForm/ContactForm';
import { ContactsList } from './contactsList/ContactsList';

export const App = () => {

  return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactsList
        />
      </>
    );
  
}
