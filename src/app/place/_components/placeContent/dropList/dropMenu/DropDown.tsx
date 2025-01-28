import PlaceDownArrow from "@/utils/svg/PlaceDownArrow";

type DropDownProps = {
  dropOpen: boolean;
  type: "ranking" | "numOfRow";
  onClick: () => void;
  title: string;
};

const DropDown = ({ dropOpen, type, onClick, title }: DropDownProps) => {
  const buttonWidth = {
    ranking: "w-[130px] gap-[21px]",
    numOfRow: "w-[170px] gap-[15px]",
  };
  return (
    <div className="relative">
      {dropOpen && (
        <div className={`${buttonWidth[type]} h-full top-0 absolute z-10`} />
      )}
      <div
        className={`${buttonWidth[type]} flex items-center border border-[#CCCCCC] rounded-[10px] py-[17px] pl-[19px] pr-[12px] cursor-pointer relative`}
        onClick={onClick}
      >
        <div className="h-[25px] flex items-center ">
          <p className="text-[20px] text-nowrap font-medium text-[#333333] leading-none">
            {title}
          </p>
        </div>
        <PlaceDownArrow />
      </div>
    </div>
  );
};

export default DropDown;
