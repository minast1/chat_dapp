import React from "react";
import ChatBubble from "./chat-bubble";

const ChatArea = () => {
  return (
    <div className="rounded-md bg-secondary md:col-span-2 p-10">
      <ChatBubble />
    </div>
  );
};

export default ChatArea;
