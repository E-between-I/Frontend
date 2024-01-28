import { useEffect, useState } from "react";
import { instance } from "../../../constraints/axiosIntersepter/userIntersepter";
import * as S from "../../Stock/StockTable/style";
import { useNavigate } from "react-router-dom";

interface StockItem {
  _id: {
    $oid: string;
  };
  title: string;
  content: string;
  date: {
    $date: string;
  };
  like: number;
  author: string;
}

export const EconomyTable: React.FC = () => {
  const [data, setData] = useState<StockItem[]>([]);
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(`/economy/detail/${path}`);
  };

  useEffect(() => {
    const getStockQuestion = async () => {
      try {
        const response = await instance.get<StockItem[]>("/post/common");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getStockQuestion();
  }, []);

  return (
    <S.ConfirmListContainer>
      <S.ConfirmListHeader>
        <S.ConfirmTitle style={{ flex: 1 }}>제목</S.ConfirmTitle>
        <S.ConfirmTitle style={{ minWidth: "55px" }}>글쓴이</S.ConfirmTitle>
        <S.ConfirmTitle style={{ minWidth: "90px", textAlign: "center" }}>
          작성날짜
        </S.ConfirmTitle>
        <S.ConfirmTitle style={{ width: "55px" }}>좋아요</S.ConfirmTitle>
      </S.ConfirmListHeader>
      {data.map((value: StockItem) => (
        <S.ConfirmListItemContaienr
          key={value._id.$oid}
          onClick={() => {
            handleClick(value._id.$oid);
          }}
        >
          <S.ConfirmTitle style={{ flex: 1, color: "#000" }}>
            {value.title}
          </S.ConfirmTitle>
          <S.ConfirmTitle
            style={{ width: "90px", textAlign: "center", color: "#000" }}
          >
            {value.author.length > 3
              ? `${value.content.slice(0, 3)}...`
              : value.author}
          </S.ConfirmTitle>
          <S.ConfirmTitle style={{ color: "#000" }}>
            {value.date.$date.length > 8
              ? `${value.date.$date.slice(0, 8)}...`
              : value.date.$date}
          </S.ConfirmTitle>
          <S.ConfirmTitle
            style={{ width: "55px", textAlign: "center", color: "#000" }}
          >
            {value.like}
          </S.ConfirmTitle>
        </S.ConfirmListItemContaienr>
      ))}
    </S.ConfirmListContainer>
  );
};
