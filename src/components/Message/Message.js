import propTypes from 'prop-types';
import { MessageWraper } from './Message.styled';
export function Message({ text }) {
  return (
    <MessageWraper>
      <p message="There are no contacts yet."></p>
    </MessageWraper>
  );
}
Message.propTypes = { text: propTypes.string.isRequired };
