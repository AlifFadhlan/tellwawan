/**
 * An array of routes that accessible to public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that require authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "auth/reset",
];

/**
 * Prefix for all API authentication routes
 * Routes that start with this prefix are used for API Authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Default redirect path after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/user";

export const DEFAULT_ADMIN_REDIRECT = "/admin";

export const DEFAULT_USER_REDIRECT = "/user";

export const DEFAULT_REKRUTER_REDIRECT = "/rekruter";

export const DEFAULT_HOME = "/home";
