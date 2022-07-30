import React from "react";
import s from "./Main.module.css";

export const Main = ({ children }) => {
  return <main id={s.main}>{children}</main>;
};
