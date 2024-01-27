import styled from "styled-components";
import { MainTitle } from "../../../assets";

const Title = () => {
  return <Img src={MainTitle} alt="error" />;
};

const Img = styled.img`
  width: 100%;
`;

export default Title;
