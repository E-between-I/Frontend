import React, { useEffect } from "react";
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
import { usePostQuestion } from "../utils/api/Axios";
import { useForm } from "../hooks/useForm";

export const WritePage = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !(
        type === "stock" ||
        type === "realty" ||
        type === "deposit" ||
        type === "common"
      )
    ) {
      console.error("Type error", type);
      navigate("/");
    }
  }, [type, navigate]);

  const { form: questionForm, handleChange: questionFormChange } = useForm({
    title: "",
    content: "",
    author: "test",
  });

  console.log({
    request_body: questionForm,
    category: type!,
  });

  const { mutate } = usePostQuestion({
    request_body: questionForm,
    category: type!,
  });

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      mutate();
    } catch (error) {
      console.error("Mutation error", error); 
  }
  };

  return (
    <>
      <StyledWritePage>
        <StyledWritePageContainer>
          <StyledWritePageTitleSection>
            <StyledWritePageTitle>
              <StyledWritePageTitleHighlight>
                {type === "stock" ? "주식" : ""}
                {type === "realty" ? "부동산" : ""}
                {type === "deposit" ? "예금/적금" : ""}
                {type === "common" ? "경제" : ""}
              </StyledWritePageTitleHighlight>
              <StyledWritePageTitleText>
                에 대한 질문을 해보세요!
              </StyledWritePageTitleText>
            </StyledWritePageTitle>
          </StyledWritePageTitleSection>
          <StyledWritePageForm onSubmit={handleSubmit}>
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
            <StyledWritePageButton>
              제출하기
            </StyledWritePageButton>
          </StyledWritePageForm>
        </StyledWritePageContainer>
      </StyledWritePage>
    </>
  );
};
