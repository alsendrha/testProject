type PlaceBannerTitleProps = {
  menuName: string;
};

const PlaceBannerTitle = ({ menuName }: PlaceBannerTitleProps) => {
  return (
    <p className="text-[56px] text-[#AED400] font-semibold">
      {menuName} <span className="text-[#353535]">여행지</span>
    </p>
  );
};

export default PlaceBannerTitle;
