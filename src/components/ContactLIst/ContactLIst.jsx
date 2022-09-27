import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';
import { List } from './ContactLIst.styled.jsx';

const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
