'use client';

import { useInitToken, useToken } from "@/store/tokenStore";
import { menuList } from "@/utils/Menu";
import Link from "next/link";

const MainNav = () => {
  useInitToken();
  const token = useToken((state) => state.token);
  const setToken = useToken((state) => state.setToken);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setToken('');
  };

  return (
    <nav className="w-full max-w-[1920px] h-[100px] flex items-center px-[50px] justify-between bg-[#F5F5F5] bg-opacity-60 fixed z-10">
      <Link href={"/"}>
        <p className="text-[40px] leading-[50px] text-[#111111] font-medium">
          TripMate
        </p>
      </Link>
      <ul className="flex text-[22px] text-[#353535] font-medium leading-[22px] gap-[70px]">
        {menuList.map((menu) => (
          <Link key={menu.id} href={menu.link}>
            <li>{menu.name}</li>
          </Link>
        ))}
      </ul>
      {!token ? <Link href={"/login"}>
        <div className="w-[165.33px] flex justify-end self-start">
          <div className="h-[40px] border border-[rgba(0,0,0,0.5)] rounded-[38px] flex items-center justify-center leading-0 px-[22px] py-[9px]">
            <p className="font-bold text-[18px] text-[#353535] leading-[22px]">
              Login
            </p>
          </div>
        </div>
      </Link> : <div className="cursor-pointer" onClick={logout}>로그아웃</div>}
    </nav>
  );
};

export default MainNav;
