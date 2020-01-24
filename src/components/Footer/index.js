import React from 'react';

import SocialIcons from "../SocialIcons";

import styles from './footer.module.scss';

function Footer() {

    return (
        <footer className={styles.Footer}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center py-5 d-flex justify-content-center align-items-center">
                        <div>Copyright &copy; {(new Date()).getFullYear().toString()}</div>
                        <ul className={styles.social}>
                            <SocialIcons/>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;