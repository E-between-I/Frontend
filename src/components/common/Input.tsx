import styled from "styled-components";

interface InputProps {
  placeholder: string;
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type: string;
  key?: string;
}

const Input = ({ placeholder, key, name, onChange, type }: InputProps) => {
  return (
    <InputBox
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      type={type}
      key={key}
    />
  );
};

const InputBox = styled.input`
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

export default Input;
