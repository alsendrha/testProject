import ContentList from "./contentList/ContentList";
import DropList from "./dropList/DropList";

const PlaceContent = () => {
  return (
    <div className="w-full px-[223px]">
      <div className="w-full flex flex-col items-center justify-center pt-[40px]">
        <DropList />
        <ContentList />
      </div>
    </div>
  );
};

export default PlaceContent;
