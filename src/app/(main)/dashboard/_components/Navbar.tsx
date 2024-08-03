"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

export const Navbar = () => {
  const { data: session } = useSession();
  // if (session) {
  //   return (
  //     <>
  //       <p>Signed in as {session.user.email}</p>
  //       <br />
  //       <Button onClick={() => signOut()}>Sign out</Button>
  //     </>
  //   );
  // }
  console.log(session);
  return (
    <>
      <div className="fixed w-dvw pl-16 h-14 dark:bg-[#1F1F1F] bg-gray-200 flex items-center justify-between pr-3">
        <div className="font-semibold">Onebox</div>
        <div className="flex gap-3">
          <ModeToggle />
          <p>{session?.user.name?.split(" ")[0]}'s Workspace</p>
          <ChevronDown />
        </div>
      </div>
    </>
  );
};
