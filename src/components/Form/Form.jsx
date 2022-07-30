import React from "react";
import clsx from "clsx";
import s from "./Form.module.css";

export const Form = ({ children, onSubmit, className }) => {
  return (
    <form className={clsx(s.form, className)} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
