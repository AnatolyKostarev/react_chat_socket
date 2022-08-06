import React from "react";
import clsx from "clsx";
import s from "./FormHeader.module.css";

export const FormHeader = ({ className, title, link, indent, onClick }) => {
  return (
    <div className={clsx(s.form__header, className)}>
      <h3 style={{ marginRight: `${indent}px` }}>{title}</h3>
      <span onClick={onClick}>{link}</span>
    </div>
  );
};
