"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const LoginSignUp = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white bg-[#121212] m-3 gap-11 rounded-md border-[1px] border-gray-800 p-5 pb-7 sm:w-[450px] w-[300px]">
        <div className="w-full flex items-center justify-center flex-col gap-5">
          <div>Create a new account</div>
          <Link
            href="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/signin"
            className="w-full flex justify-center"
          >
            <Button className="flex gap-2 w-10/12 border-[1px] border-gray-600">
              <div className="relative w-[25px] h-[25px] flex">
                <Image
                  src="/google.png"
                  fill
                  className="object-contain"
                  alt="Google"
                />
              </div>
              Sign Up with Google
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-center flex-col gap-3">
          <Button className="bg-gradient-to-r from-[#4B63DD] to-[#0524BF] px-8 py-6 gap-2 group w-40 hover:w-48 hover:px-2 transition-all duration-300">
            <ArrowRight className="w-0 group-hover:w-[20px] transition-all duration-200" />
            Create an Account
          </Button>
          <div className="text-gray-500">
            Already have an account?{" "}
            <span className="text-gray-300">Sign In</span>
          </div>
        </div>
      </div>
    </>
  );
};
