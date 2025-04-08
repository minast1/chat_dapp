"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, User, Users } from "lucide-react";
import { simulateContract } from "@wagmi/core";
import { SimulateContractErrorType } from "viem/actions";
import { wagmiContractConfig } from "@/contracts/contract";

import { config } from "@/wagmi";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const CreateAccountModal = ({ address }: { address: string }) => {
  const [error, setError] = React.useState<string | null>(null);
  const queryClient = useQueryClient();
  const { data: hash, writeContract, isPending } = useWriteContract();

  const { isLoading: recieptLoading, isSuccess: isTransactionSuccess } =
    useWaitForTransactionReceipt({ hash });
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("username") as string;

    //prepare contract and send transaction
    try {
      await simulateContract(config, {
        ...wagmiContractConfig,
        functionName: "createAccount",
        args: [name as `0x${string}`],
      });
    } catch (e) {
      const error = e as SimulateContractErrorType;
      console.log(error.message);
      setError(error.message);
    }

    writeContract({
      ...wagmiContractConfig,
      functionName: "createAccount",
      args: [name as `0x${string}`],
    });
  };

  useEffect(() => {
    if (isTransactionSuccess) {
      queryClient.invalidateQueries();
      toast.success("User Account Created Successfully", {
        description: "Saturday, April 04, 2025 at 1:37 AM",
      });
    }
  }, [isTransactionSuccess]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"} className="h-10">
          <Users className=" h-4 w-4" />
          CREATE ACCOUNT
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-lg border-0">
        <DialogHeader>
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>
        <form className="grid gap-6" onSubmit={onSubmit}>
          <div className="grid gap-2">
            <Label className="text-primary">Wallet Address</Label>
            <Input
              className="bg-sky-50 text-card font-semibold"
              required
              name="address"
              readOnly
              defaultValue={address}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label className="text-primary">Username/Nickname</Label>
            </div>
            <Input className="bg-sky-50 text-card" name="username" required />
            {error && <p className="text-xs text-red-600">{error}</p>}
          </div>

          <Button
            variant="outline"
            className="w-full hover:bg-primary/50 border-primary hover:text-white bg-primary focus-visible:ring-primary focus-visible:ring-1 focus-visible:ring-offset-none"
          >
            {isPending || recieptLoading ? (
              <>
                <Loader2 className="animate-spin" />
                Please wait
              </>
            ) : (
              <>
                <User className=" h-4 w-4" />
                Create New Account
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAccountModal;
