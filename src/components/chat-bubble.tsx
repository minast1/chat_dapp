import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const ChatBubble = () => {
  return (
    <div className="flex items-start gap-2.5 text-white">
      <Avatar className="size-12 bg-gray-200">
        <AvatarImage src="/avatar.jpeg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col w-full max-w-fit leading-1.5">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold">Bonnie Green</span>
          <span className="text-xs text-gray-400 font-semibold ml-auto">
            {" "}
            11:40
            <span className="ml-1">Nov 2020</span>
          </span>
        </div>
        <p className="text-sm  py-2 font-semibold">
          0x3c445646676566B6000000DFFAGGG
        </p>
        <div className="bg-orange-900/40 px-4 py-2 rounded-md w-full">
          <p className="text-sm font-medium py-2 dark:text-white ">
            {" "}
            That's awesome. I think our users will really appreciate the
            gestures given
          </p>
        </div>

        {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Delivered
        </span> */}
      </div>
    </div>
  );
};

export default ChatBubble;
