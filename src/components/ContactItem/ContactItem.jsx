import PropTypes from 'prop-types';
import { Item, NameItem, Button } from './ContactItem.styled';

export function ContactItem({ name, number, id, deleteContact }) {
  return (
    <Item>
      <NameItem>
        <p>{name}</p>
        <p>{number}</p>
      </NameItem>
      <Button type="button" onClick={deleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
