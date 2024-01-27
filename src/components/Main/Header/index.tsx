import styled from "styled-components";
import { Logo } from "../../../assets";
import { useLocation, useNavigate } from "react-router-dom";
import { removeToken } from "../../../utils/functions/TokenManager";
import { HEADER_LIST } from "../../../constants/main";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onTextClicckHandle = (route: string) => {
    navigate(route);
  };

  const onLogoutClickHandle = () => {
    removeToken();
  };

  const onLoginClickHandle = () => {
    navigate("/login");
  };

  return (
    <Container>
      <img src={Logo} alt="로고입니다." />
      <div>
        {HEADER_LIST.map((value) => (
          <Text
            onClick={() => onTextClicckHandle(value.route)}
            isSelected={value.route === location.pathname}
          >
            {value.title}
          </Text>
        ))}
        {localStorage.getItem("accessToken") ? (
          <Text onClick={onLogoutClickHandle}>로그아웃</Text>
        ) : (
          <Text
            onClick={onLoginClickHandle}
            isSelected={"/login" === location.pathname}
          >
            로그인
          </Text>
        )}
      </div>
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

const Text = styled.p<{ isSelected?: boolean }>`
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: ${(props) =>
    props.isSelected ? props.theme.colors.main : props.theme.colors.gray600};
  text-decoration-line: ${(props) => props.isSelected && "underline"};
`;

export default Header;
