import { env } from "@/env";
import { db } from "@/server/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import { getServerSession, type NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

class UserNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserNotFoundError";
  }
}

class InvalidPasswordError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidPasswordError";
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "signin",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          throw new UserNotFoundError(
            "Учетные данные не соответствуют ни одному пользователю!",
          );

        const { email, password } = credentials;

        const user = await db.user.findFirst({ where: { email } });
        if (!user)
          throw new UserNotFoundError(
            "Учетные данные не соответствуют ни одному пользователю!",
          );

        // const isPasswordValid = await compare(
        //   password,
        //   user.password ? user.password : "",
        // );
        //
        // if (!isPasswordValid)
        //   throw new InvalidPasswordError(
        //     "Введены неверные учетные данные или адрес электронной почты.",
        //   );

        return user as User;
      },
    }),
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
};

export const getServerAuthSession = () => getServerSession(authOptions);
