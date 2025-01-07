import Position from "@/utils/svg/Position";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type MenuItemProps = {
  item: {
    id: number;
    name: string;
    address: string;
    image: string;
    link: string;
  };
};

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <Link href={item.link}>
      <div className="w-[330px] h-[500px] rounded-[20px] relative overflow-hidden">
        <Image
          src={item.image}
          className="object-cover"
          fill
          sizes="1"
          alt="메뉴 이미지"
        />
      </div>
      <div className="mt-[20px]">
        <p className="text-[22px] font-suitExtraBold">{item.name}</p>
        <div className="flex items-center">
          <Position />
          <p className="text-[16px] ml-[4px] font-suitMedium">{item.address}</p>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
