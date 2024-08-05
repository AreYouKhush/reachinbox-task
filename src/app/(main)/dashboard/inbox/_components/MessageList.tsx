import { Button } from "@/components/ui/button";
import { ChevronDown, RotateCw } from "lucide-react";
import { useTheme } from "next-themes";
import { SearchBar } from "./search";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@radix-ui/react-separator";
import { EmailSidebar } from "./EmailSidebar";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";
import { ScrollArea } from "@/components/ui/scroll-area";

export const MessageList = () => {
  const { theme } = useTheme();
  let data = useAppSelector((state) => state.email.emails);

  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex text-xl font-bold text-blue-400">
              <div>All Inbox(s)</div>
              <ChevronDown />
            </div>
            <Button className="dark:bg-zinc-700 bg-gray-100 border-gray-400 border p-0 w-[30px] h-[30px] dark:border-none">
              {theme == "light" ? (
                <RotateCw className="w-[13px]" color="black" />
              ) : (
                <RotateCw className="w-[13px]" color="white" />
              )}
            </Button>
          </div>
          <div className="text-sm">
            <span className="font-bold">
              {data?.length || "0"}/{data?.length || "0"}
            </span>{" "}
            <span className="text-gray-500">Inboxes selected</span>
          </div>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Badge className="dark:bg-zinc-700 text-blue-400 text-[15px]">
              26
            </Badge>
            <div className="text-[15px]">New Replies</div>
          </div>
          <div className="text-[15px] flex items-center gap-3">
            Newest
            <ChevronDown size={16} />
          </div>
        </div>
        <ScrollArea className="flex flex-col gap-1 h-[calc(100dvh-260px)]">
          {data?.map((d, id) => {
            return (
              <React.Fragment key={id}>
                <Separator className="border-[1px] border-zinc-800" />
                <Link href={`/dashboard/inbox/${d?.id}`}>
                  <EmailSidebar data={d} />
                </Link>
              </React.Fragment>
            );
          })}
        </ScrollArea>
      </div>
    </>
  );
};
