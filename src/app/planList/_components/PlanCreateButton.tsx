import Link from "next/link";

const PlanCreateButton = () => {
  return (
    <div className="w-full pt-[30px] flex justify-end">
      <Link href={"/plan"}>
        <div className="rounded-[30px] border border-[#CCCCCC] px-[39px] py-[16.5px]">
          <div className="flex items-center h-[25px]">
            <p className="text-[20px] leading-none">플랜 생성하기</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlanCreateButton;
