"use client";

import { useToken } from "@/store/tokenStore";
import { useEffect, useState } from "react";
import { getPlanList } from "../../_api";
import PlanItemListTitle from "./PlanItemListTitle";
import PlanListItem from "./PlanListItem";
import PlanListPagination from "./PlanListPagination";

const PlanItemList = () => {
  const { token } = useToken();
  const [planList, setPlanList] = useState<any>([]);
  useEffect(() => {
    const planList = async () => {
      const planData = await getPlanList(token);
      console.log("나와라", planData);
      setPlanList(planData);
    };
    planList();
  }, []);

  const items = [
    {
      id: 1,
      title: "즐거운 강릉 여행♡",
      date: "2025.01.01 - 2025.02.03",
      day: "3",
      createdDate: "2025.01.01 13:00",
    },
    {
      id: 2,
      title: "즐거운 강릉 여행♡",
      date: "2025.01.01 - 2025.02.02",
      day: "2",
      createdDate: "2025.01.01 13:00",
    },
    {
      id: 3,
      title: "즐거운 강릉 여행♡",
      date: "2025.01.01 - 2025.02.02",
      day: "4",
      createdDate: "2025.01.01 13:00",
    },
  ];

  return (
    <div className="w-full pt-[30px]">
      <PlanItemListTitle />
      {items.map((item) => (
        <PlanListItem
          key={item.id}
          item={item}
          onClick={() => console.log(item.id)}
        />
      ))}
      <PlanListPagination />
    </div>
  );
};

export default PlanItemList;
