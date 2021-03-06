import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Product from '../Product';

import * as actions from '../../../store/actions';

import styles from './productslist.module.scss';

function ProductsList( { featured, products, loading, getProducts }) {

    useEffect( () => {
        getProducts();
    }, [getProducts]);

    return (
        <div className="row my-5">
            <div className="col-12">
                <div className={styles.productsList}>
                    {products.filter( (item) => {
                        return featured ? item.featured : true;
                    }).map( (item) => {
                        return (
                            <Product key={item.id} {...item}/>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.products.loading,
        products: state.products.list,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch( actions.getProducts() ),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);