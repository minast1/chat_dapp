"use client";
import React, { useEffect } from "react";
import ChatBubble from "./chat-bubble";
import MessageForm from "./dashboard/message-form";
import { useSearchParams } from "next/navigation";
import { wagmiContractConfig } from "@/contracts/contract";
import { useReadContract } from "wagmi";
type Message = {
  message: string;
  roomId: `0x${string}`;
  sender: `0x${string}`;
  timestamp: bigint;
};
const ChatArea = () => {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("roomId");
  const [messages, setMessages] = React.useState<Message[]>([]);
  //get messages by roomId
  const { data: conversation, isSuccess } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getMessagesByRoomId",
    args: [roomId as `0x${string}`],
    query: {
      enabled: !!roomId,
    },
  });
  useEffect(() => {
    if (isSuccess) {
      setMessages(conversation as Message[]);
    }
  }, [isSuccess]);

  return (
    <div className="rounded-md bg-secondary md:col-span-2 p-10 justify-between flex flex-col">
      <div
        className="mb-5 border p-5 border-red-600 h-[650px] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-700 scrollbar-track-slate-800"
        //ref={messagesEndRef}
      >
        <ChatBubble />
      </div>
      <MessageForm
      // optimisticAction={addOptimisticMessage}
      // id={hasSlug(params) ? params.slug[0] : undefined}
      />
    </div>
  );
};

export default ChatArea;
