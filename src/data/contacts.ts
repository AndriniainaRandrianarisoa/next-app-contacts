import { Contact } from '../types/contact';

export let contacts: Contact[] = [
  {
    id: 1,
    name: "Jean Dupont",
    email: "jean@example.com",
    phone: "06 12 34 56 78"
  },
  {
    id: 2,
    name: "Marie Martin",
    email: "marie@example.com",
    phone: "06 98 76 54 32"
  }
];

export const addContact = (contact: Omit<Contact, 'id'>): Contact => {
  const newContact = {
    ...contact,
    id: Math.max(...contacts.map(c => c.id), 0) + 1
  };
  contacts.push(newContact);
  return newContact;
};

export const getContactById = (id: number): Contact | undefined => {
  return contacts.find(contact => contact.id === id);
};
