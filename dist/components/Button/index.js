import { jsx as _jsx } from "react/jsx-runtime";
import { StyledButton } from "./styles";
export const Button = ({ label, ...props }) => (_jsx(StyledButton, { ...props, children: label }));
