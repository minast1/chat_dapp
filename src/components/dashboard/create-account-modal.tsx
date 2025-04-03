"use client";
import React from "react";
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
import { User, Users } from "lucide-react";
//import { useSession } from "next-auth/react";

const CreateAccountModal = ({ address }: { address: string }) => {
  // const session = useSession();
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
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label className="">Wallet Address</Label>
            <Input
              className="bg-sky-50 text-card"
              required
              readOnly
              defaultValue={address}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Username/Nickname</Label>
            </div>
            <Input className="bg-sky-50 text-card" />
          </div>

          <Button
            variant="outline"
            className="w-full hover:bg-current hover:text-gray-600"
          >
            <User className=" h-4 w-4" />
            Create New Account
          </Button>
        </div>

        {/* <DialogFooter>
          <Button type="submit" className="bg-primary/50">
            Save changes
          </Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default CreateAccountModal;
