import React, { useEffect, useState } from "react";
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
import axios from "axios";

export const WritePage = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  useEffect(() => {
    if (
      !(
        type === "stock" ||
        type === "immovables" ||
        type === "savings" ||
        type === "economy"
      )
    ) {
      console.error("Type error", type);
      navigate("/");
    }
  }, [type, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(
      `${baseUrl}post/${type === "stock" ? "stock" : ""}${
        type === "immovables" ? "realty" : ""
      }${type === "savings" ? "deposit" : ""}${
        type === "economy" ? "common" : ""
      }`,
      {
        author: "나다",
        title: title,
        content: text,
      }
    );
    navigate(`/${type}`);
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
          <StyledWritePageForm onSubmit={handleSubmit}>
            <StyledWritePageInputs>
              <StyledWritePageInputText>제목</StyledWritePageInputText>
              <StyledWritePageTitleInput
                placeholder="질문에 대한 제목을 적어주세요!"
                name="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </StyledWritePageInputs>
            <StyledWritePageInputs>
              <StyledWritePageInputText>본문</StyledWritePageInputText>
              <StyledWritePageTextArea
                placeholder="질문에 대한 본문을 적어주세요!"
                name="content"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </StyledWritePageInputs>
            <StyledWritePageButton>제출하기</StyledWritePageButton>
          </StyledWritePageForm>
        </StyledWritePageContainer>
      </StyledWritePage>
    </>
  );
};
