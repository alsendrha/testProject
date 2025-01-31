"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getData } from "../main/_api";
import Skeleton from "../main/_components/Skeleton";
import PlaceBanner from "./_components/placeBanner/PlaceBanner";
import ContentList from "./_components/placeContent/contentList/ContentList";
import DropList from "./_components/placeContent/dropList/DropList";

const PlacePage = () => {
  const params = useSearchParams();
  const [tourList, setTourList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [listType, setListType] = useState(Number(params.get("ct")) || 12);
  const [keyword, setKeyword] = useState(params.get("kd")?.toString() ?? "");
  const [rankingName, setRankingName] = useState({
    name: "제목순",
    value: "A",
  });
  const [numOfRowName, setNumOfRowName] = useState({
    name: "8개씩 보기",
    value: 8,
  });

  const getTourList = async () => {
    try {
      setIsLoading(true);
      const data = await getData({
        keyword: keyword,
        arrange: rankingName.value,
        numOfRows: numOfRowName.value,
        pageNo: 1,
        contentTypeId: listType,
      });
      setIsLoading(false);
      setTourList(data ?? []);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTourList();
  }, [rankingName, numOfRowName]);

  return (
    <div className="pt-[100px]">
      <PlaceBanner
        keyword={keyword}
        setKeyword={setKeyword}
        setListType={setListType}
        onClick={getTourList}
      />
      <div className="w-full flex justify-center px-[30px]">
        <div className="w-[1440px] flex flex-col items-center justify-center pt-[40px]">
          <DropList
            rankingName={rankingName}
            setRankingName={setRankingName}
            numOfRowName={numOfRowName}
            setNumOfRowName={setNumOfRowName}
          />
          <div className="pt-[40px] pb-[150px] flex justify-center items-center gap-[40px] flex-wrap">
            {isLoading ? (
              <Skeleton length={8} skeletonType="place" />
            ) : (
              <ContentList tourList={tourList} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacePage;
