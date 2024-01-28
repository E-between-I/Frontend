import styled from "styled-components";
import { MainTitle } from "../../../assets";

const Title = () => {
  return <Img />;
};

const Img = styled.div`
  background: url(${MainTitle});
  width: 100%;
  height: calc(100vh - 57px);
`;

export default Title;
