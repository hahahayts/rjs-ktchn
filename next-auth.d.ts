import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

// to avoid error in role type callback
export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
