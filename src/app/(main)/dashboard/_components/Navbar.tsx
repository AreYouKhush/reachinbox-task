"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { useAppSelector } from "@/redux/store";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const firstName =
    useAppSelector((state) => state.authReducer.value.firstname) || "Null";
  return (
    <>
      <div className="fixed w-dvw pl-16 h-14 dark:bg-[#1F1F1F] bg-gray-100 flex items-center justify-between pr-3 z-[9] border-b-[1px]">
        <Link href="/dashboard" className="font-semibold">
          Onebox
        </Link>
        <div className="flex gap-3">
          <ModeToggle />
          <p>{firstName}&apos;s Workspace</p>
          <ChevronDown />
        </div>
      </div>
    </>
  );
};
