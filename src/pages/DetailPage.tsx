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
import { Comment } from "../components/Commnet/Comment";
import {
  StyledCommentButton,
  StyledCommentInput,
  StyledCommentInputSection,
} from "../style/Comment/Comment.style";
import { instance } from "../constraints/axiosIntersepter/userIntersepter";
import { useEffect, useState } from "react";

export const DetailPage = () => {
  const [data, setData] = useState();
  const { type, id } = useParams<{ type: string; id: string }>();

  const getDetailQuestion = async () => {
    await instance.get(`/post/${type}/${id}`).catch((res) => {
      setData(res);
      console.log("성공이다이쉐꺄");
    });
  };

  // author: "바보";
  // content: "제발탈출시켜줘";
  // date: {
  //   $date: "2024-01-28T04:39:03.961Z";
  // }
  // like: 100;
  // title: "삼성전자 9만원에 몰려서 아직 못나온 썰 푼다";
  // _id: {
  //   $oid: "65b55bd75d64ca547ebdd54d";
  // }

  console.log(data);

  useEffect(() => {
    getDetailQuestion();
    console.log(data);
  }, []);

  return (
    <>
      <StyledDetailPage>
        <StyledDetailPageContainer>
          {/* <StyledProfile>
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
          </StyledContent> */}
        </StyledDetailPageContainer>
      </StyledDetailPage>
    </>
  );
};
