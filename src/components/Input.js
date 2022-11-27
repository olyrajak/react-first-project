import React from "react";

const Input = ({ text, name, type, placeholder, value, className }) => {
  return (
    <>
      <label for={name}>{text}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        className={className}
      />
    </>
  );
};

export default Input;
