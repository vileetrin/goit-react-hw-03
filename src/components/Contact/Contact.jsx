import css from "./Contact.module.css"
import { HiUser, HiPhone } from "react-icons/hi";

export default function Contact({ contacts: { id, name, number }, onDelete }) {
  return (
      <div className={css.contactWrapper}>
          <div>
            <p><HiUser /> {name}</p>
            <p><HiPhone /> {number}</p>
          </div>

          <button type="button" className={css.contactBtn} onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}