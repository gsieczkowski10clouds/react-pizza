import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Button from '../components/UI/Button';
import QuickInfo from '../components/sections/home/QuickInfo';
import Gallery from "../components/sections/home/Gallery";

import { paths } from "../routes";

import homeBg from '../assets/images/homeBg.jpeg';
import FeaturedMenu from "../components/sections/home/FeaturedMenu";

function Home() {

    return (
        <div>

            <Hero img={homeBg} title="React Pizza" subtitle="Długa 4/10 - Poznań" big>
                <Link to={paths.menu}>
                    <Button theme="light" className="mt-3">menu</Button>
                </Link>
            </Hero>

            <QuickInfo/>

            <Gallery/>

            <FeaturedMenu/>

        </div>
    );
}

export default Home;