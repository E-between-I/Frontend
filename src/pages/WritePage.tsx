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
import { useForm } from "../hooks/useForm";
import { usePostQuestion } from "../utils/api/Axios";

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

  const { form: questionForm, handleChange: questionFormChange } = useForm({
    title: "",
    content: "",
    author: "sdfs",
  });

  console.log({
    request_body: questionForm,
    category: type!,
  });

  const { mutate } = usePostQuestion({
    request_body: questionForm,
    category: type!,
  });

  const onSubmitClickHandle = () => {
    mutate();
  };

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
              <StyledWritePageTitleInput
                placeholder="질문에 대한 제목을 적어주세요!"
                name="title"
                onChange={questionFormChange}
              />
            </StyledWritePageInputs>
            <StyledWritePageInputs>
              <StyledWritePageInputText>본문</StyledWritePageInputText>
              <StyledWritePageTextArea
                placeholder="질문에 대한 본문을 적어주세요!"
                name="content"
                onChange={questionFormChange}
              />
            </StyledWritePageInputs>
            <StyledWritePageButton onClick={onSubmitClickHandle}>
              제출하기
            </StyledWritePageButton>
          </StyledWritePageForm>
        </StyledWritePageContainer>
      </StyledWritePage>
    </>
  );
};
