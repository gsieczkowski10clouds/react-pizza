import api from '../api';

const authenticate = () => {
    return api.get('/');
};

export default {
    authenticate,
}