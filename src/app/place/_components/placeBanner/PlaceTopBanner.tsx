"use client";

import { getData } from "@/app/main/_api";
import MainSearch from "@/app/main/_components/MainSearch/MainSearch";
import { useEffect, useState } from "react";
import PlaceAreaList from "./placeAreaList/PlaceAreaList";
import PlaceBannerTitle from "./PlaceBannerTitle";

const PlaceTopBanner = () => {
  const [menuName, setMenuName] = useState("전국");
  const [isLoading, setIsLoading] = useState(false);
  const [placeList, setPlaceList] = useState([]);
  const [listType, setListType] = useState(12);
  const [searchText, setSearchText] = useState("");
  const getTourList = async () => {
    try {
      setIsLoading(true);
      const data = await getData({
        keyword: "서울",
        arrange: "A",
        numOfRows: 4,
        pageNo: 1,
        contentTypeId: listType,
      });
      setPlaceList(data.response.body.items.item);
      console.log(data.response.body.items.item);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTourList();
  }, []);

  return (
    <div className="w-full h-[485px] bg-[#AED400] bg-opacity-10 flex items-center justify-center">
      <div className="py-[100px]">
        <div className="flex flex-col items-center">
          <PlaceBannerTitle menuName={menuName} />
          <div className="mt-[55px]">
            <MainSearch
              searchText={searchText}
              setSearchText={setSearchText}
              setListType={setListType}
              onClick={() => console.log("플레이스", listType)}
            />
          </div>
          <PlaceAreaList setMenuName={setMenuName} />
        </div>
      </div>
    </div>
  );
};

export default PlaceTopBanner;
