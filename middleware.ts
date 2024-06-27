import authConfig from "@/auth.config";
import NextAuth from "next-auth";

import {
  DEFAULT_ADMIN_REDIRECT,
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";
import { UserRoles } from "@prisma/client";

// export default NextAuth(authConfig).auth;
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isAdmin = req.auth?.user.role === "ADMIN";

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn && isAdmin) {
      return Response.redirect(new URL(DEFAULT_ADMIN_REDIRECT, nextUrl));
    }
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_ADMIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  return;
});

// Mather dari Authjs ===> matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// mather dari yt Code With Antonio ===> matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
