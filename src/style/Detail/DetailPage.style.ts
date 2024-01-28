import styled from "styled-components";

export const StyledDetailPage = styled.div`
  background: #f7f7f7;
  display: flex;
  justify-content: center;
`;

export const StyledDetailPageContainer = styled.div`
  width: 1100px;
  background: #fff;
  padding: 40px;
  display: flex;
  flex-flow: column;
  gap: 20px;
  min-height: calc(100vh - 57px);
`;

export const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledProfileImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const StyledWriter = styled.p`
  font-size: 28px;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-flow: column;
`;

export const StyledTitle = styled.p`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin: 10px 0 35px 0;
`;

export const StyledText = styled.p`
  font-size: 22px;
`;

export const StyledLikeSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 30px;
  flex-flow: column;
  gap: 5px;
`;

export const StyledLikeContainer = styled.div`
  width: 75px;
  height: 75px;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const StyledLikeImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const StyledLikeCount = styled.p`
  font-size: 24px;
`;

export const StyledCommnetSection = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column;
  padding: 0 100px;
`;

export const StyledCommnetTitle = styled.p`
  font-size: 36px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 2px solid #ccc;
`;

export const StyledCommentList = styled.div`
  display: flex;
  flex-flow: column;
`;
