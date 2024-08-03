"use client";

import Image from "next/image";

export const Navbar = () => {
  return (
    <>
      <div className="bg-black flex items-center justify-center border-b-[1px] border-gray-800 w-full">
        <div className="relative w-[130px] h-[60px] sm:w-[160px] md:w-[170px] flex items-center">
          <Image src="/image.png" fill className="object-contain" alt="Logo" />
        </div>
      </div>
    </>
  );
};
