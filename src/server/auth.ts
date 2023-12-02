import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from '@/server/db';
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
  type User,
} from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db),
  providers: [
    Credentials({
      credentials: {
        login: { label: 'login', type: 'text', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(credentials) {
        const user = {
          login: 'admin',
          password: 'admin',
          id: '0',
          name: 'jegor',
          description: 'Запомните братья, не будьте сестрами',
        };

        switch (true) {
          case !credentials?.login || !credentials.password: {
            return null;
          }

          case credentials?.login === user.login
            && credentials.password === user.password: {
              const { login, password, ...userForRender } = user;

              return userForRender as User;
            }

          default: {
            return null;
          }
        }
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
