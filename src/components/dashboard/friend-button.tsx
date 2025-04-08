import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Loader2, UserPlus } from "lucide-react";
import { wagmiContractConfig } from "@/contracts/contract";
import {
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Checkbox } from "../ui/checkbox";
import { useQueryClient } from "@tanstack/react-query";
import { simulateContract, SimulateContractErrorType } from "@wagmi/core";
import { config } from "@/wagmi";
import { Address } from "viem";
import { toast } from "sonner";

const FriendButton = () => {
  const submitButtonRef = React.useRef<HTMLButtonElement>(null);
  const [error, setError] = React.useState<string | null>(null);
  const queryClient = useQueryClient();
  const { data: hash, writeContract, isPending } = useWriteContract();

  const { isLoading: recieptLoading, isSuccess: isTransactionSuccess } =
    useWaitForTransactionReceipt({ hash });
  const formRef = React.useRef<HTMLFormElement>(null);
  const { data: friends } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getPredefinedFriends",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const friends = formData.getAll("friend") as string[];

    //prepare contract and send transaction
    try {
      await simulateContract(config, {
        ...wagmiContractConfig,
        functionName: "addFriend",
        args: [friends as Address[]],
      });
    } catch (e) {
      const error = e as SimulateContractErrorType;
      console.log(error.message);
      setError(error.message);
    }

    writeContract({
      ...wagmiContractConfig,
      functionName: "addFriend",
      args: [friends as Address[]],
    });
  };

  useEffect(() => {
    if (isTransactionSuccess) {
      queryClient.invalidateQueries();
      toast.success("User Account Created Successfully", {
        description: "Saturday, April 04, 2025 at 1:37 AM",
      });
      formRef.current?.reset();
    }
  }, [isTransactionSuccess]);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"secondary"} className="h-10">
          <UserPlus className=" h-4 w-4" />
          ADD FRIEND
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 mt-1 mr-4 bg-secondary text-white border-secondary shadow-2xl">
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="grid grid-cols-1 justify-between gap-4 h-[350px] overflow-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-700 scrollbar-track-slate-800"
        >
          {/* <div className="space-y-2">
            {/* <h4 className="font-medium leading-none">Dimensions</h4> */}
          {/* <p className="text-sm text-center font-semibold">
              Add Friend/Friends from the list.
            </p>
          </div> */}
          {friends?.map((friend, index) => (
            <div
              key={index}
              className="grid grid-cols-3 items-center justify-between px-2"
            >
              <div className=" col-span-2 flex items-center gap-2.5 text-white">
                <Avatar className="size-12 bg-gray-200">
                  <AvatarImage src="/avatar.jpeg" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-sm font-semibold">
                  {friend._nickname}
                </span>
              </div>
              <div className="col-span-1 flex justify-end">
                <Checkbox
                  name="friend"
                  value={friend._address}
                  className="border-2 border-gray-200"
                />
              </div>
            </div>
          ))}
          <button ref={submitButtonRef} type="submit" className="hidden">
            Submit
          </button>
        </form>
        <Button
          onClick={() => submitButtonRef.current?.click()}
          className="w-full mt-4 bg-primary/50 text-white font-semibold"
        >
          {isPending || recieptLoading ? (
            <>
              <Loader2 className="animate-spin" />
              Please wait
            </>
          ) : (
            <>Submit Selection</>
          )}
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default FriendButton;
