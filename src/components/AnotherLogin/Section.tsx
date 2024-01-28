import styled from "styled-components";
import { useLogin } from "../../hooks/useLogin";
import { SIGN_FORM } from "../../constants/Login";
import Input from "../common/Input";

const Section = () => {
  const { handleChange: signFormChange,submitLogin } = useLogin();


  return (
    <div>
      <Title>로그인</Title>
      <Inputs>
        {SIGN_FORM.map((value) => (
          <Input
            placeholder={value.placeholder}
            key={value.name}
            name={value.name}
            onChange={signFormChange}
            type={value.type}
          />
        ))}
      </Inputs>
      <Button onClick={submitLogin}>확인</Button>
    </div>
  );
};

const Title = styled.p`
  font-weight: 700;
  line-height: 39px;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.BLACK};
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.main};
  border: none;
  width: 440px;
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 23px;
  line-height: 29px;
  font-weight: 600;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
`;

export default Section;
