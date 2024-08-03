import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials: any): Promise<any> {
        await dbConnect();
        try {
          const user = await User.findOne({
            $or: [
              { email: credentials.identifier },
              { username: credentials.identifier },
            ],
          });
          if (!user) {
            throw new Error("No user found!");
          }
          if (!user.isVerified) {
            throw new Error("Please verify you account!");
          }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error("Incorrect Password!");
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      console.log(token);
      if (token) {
        session.user._id = token._id?.toString();
        session.user.isVerified = token.isVerified;
        session.user.username = token.username;
        session.user.email = token.email;
        session.user.image = token.image;
      }
      return session;
    },
    async jwt({ token, user }) {
      console.log(user);
      if (user) {
        token._id = user._id?.toString();
        token.isVerified = user.isVerified;
        token.username = user.username;
        token.image = user.image;
        token.email = user.email;
      }
      return token;
    },
  },
};
