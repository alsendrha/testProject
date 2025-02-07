import PlanDetailTop from "./_components/detailTop/PlanDetailTop";
import PlanDetailChat from "./_components/PlanDetailChat";
import PlanDetailMap from "./_components/PlanDetailMap";

const PlanDetailPage = () => {
  return (
    <div className="pt-[100px] flex items-center justify-center">
      <div className="pt-[100px] w-[1440px]">
        <PlanDetailTop />
        <div className="pt-[40px] w-full flex items-start justify-between">
          <div className="w-[1000px]">
            <PlanDetailMap />
            <div className="w-full mt-[40px] flex items-center">
              <div className="border border-b-0 border-[#DDDDDD] rounded-t-[20px] px-[30px] py-[15px]">
                <div className="flex items-center h-5">
                  <p className="text-[#AAAAAA] font-medium leading-none">
                    DAY1
                  </p>
                </div>
              </div>
            </div>
          </div>
          <PlanDetailChat />
        </div>
      </div>
    </div>
  );
};

export default PlanDetailPage;
