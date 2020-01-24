import React from 'react';

import Hero from '../components/Hero';

import homeBg from '../assets/images/homeBg.jpeg';

function Home() {

    return (
        <div>
            <Hero img={homeBg} title="React Pizza" subtitle="Długa 4/10 - Poznań" big/>
        </div>
    );
}

export default Home;