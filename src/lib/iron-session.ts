import { COOKIE_KEYS } from "@/constants";
import { SessionOptions } from "iron-session";

export interface SessionData {
  nonce?: string;
  nickname?: string;
  isRegistered?: boolean;
}

export const sessionOptions: SessionOptions = {
  password: process.env.IRON_SESSION_PASSWORD!,
  cookieName: COOKIE_KEYS.JWT,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
