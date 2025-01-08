import { CategoryList } from "@/utils/Menu";
import React from "react";

type SearchMenuListProps = {
  setCategoryName: (name: string) => void;
  setMenuOpen: (open: boolean) => void;
};

const SearchMenuList = ({
  setCategoryName,
  setMenuOpen,
}: SearchMenuListProps) => {
  return (
    <div className="absolute top-[60px] flex flex-col py-3 items-center bg-white border rounded-[20px] w-[160px] z-20">
      {CategoryList.map((category) => (
        <div
          className="cursor-pointer font-medium py-[6px]"
          key={category.code}
          onClick={() => {
            setCategoryName(category.name);
            setMenuOpen(false);
          }}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default SearchMenuList;
