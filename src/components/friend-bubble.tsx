import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type TProps = {
  nickname: string;
  address: string;
  createdAt: number;
};
const FriendBubble = ({ nickname, createdAt }: TProps) => {
  const dt = new Date(Number(createdAt) * 1000);
  return (
    <div className="flex items-center w-full gap-3 text-white">
      {/* <div className="flex items-center gap-2 border border-green-700"> */}
      <Avatar className="size-12 bg-gray-200">
        <AvatarImage src="/avatar.jpeg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex flex-col items-start">
        <span className="text-sm  2xl:text-lg font-semibold">{nickname}</span>
        <span className="text-xs 2xl:text-sm text-slate-400">
          <span className="text-slate-400 mr-2">since</span> {dt.toDateString()}
        </span>
      </div>
    </div>
  );
};

export default FriendBubble;
