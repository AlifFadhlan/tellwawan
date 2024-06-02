import NextAuth, { DefaultSession } from "next-auth";

export type ExtenderUser = DefaultSession["user"] & {
  role: UserRoles;
};

declare module "next-auth" {
  interface Session {
    user: ExtenderUser;
  }
}

import { JWT } from "@auth/core/jwt";
import { UserRoles } from "@prisma/client";

declare module "@auth/core/jwt" {
  interface JWT {
    role?: UserRoles;
  }
}
