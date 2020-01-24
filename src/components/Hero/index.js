import React from 'react';

import styles from './hero.module.scss';
import homeBg from '../../assets/images/homeBg.jpeg';

Hero.defaultProps = {
    img: homeBg,
};

function Hero(props) {

    const style = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${props.img}')`,
    };

    return (
        <header className={[styles.header, props.big ? styles.big : ''].join(' ')} style={style}>
            {props.title ? <h1>{props.title}</h1> : ''}
            {props.subtitle ? <h2>{props.subtitle}</h2> : ''}
            {props.children}
        </header>
    );
}

export default Hero;