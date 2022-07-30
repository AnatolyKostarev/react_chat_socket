import React from "react";
import { Link } from "react-router-dom";
import s from "./FormHeader.module.css";

export const FormHeader = ({ title, link, path, indent }) => {
  return (
    <div className={s.form__header}>
      <h3 style={{ marginRight: `${indent}px` }}>{title}</h3>
      <Link to={path}>
        <span>{link}</span>
      </Link>
    </div>
  );
};
