"use client";

import { Navbar } from "../../_components/Navbar";
import { Sidebar } from "../../_components/Sidebar";
import { Workspace } from "../_components/Workspace";
import { useParams } from "next/navigation";

const Inbox = () => {
  return (
    <>
      <div className="dark:bg-black h-dvh bg-zinc-100">
        <Sidebar inbox />
        <Navbar />
        <Workspace />
      </div>
    </>
  );
};

export default Inbox;
