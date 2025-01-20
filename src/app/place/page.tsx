import PlaceTopBanner from "./_components/placeBanner/PlaceTopBanner";
import PlaceContent from "./_components/placeContent/PlaceContent";

const page = () => {
  return (
    <div className="pt-[100px]">
      <PlaceTopBanner />
      <PlaceContent />
    </div>
  );
};

export default page;
