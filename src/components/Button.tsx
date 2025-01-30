import React from "react";
import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "second ";
  action: string;
  displays?: "true" | "false";
}

export const Button = ({ action, variant = "primary" }: ButtonProps) => {
  const variants = {
    primary:
      " bg-stroke text-white py-3 px-5 tablet:w-auto ",
    second: " text-white hover:scale-95 py-3 px-5 tablet:w-auto",
  }[variant];

  return (
    <button
      className={`
        glow-on-hover
        ${variants}
        `}
    >
      <span className={`text-[16px] px-2`}>{action}</span>
    </button>
  );
};
