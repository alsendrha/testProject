"use client";

import { useInitToken, useToken } from "@/store/tokenStore";
import NevMenuIcon from "@/utils/svg/NevMenuIcon";
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
            <div className="h-[40px] border border-[rgba(0,0,0,0.5)] hover:bg-[#FBFFE6] group hover:border-[#AED400] rounded-[38px] flex items-center justify-center leading-0 px-[22px] py-[9px]">
              <p className="font-bold text-[18px] group-hover:text-[#AED400] text-[#353535] leading-[22px]">
                Login
              </p>
            </div>
          </div>
        </Link>
      ) : (
        <div className="w-[162.5px] flex gap-[10px] justify-end">
          <div className="w-10 h-10 rounded-full group hover:border-[#AED400] hover:bg-[#FBFFE6] cursor-pointer flex items-center justify-center border border-[#777777]">
            <NevMenuIcon />
          </div>
          <div
            className="h-[40px] hover:bg-[#FBFFE6] group hover:border-[#AED400] border cursor-pointer border-[rgba(0,0,0,0.5)] rounded-[38px] flex items-center justify-center leading-0 px-[22px] py-[9px]"
            onClick={logout}
          >
            <p className="font-bold text-[18px] group-hover:text-[#AED400] text-[#353535] leading-[22px]">
              Logout
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default NavLoginButton;
