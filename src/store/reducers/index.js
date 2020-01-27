import { combineReducers } from 'redux';

import auth from './auth';
import products from './products';

const reducers = combineReducers({
    auth: auth,
    products: products,
});

export default reducers;