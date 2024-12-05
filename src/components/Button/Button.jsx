import React from "react";
import { LuArrowRight } from "react-icons/lu";

export const Button = ({
  label,
  onClick,
  type,
  className = "",
  disabled = false,
  icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${className}`}
      disabled={disabled}
      icon={icon ? icon : null}
    >
      {label}
    </button>
  );
};


export default Button;