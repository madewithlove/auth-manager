import storage from './Storage';

function expiryTime(expiresIn = 0) {
    return new Date(Date.now() + (expiresIn * 1000));
};

export default class AuthManager {

    //////////////////////////////////////////////////////////////////////
    /////////////////////////////// TOKEN ////////////////////////////////
    //////////////////////////////////////////////////////////////////////

    /**
     * @param {String} token
     * @param {Number} expiresIn
     */
    static setToken(token, expiresIn = 0, options = {}) {
        const expires = expiryTime(expiresIn);

        storage.set('token', token, {
            ...options,
            expires
        });
    }

    /**
     * @returns {String}
     */
    static getToken() {
        return storage.get('token');
    }

    /**
     * Delete the currently stored token
     */
    static deleteToken() {
        storage.remove('token');
    }

    //////////////////////////////////////////////////////////////////////
    //////////////////////////////// USER ////////////////////////////////
    //////////////////////////////////////////////////////////////////////

    /**
     * Log in an user
     *
     * @param {Object} user
     */
    static login(user, expiresIn = 0, options = {}) {
        if (user) {
            const expires = expiryTime(expiresIn);

            storage.set('user', {id: user.id}, {
                ...options,
                expires
            });
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
