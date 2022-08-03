import React from "react";
import clsx from "clsx";
import s from "./Button.module.css";

export const Button = ({ className, children, onClick }) => {
  return (
    <div>
      <button className={clsx(s.btn, className)} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
