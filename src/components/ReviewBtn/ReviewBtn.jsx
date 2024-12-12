import React from "react";

export const ReviewBtn = ({ label, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {label}
    </button>
  );
};
