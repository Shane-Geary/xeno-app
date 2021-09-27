import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);
    
    const removeContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={removeContactHandler} />
        );
    })
    return (
        <div>
            {renderContactList}
        </div>
    );
};

export default ContactList;