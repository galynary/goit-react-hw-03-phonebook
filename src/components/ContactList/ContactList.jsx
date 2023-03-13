import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactWrapper } from './ContactList.styled';

export function ContactList({ contacts }) {
  return (
    <ContactWrapper>
      <ul>
        {contacts.map(({ id, contact, deleteContact }) => (
          <ContactItem
            key={id}
            contact={contact}
            deleteContact={() => deleteContact}
          />
        ))}
      </ul>
    </ContactWrapper>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
