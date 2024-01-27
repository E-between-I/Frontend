import styled from "styled-components";

export const StyledPopularListItem = styled.div`
  width: 100%;
  gap: 50px;
  padding: 20px 10px;
  display: flex;
  cursor: pointer;
  &:hover {
    background: rgba(131, 165, 255, 0.25);
  }
`;

export const StyledPopularListItemText = styled.p`
  font-size: 20px;
  text-align: center;
`;
