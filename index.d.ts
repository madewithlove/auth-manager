// Type definitions for auth-manager
// Definitions by: Maxime Fabre (maxime@madewithlove.be)

declare type Options = {
    domain?: string;
    expires?: Date;
    httpOnly?: boolean;
    maxAge?: number;
    path?: string;
    secure?: boolean;
};

declare type User = {
    id: number | string;
    [key: string]: any;
};

export default class AuthManager {
    static setToken(
        token: string,
        expiresIn?,
        options?: Options,
        name?: string,
    ): void;

    static getToken(name?: string): string;

    static deleteToken(options?: Options, name?: string): void;

    static login(user: User, expiresIn?, options?: Options);

    static getUser(): User | null;

    static isLoggedIn(): boolean;

    static logout(options?: Options): void;
}
