import storage from './Storage';

function expiryTime(expiresIn = 0) {
    return new Date(Date.now() + expiresIn * 1000);
}

export default class AuthManager {
    //////////////////////////////////////////////////////////////////////
    /////////////////////////////// TOKEN ////////////////////////////////
    //////////////////////////////////////////////////////////////////////

    /**
     * @param {string} token
     * @param {Number} expiresIn
     * @param {Object} options
     */
    static setToken(token, expiresIn = 0, options = {}) {
        const expires = expiryTime(expiresIn);

        storage.set('token', token, {
            ...options,
            expires,
        });
    }

    /**
     * @returns {string}
     */
    static getToken() {
        return storage.get('token');
    }

    /**
     * Delete the currently stored token
     *
     * @param {Object} options
     */
    static deleteToken(options = {}) {
        storage.remove('token', options);
    }

    //////////////////////////////////////////////////////////////////////
    //////////////////////////////// USER ////////////////////////////////
    //////////////////////////////////////////////////////////////////////

    /**
     * Log in an user
     *
     * @param {Object} user
     * @param {Number} expiresIn
     * @param {Object} options
     */
    static login(user, expiresIn = 0, options = {}) {
        if (!user) {
            return;
        }

        storage.set(
            'user',
            { id: user.id },
            { ...options, expires: expiryTime(expiresIn) },
        );
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
     *
     * @param {Object} options
     */
    static logout(options = {}) {
        this.deleteToken(options);
        storage.remove('user', options);
    }
}
