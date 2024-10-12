import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string | ReactNode;
}

export default function Button({ label, className, ...rest }: ButtonProps) {
  return (
    <button className={`${className} hover:scale-90 duration-200`} {...rest}>
      {typeof label === "string" ? label : label}{" "}
    </button>
  );
}
