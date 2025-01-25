"use client";
import { format } from "date-fns";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import PlanButton from "../PlanButton";
import PlanDateSelect from "./PlanDateSelect";
import PlanInput from "./PlanInput";

export type PlanDataTypes = {
  planTitle: string;
  startDate: string;
  endDate: string;
};

const PlanCreateContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [planData, setPlanData] = useState<PlanDataTypes>({
    planTitle: "",
    startDate: format(new Date(), "yyyy-MM-dd"),
    endDate: format(new Date(), "yyyy-MM-dd"),
  });

  return (
    <div className="w-full flex flex-col items-center mt-[61px]">
      <div className="relative flex flex-col items-center">
        <PlanInput
          planTitle={planData.planTitle}
          setPlanTitle={(planTitle) => setPlanData({ ...planData, planTitle })}
        />
        <PlanDateSelect
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onClick={() => setIsOpen(true)}
          selectedDate={planData}
          setSelectedDate={setPlanData}
        />
      </div>
      <div className="w-[562px] mt-[35px] ">
        <PlanButton bType="create" title="플랜 생성하기" />
      </div>
    </div>
  );
};

export default PlanCreateContent;
