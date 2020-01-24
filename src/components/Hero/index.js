import React from 'react';

import styles from './hero.module.scss';
import homeBg from '../../assets/images/homeBg.jpeg';

Hero.defaultProps = {
    img: homeBg,
};

function Hero({img, big, title, subtitle, children}) {

    const style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${img}')`,
    };

    return (
        <header className={[styles.header, big ? styles.big : ''].join(' ')} style={style}>
            {title ? <h1>{title}</h1> : ''}
            {subtitle ? <h2>{subtitle}</h2> : ''}
            {children}
        </header>
    );
}

export default Hero;