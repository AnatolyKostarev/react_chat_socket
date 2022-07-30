import React from "react";
import clsx from "clsx";
import s from "./Header.module.css";

export const Header = ({ children, className }) => {
  return <header className={clsx(s.header, className)}>{children}</header>;
};
