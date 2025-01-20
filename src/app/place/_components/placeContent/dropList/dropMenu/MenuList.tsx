import DropItem from "./DropItem";

type MenuListProps = {
  rankingOpen?: boolean;
  numOfRowOpen?: boolean;
  numOfRowName?: string;
  rankingName?: string;
  setNumOfRowOpen?: (open: boolean) => void;
  setRankingOpen?: (open: boolean) => void;
  setRankingName?: (name: string) => void;
  setNumOfRowName?: (name: string) => void;
};

const MenuList = ({
  rankingOpen,
  numOfRowOpen,
  numOfRowName,
  rankingName,
  setRankingOpen,
  setNumOfRowOpen,
  setRankingName,
  setNumOfRowName,
}: MenuListProps) => {
  const numOfRowList = [
    { id: 1, name: "8개씩 보기" },
    { id: 2, name: "40개씩 보기" },
    { id: 3, name: "100개씩 보기" },
  ];

  const rankingList = [
    { id: 1, name: "최신순" },
    { id: 2, name: "인기순" },
    { id: 3, name: "평점순" },
  ];

  return (
    <div className="absolute top-[70px]">
      {numOfRowOpen ? (
        <DropItem
          type="numOfRow"
          name={numOfRowName!}
          list={numOfRowList}
          onClick={(name) => {
            return () => {
              setNumOfRowName!(name);
              setNumOfRowOpen!(false);
            };
          }}
        />
      ) : (
        <DropItem
          type="ranking"
          name={rankingName!}
          list={rankingList}
          onClick={(name) => {
            return () => {
              setRankingName!(name);
              setRankingOpen!(false);
            };
          }}
        />
      )}
    </div>
  );
};

export default MenuList;
