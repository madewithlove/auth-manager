import moment from 'moment';
import storage from './Storage';

export default class AuthManager {

    //////////////////////////////////////////////////////////////////////
    /////////////////////////////// TOKEN ////////////////////////////////
    //////////////////////////////////////////////////////////////////////

    /**
     * @param {String} token
     * @param {Number} expiresIn
     */
    static setToken(token, expiresIn = 0) {
        storage.set('token', token);
        storage.set('validUntil', moment().unix() + expiresIn);
    }

    /**
     * @returns {String}
     */
    static getToken() {
        // Check validity of token
        const validUntil = moment.unix(storage.get('validUntil'));
        if (moment().isAfter(validUntil)) {
            this.deleteToken();
        }

        return storage.get('token');
    }

    /**
     * Delete the currently stored token
     */
    static deleteToken() {
        storage.remove('token');
        storage.remove('validUntil');
    }

    //////////////////////////////////////////////////////////////////////
    //////////////////////////////// USER ////////////////////////////////
    //////////////////////////////////////////////////////////////////////

    /**
     * Log in an user
     *
     * @param {Object} user
     */
    static login(user) {
        if (user) {
            storage.set('user', user);
        }
    }

    /**
     * Get the current authenticated user
     *
     * @return {Object|null}
     */
    static getUser() {
        return storage.get('user');
    }

    /**
     * Check if the user is logged in
     *
     * @returns {boolean}
     */
    static isLoggedIn() {
        const user = this.getUser();

        return Boolean(user && user.id && this.getToken());
    }

    /**
     * Log the user out
     */
    static logout() {
        this.deleteToken();
        storage.remove('user');
    }
}
