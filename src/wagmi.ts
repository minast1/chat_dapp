import { mainnet, base, localhost, anvil, sepolia } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";

export const config = getDefaultConfig({
  appName: "Chat Dapp",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  ssr: true,
  chains: [
    mainnet,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [anvil] : []),
  ],
  transports: {
    [anvil.id]: http(),
  },
});
