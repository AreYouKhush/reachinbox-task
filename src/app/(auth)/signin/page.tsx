"use client";

import { jwtDecode, JwtPayload } from "jwt-decode";
import { Footer } from "./_components/Footer";
import { LoginSignUp } from "./_components/LoginSignUp";
import { Navbar } from "./_components/Navbar";
import { redirect, useSearchParams } from "next/navigation";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useCookies } from "next-client-cookies";
import { useEffect } from "react";

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cookies = useCookies();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode<any>(token);
      dispatch(logIn(decoded));
      cookies.set("token", token);
      redirect("/dashboard");
    }
  }, []);
  return (
    <>
      <div className="bg-black flex flex-col justify-between items-center h-dvh">
        <Navbar />
        <LoginSignUp />
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;
