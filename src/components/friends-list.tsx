"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import FriendBubble from "./friend-bubble";
import {
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { useSession } from "next-auth/react";
import { wagmiContractConfig } from "@/contracts/contract";
import { Address } from "viem";
import { useQueryClient } from "@tanstack/react-query";
import { simulateContract, SimulateContractErrorType } from "@wagmi/core";
import { config } from "@/wagmi";
import { useRouter } from "next/navigation";
import { set } from "zod";

const FriendsList = () => {
  const { data: userData } = useSession();
  const [roomId, setRoomId] = React.useState<string | null>(null);
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: hash, writeContract } = useWriteContract({
    mutation: {
      onSuccess(data) {
        setRoomId(data);
      },
    },
  });

  const { isSuccess: isTransactionSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (isTransactionSuccess) {
      queryClient.invalidateQueries();
      //redirect to queryParam route
      router.push(`/dashboard?roomId=${roomId}`);
    }
  }, [isTransactionSuccess]);
  const { data: friendsList } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getUserFriends",
    args: [userData?.user.walletAddress as Address],
  });

  const startConversation = async (chatee: string) => {
    //prepare contract and send transaction
    try {
      await simulateContract(config, {
        ...wagmiContractConfig,
        functionName: "startChat",
        args: [chatee as Address],
      });
    } catch (e) {
      const error = e as SimulateContractErrorType;
      console.log(error.message);
    }

    writeContract({
      ...wagmiContractConfig,
      functionName: "startChat",
      args: [chatee as Address],
    });
  };

  return (
    <div className="rounded-md bg-secondary md:col-span-1 px-5 py-10 overflow-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-700 scrollbar-track-slate-800">
      {friendsList?.map((friend, index) => (
        <Button
          variant={"ghost"}
          onClick={() => startConversation(friend._address)}
          key={index}
          className="flex items-center w-full h-fit px-4 py-5 hover:bg-transparent rounded-none text-sm font-medium border-b border-gray-600 0 focus:z-10 focus:ring-1 focus:ring-transparent focus:text-white"
        >
          <FriendBubble
            key={index}
            nickname={friend._nickname}
            address={friend._address}
            createdAt={friend._timestamp as unknown as number}
          />
        </Button>
      ))}
    </div>
  );
};

export default FriendsList;
