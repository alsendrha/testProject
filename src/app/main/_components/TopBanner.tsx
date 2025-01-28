import Image from "next/image";
import TripCreateButton from "./TripCreateButton";

const TopBanner = () => {
  return (
    <div className="w-full h-[600px] relative">
      <Image
        src={"/images/image.png"}
        fill
        sizes="1"
        alt="메인탑이미지"
        priority
      />
      <div className="absolute w-full h-full pt-[255px] text-white">
        <div className="w-full flex justify-center">
          <TripCreateButton
            title="ALONE"
            buttonPosition="left"
            link={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=438cf3e1fed5cae3fa8aba30fd11373c&redirect_uri=http://localhost:3000/main&prompt=login`}
          />
          <div className="flex flex-col items-center mx-[44px]">
            <p className="font-extrabold text-[60px] leading-[75px]">
              PLAN YOUR TRIP
            </p>
            <p className="font-medium text-[26px] leading-[32px] mt-[8px]">
              나만의 여행을 계획하세요
            </p>
          </div>
          <TripCreateButton title="TEAM" buttonPosition="right" link="/team" />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
