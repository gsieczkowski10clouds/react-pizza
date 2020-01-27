import * as actionTypes from '../actions/actionTypes';

const initialState = {
    list: [],
    loading: false,
};

const getStart = (state, action) => {
    return {
        ...state,
        loading: true,
    }
};

const getFailed = (state, action) => {
    return {
        ...state,
        loading: false,
    }
};

const getSuccess = (state, action) => {
    return {
        ...state,
        list: [...action.data],
        loading: false,
    }
};

const reducer = (state=initialState, action) => {

    switch(action.type){
        case actionTypes.PRODUCTS_GET_START: return getStart(state, action);
        case actionTypes.PRODUCTS_GET_SUCCESS: return getSuccess(state, action);
        case actionTypes.PRODUCTS_GET_FAIL: return getFailed(state, action);

        default:
            return state;
    }

};

export default reducer;