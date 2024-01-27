import styled from "styled-components";

const ParentContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

const QuestionButton = styled.button`
  background: #83A5FF;
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    background: #608bd4;
  }
`;

const QuestionButtonText = styled.span`
  font-size: 16px;
`;

const QuestionButtonComponent = () => {
  return (
    <ParentContainer>
        <QuestionButton>
            <QuestionButtonText>질문하기</QuestionButtonText>
        </QuestionButton>
    </ParentContainer>
  );
};

export default QuestionButtonComponent;
