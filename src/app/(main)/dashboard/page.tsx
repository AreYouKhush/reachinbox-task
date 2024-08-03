"use client";

import { Hero } from "./_components/Hero";
import { Navbar } from "./_components/Navbar";
import { Sidebar } from "./_components/Sidebar";

const LoginPage = () => {
  return (
    <>
      <div className="dark:bg-black h-dvh bg-zinc-100">
        <Sidebar />
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default LoginPage;
