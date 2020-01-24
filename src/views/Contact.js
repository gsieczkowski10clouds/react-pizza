import React from 'react';

import Hero from '../components/Hero';
import contactBg from "../assets/images/contactBg.jpeg";
import SEO from "../components/SEO";

function Contact() {

    return (
        <div>
            <SEO title="Contact us"/>

            <Hero img={contactBg} title="Contact us" subtitle="let's get in touch"/>
        </div>
    );
}

export default Contact;