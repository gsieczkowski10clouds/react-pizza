import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { paths } from "../../routes";
import { formatRoute } from 'react-router-named-routes';

import SocialIcons from '../SocialIcons';

import { FaBars } from 'react-icons/fa';
import logo from '../../assets/images/logo.svg';
import styles from './topbar.module.scss';

function Topbar(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        if( isOpen ){
            setIsOpen(false);
            document.getElementsByTagName('body')[0].classList.remove('no-scroll');
        }else {
            setIsOpen(true);
            document.getElementsByTagName('body')[0].classList.add('no-scroll');
        }
    };

    return (
        <div className={styles.Topbar}>
            <nav className="navbar navbar-expand-md h-100">

                <Link className={['navbar-brand', styles.logo].join(' ')} to={formatRoute(paths.home)}><img src={logo} alt="React pizza"/></Link>

                <button className={['navbar-toggler', styles.hamburger].join(' ')} type="button" onClick={toggleNav}>
                    <FaBars className="navbar-toggler-icon"/>
                </button>

                <div className={['collapse', 'navbar-collapse', styles.menu, isOpen ? styles.show : ''].join(' ')}>
                    <ul className="navbar-nav mx-auto">
                        <li className={['nav-item', (props.location.pathname===paths.home ? styles.active : '')].join(' ')}>
                            <Link className="nav-link" to={formatRoute(paths.home)}>Home</Link>
                        </li>
                        <li className={['nav-item', (props.location.pathname===paths.about ? styles.active : '')].join(' ')}>
                            <Link className="nav-link" to={formatRoute(paths.about)}>About</Link>
                        </li>
                        <li className={['nav-item', (props.location.pathname===paths.menu ? styles.active : '')].join(' ')}>
                            <Link className="nav-link" to={formatRoute(paths.menu)}>Menu</Link>
                        </li>
                        <li className={['nav-item', (props.location.pathname===paths.contact ? styles.active : '')].join(' ')}>
                            <Link className="nav-link" to={formatRoute(paths.contact)}>Contact</Link>
                        </li>
                        {props.isAuth ? (
                            <li className={['nav-item', (props.location.pathname===paths.guarded ? styles.active : '')].join(' ')}>
                                <Link className="nav-link" to={formatRoute(paths.guarded)}>Guarded</Link>
                            </li>
                        ) : null}
                    </ul>
                    <ul className={['navbar-nav ml-md-auto', styles.social].join(' ')}>
                        <SocialIcons/>
                    </ul>
                </div>

            </nav>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: (state.auth.token !== null),
    }
};

export default connect(mapStateToProps)(withRouter(Topbar));