import React from 'react';

import Product from '../Product';

import styles from './productslist.module.scss';

import burger from '../../../assets/images/menu/burger.jpeg';

function ProductsList() {

    return (
        <div className="row my-3">
            <div className="col-12">
                <div className={styles.productsList}>
                    <Product key={1} img={burger} name={'zzz'} info={'lorem...'} price={25}/>
                    <Product key={2} img={burger} name={'zzz'} info={'lorem...'} price={25}/>
                    <Product key={3} img={burger} name={'zzz'} info={'lorem...'} price={25}/>
                    <Product key={4} img={burger} name={'zzz'} info={'lorem...'} price={25}/>
                    <Product key={5} img={burger} name={'zzz'} info={'lorem...'} price={25}/>
                </div>
            </div>
        </div>
    );
}

export default ProductsList;