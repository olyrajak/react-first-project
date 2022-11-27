import React from "react";

const Button = ({ type, text, className }) => {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
};

export default Button;
