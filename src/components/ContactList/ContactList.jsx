import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ filteredContacts, onDelete }) {
  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(filteredContact => (
        <li key={filteredContact.id} className={css.contactListItem}>
              <Contact contacts={filteredContact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
