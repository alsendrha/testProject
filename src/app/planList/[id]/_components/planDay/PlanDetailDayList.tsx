import PlanDetailDateBar from "./PlanDetailDateBar";
import PlanDetailNumber from "./PlanDetailNumber";

type PlanDetailDayListProps = {
  day: string;
  isClicked: number;
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
};

const PlanDetailDayList = ({
  day,
  isClicked,
  setIsClicked,
}: PlanDetailDayListProps) => {
  return (
    <div className="w-full mt-[40px] flex items-end">
      {Array.from({ length: Number(day) }).map((_, index) => (
        <PlanDetailNumber
          key={index}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          number={index}
        />
      ))}
      <PlanDetailDateBar date={"2025-01-01(목)"} />
    </div>
  );
};

export default PlanDetailDayList;
