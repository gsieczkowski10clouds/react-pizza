import React from 'react';

import Hero from '../components/Hero';
import menuBg from "../assets/images/menuBg.jpeg";
import SEO from "../components/SEO";

function Menu() {

    return (
        <div>
            <SEO title="Menu"/>

            <Hero img={menuBg} title="Menu" subtitle="let's dig in"/>
        </div>
    );
}

export default Menu;