"use client";
import React, { useRef } from "react";
import { Input } from "../ui/input";
//import { Info } from "lucide-react";
//import { toast } from "sonner";

const MessageForm = () => {
  const inputRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={inputRef}
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-[10px] self-center w-full"
      //   action={async (formData: FormData) => {
      //     const message = formData.get("message")

      //     if (optimisticAction && id) {
      //       //console.log(message)

      //       optimisticAction(message as string)
      //       try {
      //         await sendMessage(message as string, id)
      //         inputRef.current?.reset()
      //         //set pending to false here
      //       } catch (error: any) {
      //         useChatStore.setState({ isError: true })
      //       }
      //     } else {
      //       toast({
      //         //title: "Scheduled: Catch up",
      //         description: (
      //           <div className="flex w-full items-start gap-2">
      //             <Info className="text-red-100" />
      //             <p
      //               className="font-medium text-[#1E1E1E] dark:text-white/90"

      //             >
      //               Please Click on the New Chat button to proceed..
      //             </p>
      //           </div>
      //         ),
      //       })
      //     }
      //   }}
    >
      <Input
        placeholder="Type a message..."
        required
        //disabled={pending}
        name="message"
        className="h-[50px] w-[681px] rounded-[32px] border border-[#35353526]/15 bg-gray-300 px-5 text-base font-normal leading-[28.83px] text-[#353535] shadow-2xl focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:ring-offset-0  dark:bg-darkBlue dark:text-white dark:focus-visible:ring-darkBlue"
      />
      <button
        type="submit"
        //disabled={pending}
        className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-full border border-primary  bg-primary/60 p-2 text-center shadow-2xl shadow-slate-900 hover:bg-primary/50 focus:outline-none focus:ring-1 dark:shadow-2xl"
      >
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.856 0.648664C16.4394 0.22283 15.8227 0.0653302 15.2477 0.231997L1.83935 4.10616C1.23269 4.2745 0.802687 4.75533 0.686854 5.36533C0.568521 5.987 0.981854 6.777 1.52185 7.107L5.71436 9.667C6.14436 9.93033 6.69936 9.8645 7.05519 9.50783L11.856 4.707C12.0977 4.45616 12.4977 4.45616 12.7394 4.707C12.981 4.94783 12.981 5.34033 12.7394 5.59033L7.93019 10.3912C7.57352 10.7478 7.50686 11.3012 7.76936 11.732L10.331 15.9403C10.631 16.4395 11.1477 16.7237 11.7144 16.7237C11.781 16.7237 11.856 16.7237 11.9227 16.7145C12.5727 16.632 13.0894 16.1895 13.281 15.5645L17.256 2.257C17.431 1.69033 17.2727 1.07366 16.856 0.648664Z"
            fill="white"
          />
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.50858 12.5066C1.34858 12.5066 1.18858 12.4458 1.06691 12.3233C0.822747 12.0791 0.822747 11.6841 1.06691 11.44L2.20441 10.3016C2.44858 10.0583 2.84441 10.0583 3.08858 10.3016C3.33191 10.5458 3.33191 10.9416 3.08858 11.1858L1.95025 12.3233C1.82858 12.4458 1.66858 12.5066 1.50858 12.5066ZM4.64292 13.5003C4.48291 13.5003 4.32291 13.4395 4.20125 13.317C3.95708 13.0728 3.95708 12.6778 4.20125 12.4336L5.33875 11.2953C5.58291 11.052 5.97875 11.052 6.22292 11.2953C6.46625 11.5395 6.46625 11.9353 6.22292 12.1795L5.08458 13.317C4.96291 13.4395 4.80291 13.5003 4.64292 13.5003ZM4.85433 16.4736C4.976 16.5961 5.136 16.657 5.296 16.657C5.456 16.657 5.616 16.5961 5.73767 16.4736L6.876 15.3361C7.11933 15.092 7.11933 14.6961 6.876 14.452C6.63183 14.2086 6.236 14.2086 5.99183 14.452L4.85433 15.5903C4.61016 15.8345 4.61016 16.2295 4.85433 16.4736Z"
            fill="white"
          />
        </svg>
      </button>
    </form>
  );
};

export default MessageForm;
