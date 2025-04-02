import { readCookieFromIronSession } from "@/actions/auth";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { SiweMessage } from "siwe";

interface User {
  id: string;
  accessToken: string;
  walletAddress: string;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        message: {
          label: "Message",
          type: "string",
        },
        signature: {
          label: "Signature",
          type: "string",
        },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.message || !credentials?.signature) {
          console.error("No Credentials Provided");
          return null;
        }
        try {
          const siweMessage = new SiweMessage(credentials.message);
          const cookieRes = await readCookieFromIronSession();
          const nonce = cookieRes?.data?.cookie;
          console.log(nonce);
          //check if nonce matches
          if (siweMessage.nonce !== nonce) {
            throw new Error("Invalid nonce:Nonce mismatch error");
          }

          //Verify the signature
          const verificationResult = await siweMessage.verify({
            signature: credentials.signature as string,
            domain: siweMessage.domain,
            nonce: siweMessage.nonce,
          });
          if (verificationResult.success) {
            const user = {
              id: verificationResult.data.address,
              accessToken: "Ox1010",
              walletAddress: verificationResult.data.address,
            };

            //register user into the appplication
            return user;
          }
          //Return null if the validation fails
          return null;
        } catch (error) {
          if (error instanceof Error) {
            console.error("Login Error : ", error.message);
            throw new Error(error.message);
          } else {
            console.error("Login Error : ", error);
            throw new Error("An unknown error occurred.");
          }
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.walletAddress = user.walletAddress;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.walletAddress = token.walletAddress;
      return session;
    },
  },
  cookies: {
    sessionToken: {
      name: "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  events: {
    signIn: async (message) => {},
    signOut: async (message) => {
      //console.log("Sign Out Event : ", message);
    },
  },
});
