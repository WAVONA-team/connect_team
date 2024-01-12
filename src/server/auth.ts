import { env } from "@/env";
import { db } from "@/server/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getServerSession, type NextAuthOptions } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
export const authOptions: NextAuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
