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
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ActiveProps {
  home?: boolean;
  userSearch?: boolean;
  mail?: boolean;
  send?: boolean;
  list?: boolean;
  inbox?: boolean;
  barChart?: boolean;
}

export const Sidebar = ({
  home,
  userSearch,
  mail,
  send,
  list,
  inbox,
  barChart,
}: ActiveProps) => {
  return (
    <>
      <div className="fixed h-dvh dark:bg-[#101113] bg-gray-300 z-10 w-14 flex flex-col items-center pt-3 justify-between">
        <div className="relative w-[30px] h-[30px] flex">
          <Image src="/logo.png" fill className="object-contain" alt="logo" />
        </div>
        <div className="z-50 flex flex-col gap-y-7">
          <div
            className={cn(
              "hover:dark:bg-zinc-800 p-2 rounded-md duration-150 hover:bg-gray-400",
              home && "dark:bg-zinc-800 bg-gray-400"
            )}
          >
            <Home />
          </div>
          <div
            className={cn(
              "hover:dark:bg-zinc-800 p-2 rounded-md duration-150 hover:bg-gray-400",
              userSearch && "dark:bg-zinc-800 bg-gray-400"
            )}
          >
            <UserRoundSearch />
          </div>
          <div
            className={cn(
              "hover:dark:bg-zinc-800 p-2 rounded-md duration-150 hover:bg-gray-400",
              mail && "dark:bg-zinc-800 bg-gray-400"
            )}
          >
            <Mail />
          </div>
          <div
            className={cn(
              "hover:dark:bg-zinc-800 p-2 rounded-md duration-150 hover:bg-gray-400",
              send && "dark:bg-zinc-800 bg-gray-400"
            )}
          >
            <Send />
          </div>
          <div
            className={cn(
              "hover:dark:bg-zinc-800 p-2 rounded-md duration-150 hover:bg-gray-400",
              list && "dark:bg-zinc-800 bg-gray-400"
            )}
          >
            <List />
          </div>
          <Link
            href="/dashboard/inbox"
            className={cn(
              "hover:dark:bg-zinc-800 p-2 rounded-md duration-150 hover:bg-gray-400",
              inbox && "dark:bg-zinc-800 bg-gray-400"
            )}
          >
            <Inbox />
          </Link>
          <div
            className={cn(
              "hover:dark:bg-zinc-800 p-2 rounded-md duration-150 hover:bg-gray-400",
              barChart && "dark:bg-zinc-800 bg-gray-400"
            )}
          >
            <BarChart />
          </div>
        </div>
        <div className="pb-3">
          <Avatar>
            <AvatarImage src={"https://github.com/shadcn.png"} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
};
