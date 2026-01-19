import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
export const ButtonTailwind = ({ label, variant = "primary", size = "md", className, ...props }) => {
    const classes = `btn btn-${variant} btn-${size} ${className || ""}`;
    return (_jsx("button", { className: classes, ...props, children: label }));
};
