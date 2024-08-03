"use client";

import {
  BarChart,
  Home,
  Inbox,
  List,
  Mail,
  Send,
  UserRoundSearch,
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

export const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="fixed h-dvh dark:bg-[#101113] bg-gray-300 z-10 w-14 flex flex-col items-center pt-3 justify-between">
        <div className="relative w-[30px] h-[30px] flex">
          <Image src="/logo.png" fill className="object-contain" alt="logo" />
        </div>
        <div className="z-50 flex flex-col gap-y-7">
          <div className="hover:dark:bg-zinc-900 p-2 rounded-sm duration-150">
            <Home />
          </div>
          <div className="hover:dark:bg-zinc-900 p-2 rounded-sm duration-150">
            <UserRoundSearch />
          </div>
          <div className="hover:dark:bg-zinc-900 p-2 rounded-sm duration-150">
            <Mail />
          </div>
          <div className="hover:dark:bg-zinc-900 p-2 rounded-sm duration-150">
            <Send />
          </div>
          <div className="hover:dark:bg-zinc-900 p-2 rounded-sm duration-150">
            <List />
          </div>
          <div className="hover:dark:bg-zinc-900 p-2 rounded-sm duration-150">
            <Inbox />
          </div>
          <div className="hover:dark:bg-zinc-900 p-2 rounded-sm duration-150">
            <BarChart />
          </div>
        </div>
        <div className="pb-3">
          <Avatar>
            <AvatarImage
              src={
                session?.user?.image
                  ? session?.user?.image
                  : "https://github.com/shadcn.png"
              }
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
};
