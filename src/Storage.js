import cookies from 'react-cookie';

export default {
    get(value) {
        return cookies.load(value);
    },
    set(key, value, options) {
        cookies.save(key, value, {path: '/', ...options});
    },
    remove(key, options) {
        cookies.remove(key, {path: '/', ...options});
    },
};
