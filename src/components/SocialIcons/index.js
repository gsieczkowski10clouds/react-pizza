import React from 'react';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './socialicons.module.scss';

function SocialIcons() {

    return (
        <>
            <li className={["nav-item", styles.socialIcon].join(' ')}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
            </li>
            <li className={["nav-item", styles.socialIcon].join(' ')}>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
            </li>
            <li className={["nav-item", styles.socialIcon].join(' ')}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
            </li>
        </>
    );
}

export default SocialIcons;