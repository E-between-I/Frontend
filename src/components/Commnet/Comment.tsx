import {
  StyledComment,
  StyledCommentText,
  StyledCommentWriteDate,
  StyledCommentWriter,
  StyledCommentWriterImg,
  StyledCommentWriterName,
  StyledCommentWriterNameDate,
} from "../../style/Comment/Comment.style";

export const Comment = () => {
  return (
    <>
      <StyledComment>
        <StyledCommentWriter>
          <StyledCommentWriterImg src="https://freesvg.org/img/abstract-user-flat-4.png" />
          <StyledCommentWriterNameDate>
            <StyledCommentWriterName>박선갑</StyledCommentWriterName>
            <StyledCommentWriteDate>5분전</StyledCommentWriteDate>
          </StyledCommentWriterNameDate>
        </StyledCommentWriter>
        <StyledCommentText>나 박선갑인데 개추 눌렀다 ㅋㅋ</StyledCommentText>
      </StyledComment>
    </>
  );
};
