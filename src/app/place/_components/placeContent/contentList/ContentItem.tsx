import PlaceRightArrow from "@/utils/svg/PlaceRightArrow";
import Image from "next/image";
import ItemIcon from "./ItemIcon";

type ContentItemProps = {
  src: string;
  title: string;
  content: string;
};

const ContentItem = ({ src, title, content }: ContentItemProps) => {
  return (
    <div className="w-[330px] border rounded-[30px] overflow-hidden relative">
      <ItemIcon number={100} />
      <div className="w-full h-[360px] relative">
        <Image
          src={src}
          fill
          objectFit="cover"
          className="rounded-[30px]"
          sizes="1"
          alt="플레이스 이미지"
        />
      </div>
      <div className="py-[25px] px-[21px] flex justify-between items-center">
        <div>
          <p className="font-medium text-[22px] leading-1">{title}</p>
          <p className="font-medium text-[14px] mt-[5px] leading-1 text-[#353535]">
            {content}
          </p>
        </div>
        <PlaceRightArrow />
      </div>
    </div>
  );
};

export default ContentItem;
