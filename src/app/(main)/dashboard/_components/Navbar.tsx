"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  return (
    <>
      <div className="fixed w-dvw pl-16 h-14 dark:bg-[#1F1F1F] bg-gray-200 flex items-center justify-between pr-3">
        <div className="font-semibold">Onebox</div>
        <div className="flex gap-3">
          <ModeToggle />
          <ChevronDown />
        </div>
      </div>
    </>
  );
};
