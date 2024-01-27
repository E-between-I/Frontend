import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 35px 0;
  gap: 10px;
  align-items: center;
  background: #ccc;
`;

export const StyledFooterLogo = styled.img`
  filter: grayscale(100%);
  width: 220px;
  height: 56px;
`;

export const StyledFooterCopyright = styled.p`
  font-size: 20px;
  color: #555;
`;
