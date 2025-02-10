import PlanCreateButton from "./_components/PlanCreateButton";
import PlanItemList from "./_components/planItemList/PlanItemList";
import PlanListMenuButton from "./_components/PlanListMenuButton";
import PlanListTitle from "./_components/PlanListTitle";

const PlanListPage = () => {
  return (
    <div className="w-full h-full">
      <div className="pt-[100px] pb-[171px] flex flex-col items-center justify-center">
        <div className="w-[1000px] pt-[100px]">
          <PlanListTitle />
          <PlanListMenuButton />
          <PlanCreateButton />
          <PlanItemList />
        </div>
      </div>
      {/* {<CustomAlert />} */}
    </div>
  );
};

export default PlanListPage;
