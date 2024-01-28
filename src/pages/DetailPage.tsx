import { useParams } from "react-router-dom";
import {
  StyledCommentList,
  StyledCommnetSection,
  StyledCommnetTitle,
  StyledContent,
  StyledDetailPage,
  StyledDetailPageContainer,
  StyledLikeContainer,
  StyledLikeCount,
  StyledLikeImg,
  StyledLikeSection,
  StyledProfile,
  StyledProfileImg,
  StyledText,
  StyledTitle,
  StyledWriter,
} from "../style/Detail/DetailPage.style";
import { useEffect, useState } from "react";
import axios from "axios";
import { Comment } from "../components/Commnet/Comment";
import {
  StyledCommentButton,
  StyledCommentInput,
  StyledCommentInputSection,
} from "../style/Comment/Comment.style";

interface fetchData {
  title: string;
  date: {
    $date: string;
  };
  author: string;
  like: number;
  _id: {
    $oid: string;
  };
  content: string;
}

export const DetailPage = () => {
  const [data, setData] = useState<fetchData>();
  const { type, id } = useParams<{ type: string; id: string }>();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${baseUrl}post/${type === "stock" ? "stock" : ""}${
          type === "immovables" ? "realty" : ""
        }${type === "savings" ? "devosit" : ""}${
          type === "economy" ? "common" : ""
        }/${id}`,
        {
          headers: { Accept: "application/json" },
        }
      );

      console.log(response.data, type);

      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <StyledDetailPage>
        <StyledDetailPageContainer>
          <StyledProfile>
            <StyledProfileImg src="https://freesvg.org/img/abstract-user-flat-4.png" />
            <StyledWriter>{data?.author}</StyledWriter>
          </StyledProfile>
          <StyledContent>
            <StyledTitle>{data?.title}</StyledTitle>
            <StyledText>{data?.content}</StyledText>
            <StyledLikeSection>
              <StyledLikeContainer>
                <StyledLikeImg src="https://icones.pro/wp-content/uploads/2021/04/icone-noire-noir.png" />
              </StyledLikeContainer>
              <StyledLikeCount>{data?.like}</StyledLikeCount>
            </StyledLikeSection>
            <StyledCommnetSection>
              <StyledCommnetTitle>댓글</StyledCommnetTitle>
              <StyledCommentList>
                <Comment />
                <Comment />
              </StyledCommentList>
              <StyledCommentInputSection>
                <StyledCommentInput placeholder="댓글 내용을 입력해 주세요!" />
                <StyledCommentButton>올리기</StyledCommentButton>
              </StyledCommentInputSection>
            </StyledCommnetSection>
          </StyledContent>
        </StyledDetailPageContainer>
      </StyledDetailPage>
    </>
  );
};
