import expect from 'expect';
import AuthManager from '../src';

describe('AuthManager', () => {
    beforeEach(() => {
       AuthManager.logout();
    });

    it('can login user', () => {
        expect(AuthManager.getUser()).toEqual(undefined);

        AuthManager.login({foo: 'bar'});
        expect(AuthManager.getUser()).toEqual({foo: 'bar'});
    });

    it('can check if user is logged in', () => {
        expect(AuthManager.isLoggedIn()).toBe(false);

        AuthManager.setToken('foobar');
        expect(AuthManager.isLoggedIn()).toBe(false);

        AuthManager.login({});
        expect(AuthManager.isLoggedIn()).toBe(false);

        AuthManager.login({id: 1});
        expect(AuthManager.isLoggedIn()).toBe(false);
    });

    it('cannot store falsey values as user', () => {
        AuthManager.login(null);

        expect(AuthManager.getUser()).toBe(undefined);
    });
});
