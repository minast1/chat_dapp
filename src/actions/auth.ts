"use server";

import { actionClient } from "@/lib/safe-action";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { z } from "zod";
import { sessionOptions } from "@/lib/iron-session";
import { redirect } from "next/navigation";

export interface SessionData {
  nonce?: string;
  isLoggedIn?: boolean;
}

// const signInSchema = z.object({
//   jwt: z.string(),
// });
// export const signInAction = actionClient
//   .schema(signInSchema)
//   .action(async ({ parsedInput: { jwt } }) => {
//     const cookieStore = await cookies();
//     cookieStore.set(COOKIE_KEYS.JWT, jwt, { secure: true });
//   });

// export async function signOutAction() {
//   const cookieStore = await cookies();
//   cookieStore.delete(COOKIE_KEYS.JWT);
// }

export const getSession = async () => {
  const cookieStore = await cookies();

  const session = await getIronSession<SessionData>(
    cookieStore,
    sessionOptions
  );

  return session;
};
// export const isAuthAction = actionClient.action(async function () {
//   const cookieStore = await cookies();
//   const jwt = cookieStore.get(COOKIE_KEYS.JWT)?.value;

//   return { isAuth: Boolean(jwt) };
// });

const submitSchema = z.object({
  cookie: z.string(),
});
export const submitCookieToIronSession = actionClient
  .schema(submitSchema)
  .action(async function ({ parsedInput: { cookie } }) {
    const session = await getSession();
    session.nonce = cookie;
    await session.save();
  });

export const readCookieFromIronSession = actionClient.action(async function () {
  const session = await getSession();

  return { cookie: session.nonce };
});

export const deleteCookieFromIronSession = actionClient.action(
  async function () {
    const session = await getSession();
    session.nonce = undefined;
    await session.save();
  }
);

export const customRedirect = async (url: string) => {
  redirect(url);
};
