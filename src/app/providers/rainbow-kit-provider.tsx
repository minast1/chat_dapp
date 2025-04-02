import { config } from "@/wagmi";
import {
  RainbowKitAuthenticationProvider,
  RainbowKitProvider as NextRainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import React from "react";
import { cookieToInitialState, WagmiProvider } from "wagmi";
import authenticationAdapter from "../../lib/authenticationAdapter";
import { useSession } from "next-auth/react";

const RainbowKitProvider = ({
  children,
  cookie,
}: {
  children: React.ReactNode;
  cookie: string;
}) => {
  const initialState = cookieToInitialState(config, cookie);
  const { status } = useSession();
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <RainbowKitAuthenticationProvider
        adapter={authenticationAdapter}
        status={status}
      >
        <NextRainbowKitProvider coolMode>{children}</NextRainbowKitProvider>
      </RainbowKitAuthenticationProvider>
    </WagmiProvider>
  );
};

export default RainbowKitProvider;
