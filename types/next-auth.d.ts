declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken: string;
    user: {
      walletAddress: string;
    };
  }

  interface User {
    id: string;
    accessToken: string;
    walletAddress: string;
  }
}

import { JWT } from "next-auth/jwt";
declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    walletAddress: string;
  }
}
