"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { ChatStoreProvider } from "./chat-provider";
import AuthProvider from "./auth-provider";
import { Session } from "next-auth";
import RainbowKitProvider from "./rainbow-kit-provider";
import ReactQueryProvider from "./react-query-provider";

export function Providers({
  children,
  cookie,
  session,
}: {
  children: React.ReactNode;
  cookie: string;
  session: Session;
}) {
  return (
    <AuthProvider session={session}>
      <ReactQueryProvider>
        <RainbowKitProvider cookie={cookie}>
          <ChatStoreProvider>{children}</ChatStoreProvider>
        </RainbowKitProvider>
      </ReactQueryProvider>
    </AuthProvider>
  );
}
