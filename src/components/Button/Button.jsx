import React from "react";
import clsx from "clsx";
import s from "./Button.module.css";

export const Button = ({ className, children, onClick, type = "submit" }) => {
  return (
    <div>
      <button className={clsx(s.btn, className)} type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
