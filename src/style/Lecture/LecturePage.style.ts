import styled from "styled-components";

export const StyledLecturePage = styled.div`
  height: calc(100vh - 57px);
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 20px;
`;

export const StyledLecturePageContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding-top: 60px;
  gap: 25px;
`;

export const StyledLectureTitle = styled.p`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
`;

export const StyledLectureTabMenu = styled.div`
  display: flex;
  gap: 100px;
`;

export const StyledLectureTab = styled.p<{ $isSelected: boolean }>`
  font-size: 28px;
  padding: 5px 15px;
  color: ${({ $isSelected }) => ($isSelected ? "#0066ff" : "")};
  font-weight: ${({ $isSelected }) => ($isSelected ? "600" : "")};
  cursor: pointer;
  &:hover {
    color: #0066ff;
    font-weight: 600;
  }
`;

export const StyledLecturePageContent = styled.div<{ $isSelected: boolean }>`
  display: ${({ $isSelected }) => ($isSelected ? "flex" : "none")};
  flex-wrap: wrap;
  max-width: 1400px;
  justify-content: center;
  gap: 10px;
`;
