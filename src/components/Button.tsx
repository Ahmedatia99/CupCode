import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "second";
  action: string;
  displays?: "true" | "false";
  className: string;
}

export const Button = ({
  action,
  variant = "primary",
  children,
  className,
  onClick,
}: ButtonProps) => {
  const variants = {
    primary: "bg-shiny text-white py-3 px-8 glow-on-hover",
    second:
      "text-white py-1.5 px-4  bg-shiny  hover:opacity-95 transition-all shadow-lg",
    morning: "text-shiny py-3 px-5 bg-white font-semibold",
  }[variant];

  return (
    <button
      className={`
        cursor-pointer rounded-lg
        ${variants} ${className}
        `}
      onClick={onClick}
    >
      <span className={`text-[16px] px-2 `}>{action}</span>
      {children}
    </button>
  );
};
