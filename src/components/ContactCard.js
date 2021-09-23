import React from 'react';

const ContactCard = () => {
    return (
        <div className="item">
            <div className="content">
                <div className="header">{contact.name}</div>
                <div>{contact.email}</div>
            </div>
        </div>
    );
}

export default ContactCard;