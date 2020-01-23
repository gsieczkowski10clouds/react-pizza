import * as actionTypes from './actionTypes';

import apiAuth from '../../api/auth';

const authStart = () => {
    return{
        type: actionTypes.AUTH_START,
    }
};

const authSuccess = (data) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        token: data.token,
    }
};

const authFailed = () => {
    return {
        type: actionTypes.AUTH_FAILED,
    }
};

export const auth = () => {
    return (dispatch) => {

        dispatch( authStart() );

        apiAuth.authenticate()
            .then( (response) => {
                const data = {
                    token: response,
                };
                dispatch( authSuccess(data) );
            })
            .catch( (error) => {
                dispatch( authFailed() );
            })

    }
};