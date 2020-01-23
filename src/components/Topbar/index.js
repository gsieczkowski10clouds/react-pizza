import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { paths } from "../../routes";
import { formatRoute } from 'react-router-named-routes';

import { FaBars } from 'react-icons/fa';
import logo from '../../assets/images/logo.svg';
import styles from './topbar.module.scss';

function Topbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className={styles.Topbar}>
            <nav className="navbar navbar-expand-md h-100">

                <Link className={['navbar-brand', styles.logo].join(' ')} to={formatRoute(paths.home)}><img src={logo} alt="React pizza"/></Link>

                <button className={['navbar-toggler', styles.hamburger].join(' ')} type="button" onClick={toggleNav}>
                    <FaBars className="navbar-toggler-icon"/>
                </button>

                <div className={['collapse', 'navbar-collapse', styles.menu, isOpen ? styles.show : ''].join(' ')}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={formatRoute(paths.home)}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={formatRoute(paths.guarded)}>Guarded</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    );
}

export default Topbar;