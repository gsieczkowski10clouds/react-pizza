import React from 'react';

import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';

function Layout(props){
    return(
        <>
            <Topbar/>

            <main>
                {props.children}
            </main>

            <Footer/>
        </>
    )
}

export default Layout;