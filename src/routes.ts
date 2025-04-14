/**
 * Routes that are accessible without authentication
 */
export const publicRoutes = ["/", "/about", "/location"];

/**
 * Routes that are accessible without authentication
 * These routes do not require the user to be logged in to access them.
 */
export const authRoutes = ["/auth/register", "/auth/login"];

/**
 * API prefix for authentication routes
 * This prefix is used to identify authentication-related API endpoints.
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Default redirect path after login
 */
export const DEFAULT_LOGIN_REDIRECT = "/products";

/**
 *
 */
export const ADMIN_DEFAULT_REDIRECT = "/admin/dashboard";

export const protectedRoutesForAdmin = [
  "/admin/users",
  "/admin/orders",
  "/admin/products",
];
