import React from 'react';

import SocialIcons from "../SocialIcons";

import styles from './footer.module.scss';
import logo from '../../assets/images/logo.svg';

function Footer() {

    return (
        <footer className={styles.Footer}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center py-4 d-flex flex-column justify-content-between align-items-center">
                        <div className={styles.logo}><img src={logo} alt="React Pizza"/></div>
                        <ul className={styles.social}>
                            <SocialIcons/>
                        </ul>
                        <div>Copyright &copy; {(new Date()).getFullYear().toString()}</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;