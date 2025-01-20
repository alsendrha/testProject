import PlaceDownArrow from "@/utils/svg/PlaceDownArrow";

type DropDownProps = {
  type: "ranking" | "numOfRow";
  onClick: () => void;
  title: string;
};

const DropDown = ({ type, onClick, title }: DropDownProps) => {
  const buttonWidth = {
    ranking: "w-[130px] gap-[21px]",
    numOfRow: "w-[170px] gap-[15px]",
  };
  return (
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
  );
};

export default DropDown;
