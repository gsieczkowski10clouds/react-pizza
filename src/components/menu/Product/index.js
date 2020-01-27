import React from 'react';

import styles from './product.module.scss';

// temporary use hardcoded image to not exceed transfer limits.
import img from '../../../assets/images/menu/burger.jpeg';

function Product( {name, ingredients, price} ) {

    return (
        <div className={styles.product}>
            <div className={styles.img}><img src={img} alt={name}/></div>
            <div className={styles.description}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.info}>{ingredients}</p>
            </div>
            <div className={styles.price}>${price.toFixed(2)}</div>
        </div>
    );
}

export default Product;