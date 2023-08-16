import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

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

        const res = await fetch(
          process.env.NEXT_PUBLIC_SERVER_URL + "/auth/login",
          {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
          },
        );
        const currentUser = await res.json();

        if (currentUser && currentUser.authenticated) {
          return currentUser;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      console.log("session ", token);
      session.user = token;
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log("signIn ");
      try {
        // connect to db
        if (account.provider === "google") {
          const res = await fetch(
            process.env.NEXT_PUBLIC_SERVER_URL + "/auth/user",
            {
              method: "POST",
              body: JSON.stringify({
                idTokenString: account.id_token,
                audience: profile.aud,
                email: profile.email,
                firstName: profile.given_name,
                lastName: profile.family_name,
              }),
              headers: { "Content-Type": "application/json" },
            },
          );
          const currentUser = await res.json();
          mapUser(user, currentUser);
          console.log(currentUser);
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async jwt({ token, user }) {
      console.log("jwt ", token);
      return { ...token, ...user };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/signin",
  },
};

function mapUser(user, currentUser) {
  user.firstname = currentUser.firstname;
  user.lastname = currentUser.lastname;
  user.accessToken = currentUser.accessToken;
  user.id = currentUser.id;
  user.role = currentUser.role;
  user.authenticated = currentUser.authenticated;
  user.bucket = currentUser.bucket;
  user.archive = currentUser.archive;
  user.image = currentUser.image ? currentUser.image : user.image;
}
