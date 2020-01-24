import React from 'react';

import Hero from '../components/Hero';
import menuBg from "../assets/images/menuBg.jpeg";

function Menu() {

    return (
        <div>
            <Hero img={menuBg} title="Menu" subtitle="let's dig in"/>
        </div>
    );
}

export default Menu;