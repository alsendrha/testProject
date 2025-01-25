type SkeletonType = {
  skeletonType: "main" | "place";
};

const Skeleton = ({ skeletonType }: SkeletonType) => {
  const renderSkeleton = {
    main: "w-[330px] h-[570px] rounded-[20px]",
    place: "w-[330px] h-[360px] rounded-[30px] mt-10",
  };

  return (
    <div className={`${skeletonType === "place" ? "mb-10" : "mb-0"}`}>
      <div
        className={`${renderSkeleton[skeletonType]} bg-gray-200 relative overflow-hidden`}
      />
      <div className="mt-[20px]">
        <p className="text-[22px] w-[200px] h-[40px] bg-gray-200 font-extrabold"></p>
        <p className=" mt-2 text-[16px] ml-[4px] bg-gray-200 w-[300px] h-[20px] font-medium"></p>
      </div>
    </div>
  );
};

export default Skeleton;
