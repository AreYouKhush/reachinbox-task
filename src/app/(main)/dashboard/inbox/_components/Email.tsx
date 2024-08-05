import { IEmail } from "@/redux/features/data-slice";
import React from "react";
import parse from "html-react-parser";
import { Separator } from "@/components/ui/separator";

interface EmailProp {
  email?: IEmail;
  reply?: boolean;
}

export const Email = ({ email, reply }: EmailProp) => {
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

  return (
    <>
      {reply && (
        <div className="relative flex justify-center">
          <Separator className="border-[0.1px] w-[95%]" />
          <div className="absolute -top-[8px] left-1/2 -translate-x-1/2 text-[11px] bg-zinc-800 py-[1px] px-2 rounded-sm text-zinc-300">
            {formatedDate}
          </div>
        </div>
      )}
      <div className="m-6 bg-zinc-800 rounded-md border-[1px] border-zinc-600 text-[12px] p-4 flex flex-col gap-2">
        <div className="flex justify-between">
          <div>{email?.subject}</div>
          <div className="text-zinc-500">{wholeDate}</div>
        </div>
        <div className="text-zinc-500">from: {email?.fromEmail}</div>
        <div className="text-zinc-500">to: {email?.toEmail}</div>
        <div>{parse(String(email?.body)) || " "}</div>
      </div>
    </>
  );
};
