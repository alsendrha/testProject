"use client";

import { useState } from "react";
import Categories from "./Categories";
import CloseButton from "./CloseButton";
import MainSearchInput from "./MainSearchInput";
import SearchButton from "./SearchButton";
import SearchMenuList from "./SearchMenuList";

type MainSearchProps = {
  searchText: string;
  setSearchText: (text: string) => void;
  onClick: () => void;
  setListType?: (listType: number) => void;
};

const MainSearch = ({
  searchText,
  setSearchText,
  onClick,
  setListType,
}: MainSearchProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("카테고리");

  return (
    <div className="h-[60px] bg-white flex items-center py-[13px] border-[#353535] rounded-[10px] border-[2px] pr-[12px] relative">
      <Categories
        categoryName={categoryName}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <div className="w-[1px] h-full bg-[#CCCCCC]" />
      <MainSearchInput
        searchText={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <CloseButton
        searchText={searchText}
        onClick={() => {
          if (searchText === "") return;
          setSearchText("");
        }}
      />
      <SearchButton onClick={onClick} />
      {menuOpen && (
        <SearchMenuList
          setListType={setListType}
          setCategoryName={setCategoryName}
          setMenuOpen={setMenuOpen}
        />
      )}
    </div>
  );
};

export default MainSearch;
