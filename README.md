# AuthManager

## Installation

```
yarn add auth-manager
```

## Usage

```js
import AuthManager from 'auth-manager';

AuthManager.login({ id: 1 }, 60);

// Elsewhere
AuthManager.isLoggedIn();
AuthManager.getUser();
AuthManager.logout();
```
