import React from "react";

type MainSearchInputProps = {
  searchText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const MainSearchInput = ({
  searchText,
  onChange,
  onKeyDown,
}: MainSearchInputProps) => {
  return (
    <input
      type="text"
      value={searchText}
      className="pl-[16px] font-medium text-[18px] outline-none w-[373px]"
      placeholder="검색어를 입력하세요"
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default MainSearchInput;
