"use client";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "./ui/button";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";

const CustomConnectButton = ({ className }: { className?: string }) => {
  const { status, data } = useSession();
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && status !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            className={clsx(
              !ready ||
                (data &&
                  status !== "authenticated" &&
                  "hidden opacity-0 pointer-events-none user-select-none")
            )}
          >
            {(() => {
              if (!data?.user) {
                return (
                  <Button
                    className={cn(className)}
                    variant={"secondary"}
                    onClick={openConnectModal}
                  >
                    Connect Wallet
                  </Button>
                );
              }

              if (chain?.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              if (data?.user && connected) {
                return (
                  <div className="flex gap-5 items-center font-bold text-primary hover:cursor-pointer">
                    <button
                      onClick={openChainModal}
                      className="flex items-center text-sm"
                      type="button"
                    >
                      {chain?.hasIcon && (
                        <div className="w-9 h-9 rounded-full overflow-hidden mr-2">
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              className="w-11 h-11 object-contain"
                            />
                          )}
                        </div>
                      )}
                      {chain?.name}
                    </button>

                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="text-sm"
                    >
                      {account?.displayName}
                      {account?.displayBalance
                        ? ` (${account?.displayBalance})`
                        : ""}
                    </button>
                  </div>
                );
              }
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default CustomConnectButton;
