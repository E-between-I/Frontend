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
import toast from "react-hot-toast";

export const DetailPage = () => {
  return (
    <>
      <StyledDetailPage>
        <StyledDetailPageContainer>
          <StyledProfile>
            <StyledProfileImg src="https://freesvg.org/img/abstract-user-flat-4.png" />
            <StyledWriter>바보</StyledWriter>
          </StyledProfile>
          <StyledContent>
            <StyledTitle>
              삼성전자 9만원에 몰려서 아직 못나온 썰 푼다
            </StyledTitle>
            <StyledText>
              이거 보여주려고 어그로 끌었다. 사실 삼성전자 레전드다.
            </StyledText>
            <StyledLikeSection
              onClick={() =>
                toast.error("로그인을 해주세요.", { duration: 1000 })
              }
            >
              <StyledLikeContainer>
                <StyledLikeImg src="https://icones.pro/wp-content/uploads/2021/04/icone-noire-noir.png" />
              </StyledLikeContainer>
              <StyledLikeCount>3</StyledLikeCount>
            </StyledLikeSection>
            <StyledCommnetSection>
              <StyledCommnetTitle>댓글</StyledCommnetTitle>
              <StyledCommentList>
                <Comment />
                <Comment />
              </StyledCommentList>
              <StyledCommentInputSection>
                <StyledCommentInput
                  placeholder="댓글 내용을 입력해 주세요!"
                  onClick={() =>
                    toast.error("로그인을 해주세요.", { duration: 1000 })
                  }
                />
                <StyledCommentButton>올리기</StyledCommentButton>
              </StyledCommentInputSection>
            </StyledCommnetSection>
          </StyledContent>
        </StyledDetailPageContainer>
      </StyledDetailPage>
    </>
  );
};
