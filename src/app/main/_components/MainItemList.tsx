import React from "react";
import MenuItem from "./MenuItem";
import { itemList } from "@/utils/Menu";

const MainItemList = () => {
  return (
    <div className="w-full flex justify-center gap-[40px] flex-wrap mt-[111px]">
      {itemList.slice(0, 4).map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MainItemList;
