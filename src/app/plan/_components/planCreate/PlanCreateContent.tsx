"use client";
import { format } from "date-fns";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import PlanButton from "../PlanButton";
import PlanDateSelect from "./PlanDateSelect";
import PlanInput from "./PlanInput";
import { postPlan } from "../../_api";
import { useRouter } from "next/navigation";
import { useToken } from "@/store/tokenStore";

export type PlanDataTypes = {
  planTitle: string;
  startDate: string;
  endDate: string;
};

const PlanCreateContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useToken();
  const navigate = useRouter();
  const [planData, setPlanData] = useState<PlanDataTypes>({
    planTitle: "",
    startDate: format(new Date(), "yyyy-MM-dd"),
    endDate: format(new Date(), "yyyy-MM-dd"),
  });

  const handleCreatePlan = async () => {
    if (planData.planTitle === "") {
      alert("플랜 제목을 입력해주세요.");
      return;
    }
    if (planData.startDate === "") {
      alert("시작 날짜를 선택해주세요.");
      return;
    }
    if (planData.endDate === "") {
      alert("종료 날짜를 선택해주세요.");
      return;
    }
    try {
      await postPlan(planData, token);
      navigate.push("/planList");

      console.log("성공");
    } catch (error) {
      console.log('에러', error);
    }
  };

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
      <div className="w-[562px] mt-[35px]">
        <div onClick={handleCreatePlan}>
          <PlanButton bType="create" title="플랜 생성하기" />
        </div>
      </div>
    </div>
  );
};

export default PlanCreateContent;
