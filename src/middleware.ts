import NextAuth from "next-auth";
import authConfig from "./auth.config";

import {
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
  apiAuthPrefix,
  authRoutes,
} from "./routes";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req) {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  console.log(isLoggedIn);

  const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoutes) {
    // return null
    return NextResponse.next();
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoutes)
    return Response.redirect(new URL("/auth/login", nextUrl));

  return null;
});

export const config = {
  //   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
