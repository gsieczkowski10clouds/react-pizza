import React from 'react';

import Hero from '../components/Hero';
import aboutBg from "../assets/images/aboutBg.jpeg";

function About() {

    return (
        <div>
            <Hero img={aboutBg} title="About us" subtitle="a little about us"/>
        </div>
    );
}

export default About;