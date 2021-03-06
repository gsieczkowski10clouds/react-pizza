import React, { useEffect } from 'react';

import '../../assets/css/bootstrap.min.css';
import '../../assets/css/app.scss';

import SEO from '../../components/SEO';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';

function Layout({children}){

    useEffect( () => {
        // component did mount

        let scrollEventThrottle = false;

        const handleScroll = () => {
            if( !scrollEventThrottle ){
                window.requestAnimationFrame( () => {
                    if( window.scrollY > 0 ){
                        document.getElementsByTagName('body')[0].classList.add('scrolled');
                    }else{
                        document.getElementsByTagName('body')[0].classList.remove('scrolled');
                    }
                    scrollEventThrottle = false;
                })
            }
            scrollEventThrottle = true;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // component did unmount
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return(
        <>
            <SEO/>

            <Topbar/>

            <main>
                {children}
            </main>

            <Footer/>
        </>
    )
}

export default Layout;