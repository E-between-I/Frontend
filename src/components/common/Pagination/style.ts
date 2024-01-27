import styled from "styled-components";

export const PageSection = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    color: #000;
`;

export const ButtonWrap = styled.div`
    display: flex;
    gap: 8px;
    color: #8D8D8D;
`;

export const Button = styled.button<{ border?: string }>`
  border: ${(props) => (props.border ? '1px solid #000' : 'none')};
  padding: 8px 16px;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  border-radius: 4px;
  border: none;

  &:disabled {
    background-color: #fff;
    cursor: not-allowed;
  }
`;