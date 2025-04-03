import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const FriendBubble = () => {
  return (
    <div className="flex items-start gap-2.5 text-white">
      <Avatar className="size-12 bg-gray-200">
        <AvatarImage src="/avatar.jpeg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col w-full max-w-[320px] leading-1.5">
        <div className="flex items-center space-x-2 rtl:space-x-reverse ">
          <span className="text-sm font-semibold">Bonnie Green</span>
          <span className="text-sm font-normal ml-auto">
            {" "}
            <span className="text-gray-600 mr-2">since</span>
            {"  "}
            <span className="text-xs">Nov 2020</span>
          </span>
        </div>
        <p className="text-sm font-normal py-2 dark:text-white truncate max-w-[260px]">
          Thats awesome. I think our users will really appreciate the gestures
          given
        </p>
      </div>
    </div>
  );
};

export default FriendBubble;
