import styled from "styled-components";
import { GoogleLogo } from "../../assets";
import { useNavigate } from "react-router-dom";

const Section = () => {
  const navigate = useNavigate();

  const onSigninClickHandle = () => {
    navigate("/create_nickname");
  };

  const onLoginClickHandle = () => {
    navigate("/another_login");
  };

  return (
    <>
      <Title>시작하기</Title>
      <Buttons>
        <GAuthButton onClick={onSigninClickHandle}>
          <img src={GoogleLogo} alt="구글 로고입니다." />
          <p>Sign in with Google</p>
        </GAuthButton>
        <AnotherButton onClick={onLoginClickHandle}>
          다른 방법으로 로그인 하기
        </AnotherButton>
      </Buttons>
    </>
  );
};

const Title = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-size: 60px;
  line-height: 85px;
  font-weight: 700;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const GAuthButton = styled.button`
  background: ${({ theme }) => theme.colors.WHITE};
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  gap: 14px;
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;
  color: ${({ theme }) => theme.colors.gray400};
  width: 384px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  > img {
    width: 57px;
  }
`;

const AnotherButton = styled.button`
  background: ${({ theme }) => theme.colors.WHITE};
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  gap: 14px;
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;
  color: ${({ theme }) => theme.colors.gray400};
  width: 384px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default Section;
