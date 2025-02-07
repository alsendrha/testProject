import PlanListDelete from "@/utils/svg/PlanListDelete";
import Link from "next/link";

type PlanListItemProps = {
  item: {
    id: number;
    title: string;
    date: string;
    day: string;
    createdDate: string;
  };
  onClick: () => void;
};

const PlanListItem = ({ item, onClick }: PlanListItemProps) => {
  return (
    <div className="border-y h-[56px] flex items-center gap-[40px] pr-[20.04px]">
      <Link
        href={{
          pathname: `/planList/${item.id}
        `,
          query: { day: item.day },
        }}
        className="w-full flex items-center gap-[40px] border-[#EEEEEE]"
      >
        <div className="flex items-center justify-end w-[27.05px]">
          <p className="font-medium text-[#353535] leading-none">{item.id}</p>
        </div>
        <div className="w-[464.93px] h-[20px] flex items-center">
          <p className="font-medium text-[#353535] leading-none">
            {item.title}
          </p>
        </div>
        <div className="w-[180.36px] h-[20px] flex items-center justify-center">
          <p className="font-medium text-[#353535] leading-none text-nowrap">
            {item.date}
          </p>
        </div>
        <div className="w-[123.25px] h-[20px] flex items-center justify-center">
          <p className="text-[#AAAAAA] font-medium leading-none text-nowrap">
            {item.createdDate}
          </p>
        </div>
      </Link>
      <div className="cursor-pointer " onClick={onClick}>
        <PlanListDelete />
      </div>
    </div>
  );
};

export default PlanListItem;
