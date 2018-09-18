# CHANGELOG

## 0.4.2

### Change

-   Tweak `User` argument type

## 0.4.1

### Fixed

-   Added missing keyword to typings

## 0.4.0

### Added

-   Added typings for better completion
-   Updated from deprecated `react-cookie` to `universal-cookie`

## 0.3.2

### Fixed

-   Fixed issue with cookie not clearing when they are added to a custom domain.

## 0.3.1

### Added

-   Able to pass `options` when setting a token or logging in.

## 0.3.0

### Added

-   Added `expiresIn` parameter to `AuthManager.login()`;

## 0.2.2

### Fixed

-   Fixed issue with user data not being trimmed before storage

## 0.2.1

### Fixed

-   Ensure cookies are stored at root path

## 0.2.0

### Changed

-   Removed `moment` dependency
-   Tokens are now expired through cookies's `expires` instead of custom logic

## 0.1.1

### Fixed

-   Prevent "undefined" from being stored as user

## 0.1.0

### Added

-   Initial release
