import React from "react";
import TopBanner from "./_components/TopBanner";
import MainItemList from "./_components/MainItemList";
import MoreButton from "./_components/MoreButton";
import MainSearch from "./_components/MainSearch/MainSearch";
import MainBackground from "./_components/MainBackground";

const MainPage = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <MainBackground />
      <TopBanner />
      <MainSearch />
      <MainItemList />
      <MoreButton />
    </div>
  );
};

export default MainPage;
