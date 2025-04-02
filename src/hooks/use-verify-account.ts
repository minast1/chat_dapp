import { wagmiContractConfig } from "@/contracts/contract";
import React from "react";
import { Address } from "viem";
import { useReadContract } from "wagmi";

const useVerifyAccount = (account: string) => {
  const { data: verified, isLoading } = useReadContract({
    ...wagmiContractConfig,
    functionName: "existsAccount",
    args: [account as Address],
    query: {
      enabled: !!account,
    },
  });

  return { verified, isLoading };
};

export default useVerifyAccount;
