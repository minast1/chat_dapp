"use client";

import React from "react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) => {
  return (
    <SessionProvider session={session} baseUrl={process.env.NEXTAUTH_URL}>
      {children}
    </SessionProvider>
  );
};

export default AuthProvider;
