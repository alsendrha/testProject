import Position from "@/utils/svg/Position";
const Skeleton = () => {
  return (
    <div className="w-full">
      <div className="w-[330px] h-[500px] rounded-[20px] bg-gray-200 relative overflow-hidden"></div>
      <div className="mt-[20px]">
        <p className="text-[22px] w-[200px] h-[40px] bg-gray-200 font-extrabold"></p>
        <div className="flex items-center mt-2">
          <Position />
          <p className="text-[16px] ml-[4px] bg-gray-200 w-[300px] h-[20px] font-medium"></p>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
