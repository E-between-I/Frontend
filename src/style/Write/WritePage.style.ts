import styled from "styled-components";

export const StyledWritePage = styled.div`
  background: #f7f7f7;
  height: calc(100vh - 57px);
  display: flex;
  justify-content: center;
`;

export const StyledWritePageContainer = styled.div`
  background: #fff;
  width: 1100px;
  padding: 30px;
  display: flex;
  flex-flow: column;
  gap: 30px;
`;

export const StyledWritePageTitleSection = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column;
`;

export const StyledWritePageTitle = styled.div`
  display: flex;
`;

export const StyledWritePageTitleText = styled.span`
  font-size: 38px;
  font-weight: 700;
`;

export const StyledWritePageTitleHighlight = styled.span`
  font-size: 38px;
  font-weight: 700;
  color: #0066ff;
`;

export const StyledWritePageForm = styled.form`
  display: flex;
  flex-flow: column;
  gap: 20px;
`;

export const StyledWritePageInputs = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`;
export const StyledWritePageInputText = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #0066ff;
`;
export const StyledWritePageTitleInput = styled.input`
  padding: 10px 15px;
  font-size: 22px;
  border: 1px solid #aaa;
  border-radius: 8px;
`;

export const StyledWritePageTextArea = styled.textarea`
  padding: 10px 15px;
  font-size: 22px;
  border: 1px solid #aaa;
  border-radius: 8px;
  resize: none;
  height: 530px;
`;

export const StyledWritePageButton = styled.button`
  align-self: flex-end;
  font-size: 28px;
  padding: 10px 22px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background: #0066ff;
  color: #fff;
  cursor: pointer;
`;
