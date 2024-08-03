"use client";

import { Footer } from "./_components/Footer";
import { LoginSignUp } from "./_components/LoginSignUp";
import { Navbar } from "./_components/Navbar";

const LoginPage = () => {
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
