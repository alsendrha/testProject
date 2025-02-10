"use client";

import { useInitToken, useToken } from "@/store/tokenStore";
import Link from "next/link";

const NavLoginButton = () => {
  useInitToken();
  const token = useToken((state) => state.token);
  const setToken = useToken((state) => state.setToken);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setToken("");
  };
  return (
    <>
      {!token ? (
        <Link href={"/login"}>
          <div className="w-[162.5px] flex justify-end self-start">
            <div className="h-[40px] border border-[rgba(0,0,0,0.5)] rounded-[38px] flex items-center justify-center leading-0 px-[22px] py-[9px]">
              <p className="font-bold text-[18px] text-[#353535] leading-[22px]">
                Login
              </p>
            </div>
          </div>
        </Link>
      ) : (
        <div className="w-[162.5px]  flex justify-end">
          <div className="cursor-pointer" onClick={logout}>
            로그아웃
          </div>
        </div>
      )}
    </>
  );
};

export default NavLoginButton;
