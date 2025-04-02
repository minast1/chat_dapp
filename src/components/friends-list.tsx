import React from "react";
import { Button } from "./ui/button";
import FriendBubble from "./friend-bubble";

const FriendsList = () => {
  return (
    <div className="rounded-md bg-secondary md:col-span-1 px-5 py-10 overflow-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-700 scrollbar-track-slate-800">
      {/* <ul className="w-full text-sm font-medium text-white dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {Array.from({ length: 6 }).map((_, index) => (
          <li key={index} className="w-full px-4 py-4 border-b border-gray-600">
            <ChatBubble />
          </li>
        ))}
      </ul> */}
      {Array.from({ length: 7 }).map((_, index) => (
        <Button
          variant={"ghost"}
          key={index}
          className="flex items-center w-full h-fit px-4 py-5 hover:bg-transparent rounded-none text-sm font-medium border-b border-gray-600 0 focus:z-10 focus:ring-1 focus:ring-transparent focus:text-white"
        >
          <FriendBubble key={index} />
        </Button>
      ))}
    </div>
  );
};

export default FriendsList;
