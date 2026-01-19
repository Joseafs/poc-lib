import { ButtonProps } from "./types";
import { StyledButton } from "./styles";

export const Button = ({ label, ...props }: ButtonProps) => (
  <StyledButton {...props}>{label}</StyledButton>
);
