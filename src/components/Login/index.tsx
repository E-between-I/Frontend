import styled from "styled-components";
import { BackgroundImg } from "../../assets";
import Section from "./Section";

const Login = () => {
  return (
    <Background>
      <Section />
    </Background>
  );
};

const Background = styled.div`
  width: 100vw;
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${BackgroundImg});
  background-size: cover;
  gap: 75px;
`;

export default Login;
