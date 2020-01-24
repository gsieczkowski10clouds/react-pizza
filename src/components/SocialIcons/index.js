import React from 'react';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './socialicons.module.scss';

function SocialIcons() {

    return (
        <>
            <li className={["nav-item", styles.socialIcon].join(' ')}>
                <a href="https://facebook.com" target="_blank"><FaFacebookF/></a>
            </li>
            <li className={["nav-item", styles.socialIcon].join(' ')}>
                <a href="https://twitter.com" target="_blank"><FaTwitter/></a>
            </li>
            <li className={["nav-item", styles.socialIcon].join(' ')}>
                <a href="https://instagram.com" target="_blank"><FaInstagram/></a>
            </li>
        </>
    );
}

export default SocialIcons;