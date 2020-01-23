import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

let enhancer = applyMiddleware(thunk);
if( process.env.NODE_ENV === 'development' ){
    enhancer = composeWithDevTools(enhancer);
}

const store = createStore( reducers, enhancer);

export default store;