import React from "react";
import s from "./Button.module.css";

export const Button = ({ children, pt = 0, pr = 0, pb = 0, pl = 0 }) => {
  return (
    <div>
      <button
        className={s.btn}
        style={{ padding: `${pt}px ${pr}px ${pb}px ${pl}px` }}
      >
        {children}
      </button>
    </div>
  );
};
