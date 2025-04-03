"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Trash2, UserPlus } from "lucide-react";
import useVerifyAccount from "@/hooks/use-verify-account";
import { useSession } from "next-auth/react";
import CreateAccountModal from "./create-account-modal";
const OptionButtons = () => {
  const { data: userData } = useSession();
  const { verified, isLoading } = useVerifyAccount(
    userData?.user.walletAddress as string
  );
  console.log(verified);
  return (
    <div className="md:place-self-end md:col-span-2">
      <div className="flex w-full gap-5 ">
        {verified && !isLoading && (
          <>
            <Button variant={"secondary"} className="h-10">
              <Trash2 className=" h-4 w-4" />
              CLEAR CHAT
            </Button>
            <Button variant={"secondary"} className="h-10">
              <UserPlus className=" h-4 w-4" />
              ADD FRIEND
            </Button>
          </>
        )}
        {!verified && !isLoading && (
          <CreateAccountModal
            address={userData?.user.walletAddress as string}
          />
        )}
      </div>
    </div>
  );
};

export default OptionButtons;
