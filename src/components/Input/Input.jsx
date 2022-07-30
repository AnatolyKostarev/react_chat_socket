import React from "react";
import s from "./Input.module.css";

export const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  autocomplete = "off",
}) => {
  return (
    <div>
      <label className={s.label}>{label}</label>
      <input
        className={s.input}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autocomplete}
        onChange={onChange}
      />
    </div>
  );
};
