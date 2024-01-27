import styled from "styled-components";
import { Logo } from "../../../assets";
import Texts from "./Text";

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="로고입니다." />
      <Texts />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 15vw;
  align-items: center;
  background: ${({ theme }) => theme.colors.WHITE};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  > img {
    height: 56px;
  }
  > div {
    display: flex;
    gap: 30px;
  }
`;

export default Header;
