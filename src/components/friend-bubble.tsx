import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type TProps = {
  nickname: string;
  address: string;
  createdAt: number;
};
const FriendBubble = ({ nickname, address, createdAt }: TProps) => {
  const dt = new Date(Number(createdAt) * 1000);
  return (
    <div className="flex items-center w-full justify-between gap-2.5 text-white">
      <div className="flex items-center gap-2">
        <Avatar className="size-12 bg-gray-200">
          <AvatarImage src="/avatar.jpeg" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-sm font-semibold leading-1.5">{nickname}</span>
      </div>

      <div className="flex items-center leading-1.5 space-x-2 rtl:space-x-reverse">
        <span className="text-sm font-normal ml-auto">
          {" "}
          <span className="text-gray-600 mr-2">since</span>
          {"  "}
          <span className="text-xs">{dt.toDateString()}</span>
        </span>
      </div>
    </div>
  );
};

export default FriendBubble;
