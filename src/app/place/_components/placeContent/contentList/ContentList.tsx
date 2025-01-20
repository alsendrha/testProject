import ContentItem from "./ContentItem";

const ContentList = () => {
  return (
    <div className="w-full pt-[40px] pb-[150px] flex justify-center items-center gap-[40px] flex-wrap">
      {Array.from({ length: 12 }).map((_, index) => (
        <ContentItem
          key={index}
          src={"/images/menuImage01.jpg"}
          title="팔공산"
          content=" 팔공산의 가산을 오르다"
        />
      ))}
    </div>
  );
};

export default ContentList;
