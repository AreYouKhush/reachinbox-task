"use client";

import { logIn, logOut } from "@/redux/features/auth-slice";
import { AppDispatch } from "@/redux/store";
import { jwtDecode } from "jwt-decode";
import { useCookies } from "next-client-cookies";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const dispatch = useDispatch<AppDispatch>();
  const cookies = useCookies();
  const token = cookies.get("token");

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode<any>(token);
      if (Date.now() / 1000 > decoded.exp) {
        dispatch(logOut());
        console.log("Expired");
      }
      dispatch(logIn(decoded));
      redirect("/dashboard");
    }
  }, []);

  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default LoginLayout;
