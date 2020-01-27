import React from 'react';

import styles from './product.module.scss';

function Product( {img, name, info, price} ) {

    return (
        <div className={styles.product}>
            <div className={styles.img}><img src={img} alt={name}/></div>
            <div className={styles.description}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.info}>{info}</p>
            </div>
            <div className={styles.price}>${price.toFixed(2)}</div>
        </div>
    );
}

export default Product;