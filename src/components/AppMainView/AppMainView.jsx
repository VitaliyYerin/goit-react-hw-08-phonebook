import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  LoaderContainer,
  Title,
  TitleContacts,
  TitlePhonebook,
} from './AppMainView.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactLIst/ContactLIst';
import Filter from 'components/Filter';
import { FadeLoader } from 'react-spinners';
import { useContacts } from 'hooks';
import { contactsOperations } from 'redux/contacts';

const AppMainView = () => {
  const dispatch = useDispatch();
  const { contacts, filter, loader, setFilter } = useContacts();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const handleFilterInput = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterContacts = () => {
    if (contacts.length !== 0 && typeof contacts !== 'string') {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
    return [];
  };

  const filteredContacts = filterContacts();

  return (
    <Container>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />

      <Title>Contacts</Title>
      <div>
        <Filter value={filter} onChange={handleFilterInput} />
        <TitleContacts>Total contacts: {filteredContacts.length}</TitleContacts>
      </div>
      <LoaderContainer>
        {loader ? (
          <FadeLoader color="rgba(77, 52, 220, 1)" />
        ) : (
          <ContactList contacts={filteredContacts} />
        )}
      </LoaderContainer>
    </Container>
  );
};

export default AppMainView;
