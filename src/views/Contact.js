import React from 'react';

import Hero from '../components/Hero';
import contactBg from "../assets/images/contactBg.jpeg";

function Contact() {

    return (
        <div>
            <Hero img={contactBg} title="Contact us" subtitle="let's get in touch"/>
        </div>
    );
}

export default Contact;