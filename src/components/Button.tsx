import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "second";
  action: string;
  displays?: "true" | "false";
}

export const Button = ({ action, variant = "primary", children}: ButtonProps) => {
  const variants = {
    primary: "bg-eclipse text-white py-3 px-8 tablet:w-auto glow-on-hover",
    second: "text-white py-1.5 px-4 tablet:w-auto bg-eclipse  hover:opacity-95 transition-all w-full shadow-lg",
  }[variant];

  return (
    <button
      className={`
        cursor-pointer rounded-lg
        ${variants}
        `}
    >
      <span className={`text-[16px] px-2`}>{action}</span>
      {children}
    </button>
  );
};
