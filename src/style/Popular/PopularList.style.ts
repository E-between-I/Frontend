import styled from "styled-components";

export const StyledPopularList = styled.div`
  width: 600px;
  display: flex;
  flex-flow: column;
  gap: 20px;
`;

export const StyledPopularListTitleSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledPopularListTitle = styled.span`
  font-size: 36px;
  font-weight: 600;
`;

export const StyledPopularListMore = styled.span`
  font-size: 20px;
  color: #1238ff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
