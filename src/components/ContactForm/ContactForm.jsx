import { useState } from 'react';
import { useId } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Label,
  Button,
  InputName,
  InputNumber,
} from './ContactForm.styled';
import { useContacts } from 'hooks';
import parsePhoneNumber from 'libphonenumber-js';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = useId();
  const numberId = useId();
  const { contacts, addLoader, addContact } = useContacts();

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleFormatPhoneNumber = () => {
    const phoneNumber = parsePhoneNumber(`+${number}`);
    return phoneNumber.getURI();
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.find(user => user.name.toLowerCase() === name.toLowerCase())) {
      toast.error(`This contact: '${name}' is already in phonebook`, {
        duration: 2000,
        position: 'top-center',
      });
      resetForm();
      return;
    }

    addContact({ name, number: handleFormatPhoneNumber() });
    toast.success('Contact is added successfully!', {
      duration: 2000,
      position: 'top-center',
    });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameId}>
        Name
        <InputName
          id={nameId}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          placeholder="  full name"
        />
      </Label>

      <Label htmlFor={numberId}>
        Number
        <InputNumber
          id={numberId}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          placeholder="  phone number xxx-xx-xx"
        />
      </Label>

      <Button disabled={addLoader}>
        {' '}
        {addLoader ? 'Adding...' : 'Add contact'}
      </Button>
    </Form>
  );
};

ContactForm.propTypes = {
  dispatch: PropTypes.func,
};

export default ContactForm;
