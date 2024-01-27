import styled from "styled-components";
import { BackgroundImg } from "../../assets";
import Section from "../AnotherLogin/Section";

const AnotherLogin = () => {
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
  align-items: center;
  justify-content: center;
  background-image: url(${BackgroundImg});
  background-size: cover;

  > div {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
`;

export default AnotherLogin;