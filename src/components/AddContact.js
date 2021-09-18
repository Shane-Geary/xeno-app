import React from 'react';

class AddContact extends React.Component {
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <br />
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <br />
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <br />
                    <button className="ui button green">Create</button>
                </form>
            </div>
        );
    } 
}

export default AddContact;