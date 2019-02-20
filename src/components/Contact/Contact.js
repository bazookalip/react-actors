import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (

            <header className="Contact">

                <h2>Contact</h2>
                <p>Phone: 1-800-WE-REACT</p>
                <input placeholder="First Name"/>
                <input placeholder="Last Name" />
                <input placeholder="Best Impression" />
                <button>Join</button>
                <p>Email: info@ReactActors.com</p>

            </header>

        );
    }
}

export default Contact;