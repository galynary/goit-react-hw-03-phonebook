import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Message } from 'components/Message/Message';
import { Wrapper, Title, ContactTitle } from './PhoneBook.styled';

export class PhoneBook extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }, numberId) => {
    console.log({ name, number }); // data
    const addContact = {
      id: numberId,
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [addContact, ...prevState.contacts],
    }));
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contactId),
    }));
  };

  findContact = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };

  render() {
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm handleSubmit={this.addContact}></ContactForm>

        <ContactTitle>Contacts</ContactTitle>
        {this.state.contacts.length !== 0 && (
          <Filter value={this.state.filter} onChange={this.findContact} />
        )}
        {this.state.contacts.length > 0 ? (
          <ContactList
            contacts={this.filterContacts()}
            deleteContact={this.deleteContact}
          />
        ) : (
          <Message message="There are no contacts yet." />
        )}
      </Wrapper>
    );
  }
}
