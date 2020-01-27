import React from 'react';
import LazyLoad from 'react-lazyload';

import styles from './gallery.module.scss';

import imgPlaceholder from '../../../../assets/images/blank_image.svg';
import img1 from '../../../../assets/images/gallery/pizza2.jpeg';
import img2 from '../../../../assets/images/gallery/pork.jpeg';
import img3 from '../../../../assets/images/gallery/steak2.jpeg';

function Gallery() {

    return (
        <section className={styles.gallery}>

            <div className={styles.item}>
                <LazyLoad placeholder={<img src={imgPlaceholder} alt="awesome pizza"/>}>
                    <img src={img1} alt="img"/>
                </LazyLoad>
                <p className={styles.info}>
                    awesome pizza
                </p>
            </div>

            <div className={styles.item}>
                <LazyLoad placeholder={<img src={imgPlaceholder} alt="awesome pork"/>}>
                    <img src={img2} alt="img"/>
                </LazyLoad>
                <p className={styles.info}>
                    awesome pork
                </p>
            </div>

            <div className={styles.item}>
                <LazyLoad placeholder={<img src={imgPlaceholder} alt="awesome steak"/>}>
                    <img src={img3} alt="img"/>
                </LazyLoad>
                <p className={styles.info}>
                    awesome steak
                </p>
            </div>

        </section>
    );
}

export default Gallery;