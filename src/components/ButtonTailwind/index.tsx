import { ButtonTailwindProps } from "./types";
import "./styles.css";

export const ButtonTailwind = ({
  label,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonTailwindProps) => {
  const classes = `btn btn-${variant} btn-${size} ${className || ""}`;

  return (
    <button className={classes} {...props}>
      {label}
    </button>
  );
};
