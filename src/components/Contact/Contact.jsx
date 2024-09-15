import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.contact}>
      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.number}>{number}</p>
      </div>
      <button className={styles.deleteButton} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;



