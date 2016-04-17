import expect from 'expect';
import AuthManager from '../src/index';

describe('AuthManager', () => {
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
});
