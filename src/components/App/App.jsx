import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(() => {
  const savedContacts = localStorage.getItem("contacts");

  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }

  return [];
});

  const [value, setValue] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(value.toLowerCase())
  );

  const addContact = newContact => {
    setContacts(allContats => {
      return [...allContats, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(allContacts => {
      return allContacts.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <div className={css.phonebookWrapper}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={value} onFilter={setValue} />
      <ContactList
        filteredContacts={filteredContacts}
        onDelete={deleteContact}
      />
    </div>
  );
};

export default App;
