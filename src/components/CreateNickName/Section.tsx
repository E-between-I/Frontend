import styled from "styled-components";
import Input from "../common/Input";
import { useForm } from "../../hooks/useForm";

const Section = () => {
  const { form: nickname, handleChange: nicknameChange } = useForm("");

  return (
    <>
      <Title>저희 서비스가 처음이신가요?</Title>
      <Input
        placeholder="닉네임을 만들어주세요."
        name="nickname"
        onChange={nicknameChange}
        type="text"
      />
      <Button>확인</Button>
    </>
  );
};

const Title = styled.p`
  font-weight: 700;
  line-height: 39px;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.main};
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
