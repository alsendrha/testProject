import { menuList } from "@/utils/Menu";
import Link from "next/link";
import React from "react";

const MainNav = () => {
  return (
    <nav className="w-full max-w-[1920px] text-white h-[100px] flex items-center px-[50px] justify-between bg-[rgba(0,0,0,0.1)] absolute z-10">
      <Link href={"/"}>
        <p className="text-[40px] leading-[50px] font-suitMedium">TripMate</p>
      </Link>
      <ul className="flex text-[22px] font-suitMedium leading-[22px] gap-[70px]">
        {menuList.map((menu, index) => (
          <Link key={index} href={"/menu"}>
            <li>{menu}</li>
          </Link>
        ))}
      </ul>
      <Link href={"/login"}>
        <div className="w-[165.33px] flex justify-end self-start">
          <div className="h-[40px] border rounded-[38px] flex items-center justify-center leading-0 px-[22px] py-[9px]">
            <p className="font-suitBold text-[18px] leading-[22px]">Login</p>
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default MainNav;
