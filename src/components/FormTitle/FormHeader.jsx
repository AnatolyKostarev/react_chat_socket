import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import s from "./FormHeader.module.css";

export const FormHeader = ({ className, title, link, path, indent }) => {
  return (
    <div className={clsx(s.form__header, className)}>
      <h3 style={{ marginRight: `${indent}px` }}>{title}</h3>
      <Link to={path}>
        <span>{link}</span>
      </Link>
    </div>
  );
};
