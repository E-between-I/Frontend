import styled from "styled-components";
import { useForm } from "../../hooks/useForm";
import { SIGN_FORM } from "../../constants/Login";

const Section = () => {
  const { form: signForm, handleChange: signFormChange } = useForm({
    email: "",
    password: "",
  });

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
      <Button>확인</Button>
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

const Input = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.gray800};
  width: 440px;
  padding: 10px 12px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.BLACK};
  font-weight: 300;
  border-radius: 5px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray100};
  }
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
`;

export default Section;
