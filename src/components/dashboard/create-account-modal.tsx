import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users } from "lucide-react";
import { useSession } from "next-auth/react";

const CreateAccountModal = () => {
  const session = useSession();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"} className="h-10">
          <Users className=" h-4 w-4" />
          CREATE ACCOUNT
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-lg bg-slate-800 border-0 text-white">
        <DialogHeader>
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-primary/50">
              Wallet Address
            </Label>
            <Input
              id="name"
              defaultValue={session.data?.user?.walletAddress}
              className="col-span-3 border border-gray-600"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-1">
            <Label htmlFor="username" className="text-right text-primary/50">
              Username
            </Label>
            <Input
              placeholder="Username/Nickname"
              //defaultValue="@peduarte"
              className="col-span-3 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="col-span-4 col-start-2 text-xs text-white">
              This field is optional...!
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-primary/50">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAccountModal;
