import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactWrapper } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => (
  <ContactWrapper>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  </ContactWrapper>
);

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
