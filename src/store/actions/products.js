import * as actionTypes from './actionTypes';
import apiProducts from '../../api/products';

export const getProductsStart = () => {
    return {
        type: actionTypes.PRODUCTS_GET_START,
    }
};

export const getProductsFail = (error) => {
    return {
        type: actionTypes.PRODUCTS_GET_FAIL,
        error: error,
    }
};

export const getProductsSuccess = (data) => {
    return {
        type: actionTypes.PRODUCTS_GET_SUCCESS,
        data: data,
    }
};

export const getProducts = () => {
    console.log( 'actions->products->getProducts' );
    return (dispatch) => {
        dispatch( getProductsStart() );
        apiProducts.get()
            .then( (response) => {
                dispatch( getProductsSuccess(response.data) );
            })
            .catch( (error) => {
                dispatch( getProductsFail(error) );
            });
    }
};