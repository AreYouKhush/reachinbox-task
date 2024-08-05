import { Button } from "@/components/ui/button";
import { IEmail } from "@/redux/features/data-slice";
import {
  ChevronDown,
  Code,
  Eye,
  Image,
  LetterText,
  Paperclip,
  UserRoundMinus,
  X,
  Zap,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import "./custom.css";
import axios from "axios";
import { useCookies } from "next-client-cookies";

interface ReplyAreaProps {
  email?: IEmail;
  setToggleReply?: Function;
}

const ReplyArea = ({ email, setToggleReply }: ReplyAreaProps) => {
  const [subject, setSubject] = useState<string>();
  const [desc, setDesc] = useState<string>();
  const cookies = useCookies();
  const token = cookies.get("token");

  const handleReply = async () => {
    const mail = {
      toName: email?.toName,
      to: email?.toEmail,
      from: email?.fromEmail,
      fromName: email?.fromName,
      subject: subject,
      body: desc,
      references: [email?.references],
      isReplyTo: null,
    };
    console.log(JSON.stringify(mail));
    const response = await axios.post(
      `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${email?.threadId}`,
      mail,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
  };

  useEffect(() => {
    console.log({ subject, desc });
  }, [subject]);

  return (
    <div className="dark:bg-zinc-800 bg-zinc-200 rounded-lg border-[1px] dark:border-zinc-600 border-zinc-300 text-[12px] shadow-md shadow-white/10">
      <div className="flex justify-between dark:bg-zinc-700 bg-zinc-300 pl-7 pr-2 py-2 items-center border-b-[1px] dark:border-zinc-600 border-zinc-300 rounded-lg">
        <div>Reply</div>
        <X
          size={20}
          className="cursor-pointer"
          onClick={() => setToggleReply?.(false)}
        />
      </div>
      <div className="pl-7 py-2 border-b-[1px] dark:border-zinc-600 border-zinc-300 flex gap-2">
        <span className="text-zinc-600">To:</span>
        {email?.toEmail}
      </div>
      <div className="pl-7 py-2 border-b-[1px] dark:border-zinc-600 border-zinc-300 flex gap-2">
        <span className="text-zinc-600">From:</span>
        {email?.fromEmail}
      </div>
      <div className="pl-7 py-2 border-b-[1px] dark:border-zinc-600 border-zinc-300 flex gap-2">
        <span className="text-zinc-600">Subject:</span>
        <input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="appearance-none border-none bg-transparent outline-none w-full placeholder-gray-400 focus:ring-0"
        />
      </div>
      <div className="pl-7 pt-4 h-[300px]">
        <textarea
          placeholder="E-mail Body"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="appearance-none border-none bg-transparent outline-none w-full placeholder-gray-400 focus:ring-0 resize-none px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 h-[280px] custom-textarea"
        />
      </div>
      <div className="border-t-[1px] border-zinc-500 pl-3 py-2 flex gap-4 items-center">
        <div>
          <Button
            onClick={() => {
              handleReply();
            }}
            className="bg-gradient-to-r from-[#4B63DD] to-[#0524BF] text-white flex gap-4 px-6 font-bold items-center justify-center"
          >
            Send
            <ChevronDown size={15} fill="white" />
          </Button>
        </div>
        <div className="flex gap-2 items-center text-[15px] hover:bg-zinc-300 dark:hover:bg-zinc-900 rounded-md px-2 py-1">
          <Zap fill="white" size={20} />
          Variables
        </div>
        <div className="flex gap-2 items-center text-[15px] hover:bg-zinc-300 dark:hover:bg-zinc-900 rounded-md px-2 py-1">
          <Eye size={20} />
          Preview Email
        </div>
        <LetterText
          className="hover:bg-zinc-300 dark:hover:bg-zinc-900 rounded-md p-1"
          size={30}
        />
        <Paperclip
          className="hover:bg-zinc-300 dark:hover:bg-zinc-900 rounded-md p-1"
          size={30}
        />
        <Image
          className="hover:bg-zinc-300 dark:hover:bg-zinc-900 rounded-md p-1"
          size={30}
        />
        <UserRoundMinus
          className="hover:bg-zinc-300 dark:hover:bg-zinc-900 rounded-md p-1"
          size={30}
        />
        <Code
          className="hover:bg-zinc-300 dark:hover:bg-zinc-900 rounded-md p-1"
          size={30}
        />
      </div>
    </div>
  );
};

export default ReplyArea;
