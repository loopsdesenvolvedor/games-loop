import styled from "styled-components";

type InputProps = {
  name: string;
  placeholder?: string;
  type: "email" | "password" | "text";
};

const Root = styled.input<InputProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.default.primary};
  border: 1px solid ${({ theme }) => theme.colors.default.border};
  padding: 0 1.2rem;
  border-radius: inherit;
  font-weight: 300;
  outline: none;
  color: ${({ theme }) => theme.colors.default.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.default.text};
  }
`;

const Input = ({ placeholder, name, type }: InputProps) => {
  return <Root type={type} name={name} placeholder={placeholder} />;
};

export default Input;
