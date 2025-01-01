import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "../db";
import type { NextAuthConfig } from "next-auth";
import { User } from "next-auth";
import Credentials from "next-auth/providers/credentials"
import type { UserRole } from '@prisma/client';

declare module "next-auth" {
  interface Session extends User {
    user: {
      id: string;
      email: string;
      role: UserRole;
    } & Session;
  }
}


export const config = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john.doe@example.com" },
        password: { label: "Password", type: "password", placeholder: "Your password" },
      },
      authorize: async (credentials) => {
        let user = null;

        // logic to verify if the user exists
        user = {
          id: "12",
          name: "John Doe",
          email: credentials.email as string,
          image: "https://i.pravatar.cc/150?img=3",
          password: credentials.password as string,
        };

        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.")
        }

        // return user object with their profile data
        return user
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      session.user.id = token.id as string;
      session.user.email = token.email as string;
      session.user.role = token.role as UserRole;
      return session;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
  pages: {
  },
} satisfies NextAuthConfig;

export const { auth, handlers, signIn, signOut } = NextAuth(config);
