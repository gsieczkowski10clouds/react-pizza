import React from 'react';

import Hero from '../components/Hero';
import aboutBg from "../assets/images/aboutBg.jpeg";
import SEO from "../components/SEO";

function About() {

    return (
        <div>
            <SEO title="About us"/>

            <Hero img={aboutBg} title="About us" subtitle="a little about us"/>
        </div>
    );
}

export default About;