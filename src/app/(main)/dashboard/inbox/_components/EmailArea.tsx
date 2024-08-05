"use client";

import { Button } from "@/components/ui/button";
import { Dot } from "@/components/ui/dot";
import { IEmail } from "@/redux/features/data-slice";
import { Separator } from "@radix-ui/react-separator";
import {
  ChevronDown,
  Clock,
  Ellipsis,
  Mail,
  MailOpen,
  Pencil,
  Trash,
  UnfoldVertical,
  UserRoundMinus,
} from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "next-client-cookies";
import { Email } from "./Email";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface EmailProp {
  email?: IEmail;
  threadId?: string;
  setToggleDelete?: Function;
}

export const EmailArea = ({ email, threadId, setToggleDelete }: EmailProp) => {
  const { theme } = useTheme();
  const date = email?.sentAt ? new Date(email?.sentAt) : null;
  const formatedDate = date
    ? date?.toDateString().split(" ")[1] +
      " " +
      Number(date?.toDateString().split(" ")[2])
    : "Date";

  const wholeDate = date
    ? Number(date?.toDateString().split(" ")[2]) +
      " " +
      date?.toDateString().split(" ")[1] +
      " " +
      date?.toDateString().split(" ")[3] +
      " : " +
      date?.toLocaleTimeString("en-US", {
        timeZone: "UTC",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
      })
    : "Date";

  const [replies, setReplies] = useState<Array<IEmail>>();
  const [toggleReplies, setToggleReplies] = useState<boolean>(false);
  const cookies = useCookies();
  const token = cookies.get("token");

  const getReplies = async () => {
    const response = await axios.get(
      `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setReplies([...response.data.data]);
  };

  useEffect(() => {
    getReplies();
  }, []);

  return (
    <>
      <div>
        <div className="flex items-center justify-between p-4 border-b-[1px]">
          <div className="text-sm">
            <div className="font-bold">{email?.fromName}</div>
            <div className="font-light text-zinc-500">{email?.fromEmail}</div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Button className="flex gap-2 dark:bg-zinc-800 dark:border-zinc-600 border-[1px] border-zinc-300 bg-zinc-100">
              <Dot variant="interested" size="large" />
              <div className="dark:text-white text-black">Interested</div>
              {theme == "dark" ? (
                <ChevronDown color="white" />
              ) : (
                <ChevronDown color="black" />
              )}
            </Button>
            <Button className="dark:bg-zinc-800 dark:border-zinc-600 border-[1px] dark:text-white text-black border-zinc-300 bg-zinc-100">
              Move
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className="dark:bg-zinc-800 dark:border-zinc-600 border-[1px] border-zinc-300 bg-zinc-100 p-3">
                  {theme == "dark" ? (
                    <Ellipsis size={20} color="white" />
                  ) : (
                    <Ellipsis size={20} color="black" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {email?.isRead === false ? (
                  <DropdownMenuLabel className="flex items-center gap-2 cursor-pointer">
                    <MailOpen size={20} /> Mark as unread
                  </DropdownMenuLabel>
                ) : (
                  <DropdownMenuLabel className="flex items-center gap-2 cursor-pointer">
                    <Mail size={20} /> Mark as read
                  </DropdownMenuLabel>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="flex items-center gap-2 cursor-pointer">
                  <Pencil size={20} /> Edit lead
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="flex items-center gap-2 cursor-pointer">
                  <UserRoundMinus size={20} /> Remove lead
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="flex items-center gap-2 cursor-pointer">
                  <Clock size={20} /> Set reminder
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel
                  onClick={() => setToggleDelete(true)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Trash size={20} /> Delete
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <ScrollArea className="h-[calc(100dvh-128.8px)]">
          <div>
            <div className="relative">
              <Separator className="border-[0.1px] m-5" />
              <div className="absolute -top-[8px] left-1/2 -translate-x-1/2 text-[11px] bg-zinc-800 py-[1px] px-2 rounded-sm text-zinc-300">
                {formatedDate}
              </div>
            </div>
            <Email email={email} />
            {!toggleReplies && (
              <div className="relative cursor-pointer">
                <Separator className="border-[0.1px] m-5" />
                <div
                  className="absolute -top-[8px] left-1/2 -translate-x-1/2 text-[11px] bg-zinc-800 py-[1px] px-2 rounded-sm text-zinc-300 flex gap-1 items-center hover:bg-zinc-900 duration-75 transition-all"
                  onClick={() => {
                    setToggleReplies(true);
                  }}
                >
                  <UnfoldVertical size={15} />
                  <div>
                    View all{" "}
                    <span className="text-blue-500 font-bold">
                      {replies?.length}
                    </span>{" "}
                    replies
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="pb-14">
            {toggleReplies &&
              replies?.map((r, id) => {
                return (
                  <React.Fragment key={id}>
                    <Email reply={true} email={r} />
                  </React.Fragment>
                );
              })}
          </div>
        </ScrollArea>
      </div>
    </>
  );
};
