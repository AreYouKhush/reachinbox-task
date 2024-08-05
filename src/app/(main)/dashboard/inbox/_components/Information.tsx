import { IEmail } from "@/redux/features/data-slice";
import React from "react";
import { Mail, Send } from "lucide-react";

interface InformationProps {
  email: IEmail;
}

const Information = ({ email }: InformationProps) => {
  return (
    <div className="pt-4">
      <div className="px-2 flex flex-col gap-5">
        <div className="dark:bg-zinc-800 bg-zinc-200 p-2 px-3 rounded-lg font-bold">
          Lead Details
        </div>
        <div className="flex justify-between text-sm">
          <div className="text-zinc-600 dark:text-white">Name</div>
          <div className="text-zinc-900 dark:text-zinc-300">
            {email?.fromName}
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <div className="text-zinc-600 dark:text-white">Contact No</div>
          <div className="text-zinc-900 dark:text-zinc-300">+54-9062827869</div>
        </div>
        <div className="flex justify-between text-sm">
          <div className="text-zinc-600 dark:text-white">Email Id</div>
          <div className="text-zinc-900 dark:text-zinc-300">
            {email?.fromEmail}
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <div className="text-zinc-600 dark:text-white">LinekedI</div>
          <div className="text-zinc-900 dark:text-zinc-300">
            linkedin.com/in/{email?.fromName.split(" ")[0].toLowerCase()}
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <div className="text-zinc-600 dark:text-white">Compant</div>
          <div className="text-zinc-900 dark:text-zinc-300">Reachinbox</div>
        </div>
      </div>
      <div className="px-2 flex flex-col gap-5 pt-5">
        <div className="dark:bg-zinc-800 bg-zinc-200 p-2 px-3 rounded-lg font-bold">
          Activities
        </div>
        <div className="px-5 font-light text-sm">Campaign Name</div>
        <div className="px-5 font-light text-sm flex flex-col gap-8">
          <div>3 Steps | 2 days is Sequence</div>
          <div className="flex items-center gap-4">
            <div className="dark:bg-zinc-800 bg-zinc-200 rounded-full p-3">
              <Mail size={20} />
            </div>
            <div>
              <div className="font-bold">Step 1: Email</div>
              <div className="flex gap-3 items-center">
                <Send size={15} />
                Sent 3rd, Feb
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="dark:bg-zinc-800 bg-zinc-200 rounded-full p-3">
              <Mail size={20} />
            </div>
            <div>
              <div className="font-bold">Step 1: Email</div>
              <div className="flex gap-3 items-center">
                <Send size={15} />
                Sent 5th, Feb
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="dark:bg-zinc-800 bg-zinc-200 rounded-full p-3">
              <Mail size={20} />
            </div>
            <div>
              <div className="font-bold">Step 1: Email</div>
              <div className="flex gap-3 items-center">
                <Send size={15} />
                Sent 7th, Feb
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
