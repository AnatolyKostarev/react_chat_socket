import React from "react";
import clsx from "clsx";
import s from "./Input.module.css";

export const Input = ({
  className,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  autocomplete = "off",
  disabled,
}) => {
  return (
    <div>
      <label className={clsx(s.label, className)}>{label}</label>
      <input
        className={clsx(s.input, className)}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autocomplete}
        onChange={onChange}
        required
        disabled={disabled}
      />
    </div>
  );
};
