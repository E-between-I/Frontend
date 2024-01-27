import styled from "styled-components"

export const ConfirmListContainer = styled.div``;

export const ConfirmListHeader = styled.div`
  display: flex;
  align-items: center;

  height: 50px;
  border-top: 3px solid #636363;
  border-bottom: 3px solid #636363;
  color: #888;
`;

export const ConfirmTitle = styled.div`
  color: #888;
`;

export const ConfirmListItemContaienr = styled.div`
  display: flex;
  align-items: center;

  height: 50px;

  cursor: pointer;
  border-bottom: 1px solid #d2d2d2;

  &:hover {
    background-color: #888;
  }
`;

export const ConfirmListItem = styled.div`
  width: 10%;
`;