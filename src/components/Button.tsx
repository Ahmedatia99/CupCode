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
}: ButtonProps) => {
  const variants = {
    primary: "bg-shiny text-white py-3 px-8 glow-on-hover",
    second:
      "text-white py-1.5 px-4  bg-shiny  hover:opacity-95 transition-all shadow-lg",
    morning: "text-shiny py-1.5 px-4 bg-white font-medium",
  }[variant];

  return (
    <button
      className={`
        cursor-pointer rounded-lg
        ${variants} ${className}
        `}
    >
      <span className={`text-[16px] px-2 `}>{action}</span>
      {children}
    </button>
  );
};
