import api from '../api';

const get = () => {
    return api.get('https://react-pizza-7d49f.firebaseio.com/products.json');
};

export default {
    get,
}