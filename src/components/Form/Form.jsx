import React from "react";
import s from "./Form.module.css";

export const Form = ({ children, onSubmit }) => {
  return (
    <form className={s.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
