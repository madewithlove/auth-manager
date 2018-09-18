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
};

export class AuthManager {
    static setToken(token: string, expiresIn?, options?: Options): void;

    static getToken(): string;

    static deleteToken(options?: Options): void;

    static login(user: User, expiresIn?, options?: Options);

    static getUser(): User | null;

    static isLoggedIn(): boolean;

    static logout(options?: Options): void;
}