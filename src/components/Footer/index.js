import React from 'react';

import styles from './footer.module.scss';

function Footer() {

    return (
        <footer className={styles.Footer}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center py-5">
                        Copyright &copy; {(new Date()).getFullYear().toString()}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;