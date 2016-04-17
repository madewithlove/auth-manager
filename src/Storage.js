import cookies from 'react-cookie';

export default {
    get(value) {
        return cookies.load(value);
    },
    set(key, value) {
        cookies.save(key, value);
    },
    remove(key) {
        cookies.remove(key);
    },
};
