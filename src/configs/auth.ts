import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { User } from "next-auth";

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (!email || !password) return null;

        // TODO идем в бд и ищем юзера

        const users = [
          {
            id: "1",
            email: "test1@gmail.com",
            name: "Test1",
            password: "12345",
            role: "admin",
          },
          {
            id: "2",
            email: "admin@gmail.com",
            name: "Super Admin",
            password: "12345",
            role: "admin",
          },
          {
            id: "3",
            email: "any@gmail.com",
            name: "Just a Guest",
            password: "12345",
            role: "guest",
          },
        ];

        const currentUser = users.find((user) => user.email === email);
        if (currentUser && currentUser.password === password) {
          const { password, ...userWithoutPass } = currentUser;
          return userWithoutPass as User;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // find user and set it to session
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      try {
        // connect to db
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },

  pages: {
    signIn: "/signin",
  },
};
