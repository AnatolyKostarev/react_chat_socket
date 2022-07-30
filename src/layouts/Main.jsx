import React from "react";
import clsx from "clsx";

import s from "./Main.module.css";

export const Main = ({ children, className }) => {
  return <main className={clsx(s.main, className)}>{children}</main>;
};
