import AuthManager from '../src/AuthManager';

describe('AuthManager', () => {
    beforeEach(() => {
        AuthManager.logout();
    });

    it('can login user', () => {
        expect(AuthManager.getUser()).toEqual(undefined);

        AuthManager.login({id: 1, foo: 'bar'});
        expect(AuthManager.getUser()).toEqual({id: 1});
    });

    it('can check if user is logged in', () => {
        expect(AuthManager.isLoggedIn()).toBe(false);

        AuthManager.setToken('foobar', 123456);
        expect(AuthManager.isLoggedIn()).toBe(false);

        AuthManager.login({});
        expect(AuthManager.isLoggedIn()).toBe(false);

        AuthManager.login({id: 1});
        expect(AuthManager.isLoggedIn()).toBe(true);
    });

    it('cannot store falsey values as user', () => {
        AuthManager.login(null);

        expect(AuthManager.getUser()).toBe(undefined);
    });
});
