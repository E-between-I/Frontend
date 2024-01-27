import { useEffect } from "react";
import { TABLE_LIST } from "../../constants/Common";
import { instance } from "../../constraints/axiosIntersepter/userIntersepter";
import * as S from "./style";

export const StockTable = () => {

  const getStockQuestion = async () => {
    const response = await instance.get(`/post/common`);
    return response.data;
  };

  useEffect(() => {
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
      {TABLE_LIST.map((value) => (
        <S.ConfirmListItemContaienr>
          <S.ConfirmTitle style={{ width: "90%", paddingLeft: "1%" }}>
            {value.title}
          </S.ConfirmTitle>
          <S.ConfirmTitle style={{ width: "8%" }}>
            {value.author}
          </S.ConfirmTitle>
          <S.ConfirmTitle style={{ width: "8%" }}>
            {value.date}
          </S.ConfirmTitle>
          <S.ConfirmTitle style={{ width: "8%" }}>
            {value.likes}
          </S.ConfirmTitle>
        </S.ConfirmListItemContaienr>
      ))}
    </S.ConfirmListContainer>
  );
};
