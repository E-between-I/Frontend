import styled from "styled-components";

export const StyledComment = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px 25px;
`;

export const StyledCommentWriter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledCommentWriterImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const StyledCommentWriterNameDate = styled.div`
  display: flex;
  flex-flow: column;
`;

export const StyledCommentWriterName = styled.p`
  font-size: 22px;
`;

export const StyledCommentWriteDate = styled.p`
  font-size: 16px;
  color: #999;
`;

export const StyledCommentText = styled.p`
  font-size: 18px;
  padding: 10px 5px;
`;

export const StyledCommentInputSection = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledCommentInput = styled.input`
  flex: 1;
  font-size: 22px;
  padding: 12px 15px;
  border-radius: 50px;
  border: 1px solid #ccc;
  transition: 0.15s;

  &:focus {
    outline: none;
    border: 1px solid #333;
  }
`;

export const StyledCommentButton = styled.button`
  font-size: 22px;
  padding: 8px 20px;
  border-radius: 50px;
  border: 1px solid #ccc;
  transition: 0.15s;

  &:hover {
    background: #aaa;
    color: #fff;
  }
`;
