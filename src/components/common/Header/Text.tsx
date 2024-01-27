import { HEADER_LIST } from "../../../constants/main";
import { useLocation, useNavigate } from "react-router-dom";
import { removeToken } from "../../../utils/functions/TokenManager";
import styled from "styled-components";

const Texts = () => {
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
    <div>
      {HEADER_LIST.map((value, idx) => (
        <Text
          onClick={() => onTextClicckHandle(value.route)}
          $isSelected={value.route === location.pathname}
          key={idx}
        >
          {value.title}
        </Text>
      ))}
      {localStorage.getItem("accessToken") ? (
        <Text onClick={onLogoutClickHandle}>로그아웃</Text>
      ) : (
        <Text
          onClick={onLoginClickHandle}
          $isSelected={"/login" === location.pathname}
        >
          로그인
        </Text>
      )}
    </div>
  );
};

const Text = styled.p<{ $isSelected?: boolean }>`
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: ${(props) =>
    props.$isSelected ? props.theme.colors.main : props.theme.colors.gray600};
  text-decoration-line: ${(props) => props.$isSelected && "underline"};
  &:hover {
    color: #0066ff;
    text-decoration: underline;
    font-weight: 600;
  }
`;

export default Texts;
