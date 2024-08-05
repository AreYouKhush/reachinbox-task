import { CommandIcon, Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <>
      <div className="flex w-full dark:bg-zinc-800 px-2 py-1 rounded-md border-[1px] border-zinc-600 items-center justify-between">
        <div className="flex gap-2 items-center">
          <Search color="#52525b" size={16} />
          <div className="text-zinc-600 text-[15px]">Search</div>
        </div>
        <div className="text-zinc-600 text-[15px] flex items-center gap-1">
          <CommandIcon color="#52525b" size={16} /> k
        </div>
      </div>
    </>
  );
};
