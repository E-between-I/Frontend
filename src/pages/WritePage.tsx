import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  StyledWritePage,
  StyledWritePageButton,
  StyledWritePageContainer,
  StyledWritePageForm,
  StyledWritePageInputText,
  StyledWritePageInputs,
  StyledWritePageTextArea,
  StyledWritePageTitle,
  StyledWritePageTitleHighlight,
  StyledWritePageTitleInput,
  StyledWritePageTitleSection,
  StyledWritePageTitleText,
} from "../style/Write/WritePage.style";

export const WritePage = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  useEffect(() => {
    if (
      !(
        type === "stock" ||
        type === "immovables" ||
        type === "savings" ||
        type === "economy"
      )
    ) {
      navigate("/");
    }
  });
  return (
    <>
      <StyledWritePage>
        <StyledWritePageContainer>
          <StyledWritePageTitleSection>
            <StyledWritePageTitle>
              <StyledWritePageTitleHighlight>
                {type === "stock" ? "주식" : ""}
                {type === "immovables" ? "부동산" : ""}
                {type === "savings" ? "예금/적금" : ""}
                {type === "economy" ? "경제" : ""}
              </StyledWritePageTitleHighlight>
              <StyledWritePageTitleText>
                에 대한 질문을 해보세요!
              </StyledWritePageTitleText>
            </StyledWritePageTitle>
          </StyledWritePageTitleSection>
          <StyledWritePageForm>
            <StyledWritePageInputs>
              <StyledWritePageInputText>제목</StyledWritePageInputText>
              <StyledWritePageTitleInput placeholder="질문에 대한 제목을 적어주세요!" />
            </StyledWritePageInputs>
            <StyledWritePageInputs>
              <StyledWritePageInputText>본문</StyledWritePageInputText>
              <StyledWritePageTextArea placeholder="질문에 대한 본문을 적어주세요!" />
            </StyledWritePageInputs>
            <StyledWritePageButton>제출하기</StyledWritePageButton>
          </StyledWritePageForm>
        </StyledWritePageContainer>
      </StyledWritePage>
    </>
  );
};
