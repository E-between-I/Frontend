import { useEffect, useState } from "react";
import { instance } from "../../../constraints/axiosIntersepter/userIntersepter";
import * as S from "./style";

interface StockItem {
  _id: {
    $oid: string;
  };
  title: string;
  content: string;
  date: {
    $date: string;
  }
  like: number;
}

export const ImmovablesTable: React.FC = () => {
  const [data, setData] = useState<StockItem[]>([]);

  useEffect(() => {
    const getStockQuestion = async () => {
      try {
        const response = await instance.get<StockItem[]>("/post/realty");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getStockQuestion();
  }, []);

  return (
    <S.ConfirmListContainer>
      <S.ConfirmListHeader>
        <S.ConfirmTitle style={{ width: "90%", paddingLeft: "1%" }}>
          제목
        </S.ConfirmTitle>
        <S.ConfirmTitle style={{ width: "8%" }}>글쓴이</S.ConfirmTitle>
        <S.ConfirmTitle style={{ width: "8%" }}>작성날짜</S.ConfirmTitle>
        <S.ConfirmTitle style={{ width: "8%" }}>좋아요</S.ConfirmTitle>
      </S.ConfirmListHeader>
      {data.map((value) => (
        <S.ConfirmListItemContaienr key={value._id.$oid}>
          <S.ConfirmTitle style={{ width: "90%", paddingLeft: "1%" }}>
            {value.title}
          </S.ConfirmTitle>
          <S.ConfirmTitle style={{ width: "8%" }}>
            {value.content.length > 3 
            ? `${value.content.slice(0, 3)}...`
            : value.content}
          </S.ConfirmTitle>
          <S.ConfirmTitle style={{ width: "8%" }}>
            {value.date.$date.length > 8 
            ? `${value.date.$date.slice(0, 8)}...`
            : value.date.$date}
          </S.ConfirmTitle>
          <S.ConfirmTitle style={{ width: "8%" }}>
            {value.like}
          </S.ConfirmTitle>
        </S.ConfirmListItemContaienr>
      ))}
    </S.ConfirmListContainer>
  );
};