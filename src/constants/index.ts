export const COOKIE_KEYS = {
  accessToken: "accessToken",
  JWT: "jwt",
  refreshToken: "refreshToken",
  accessTokenExpiresAt: "accessTokenExpiresAt",
  refreshTokenExpiresAt: "refreshTokenExpiresAt",
  accessTokenCreatedAt: "accessTokenCreatedAt",
  refreshTokenCreatedAt: "refreshTokenCreatedAt",
};

export const EMITTER_EVENTS = {
  SIGN_IN: "sign_in",
  SIGN_OUT: "sign_out",
  SIGN_IN_ERROR: "sign_in_error",
  SIGN_OUT_ERROR: "sign_out_error",
};

export const JWT_CONFIG = {
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  issuer: process.env.NEXT_PUBLIC_JWT_ISSUER,
  audience: process.env.NEXT_PUBLIC_JWT_AUDIENCE,
  expiresIn: process.env.NEXT_PUBLIC_JWT_EXPIRES_IN,
};
