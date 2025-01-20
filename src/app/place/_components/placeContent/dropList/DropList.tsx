"use client";

import { useState } from "react";
import DropDown from "./dropMenu/DropDown";
import MenuList from "./dropMenu/MenuList";

const DropList = () => {
  const [numOfRowOpen, setNumOfRowOpen] = useState(false);
  const [rankingOpen, setRankingOpen] = useState(false);
  const [rankingName, setRankingName] = useState("최신순");
  const [numOfRowName, setNumOfRowName] = useState("14개씩 보기");
  return (
    <div className="w-full flex gap-[10px] justify-end items-center">
      <div className="relative">
        <DropDown
          type="ranking"
          title={rankingName}
          onClick={() => setRankingOpen(!rankingOpen)}
        />
        {rankingOpen && (
          <MenuList
            setRankingOpen={setRankingOpen}
            rankingOpen={rankingOpen}
            setRankingName={setRankingName}
            rankingName={rankingName}
          />
        )}
      </div>
      <div className="relative">
        <DropDown
          type="numOfRow"
          title={numOfRowName}
          onClick={() => setNumOfRowOpen(!numOfRowOpen)}
        />
        {numOfRowOpen && (
          <MenuList
            setNumOfRowOpen={setNumOfRowOpen}
            numOfRowOpen={numOfRowOpen}
            setNumOfRowName={setNumOfRowName}
            numOfRowName={numOfRowName}
          />
        )}
      </div>
    </div>
  );
};

export default DropList;
