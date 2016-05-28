import cookies from 'react-cookie';

export default {
    get(value) {
        return cookies.load(value);
    },
    set(key, value, options) {
        cookies.save(key, value, {path: '/', ...options});
    },
    remove(key) {
        cookies.remove(key, {path: '/'});
    },
};
