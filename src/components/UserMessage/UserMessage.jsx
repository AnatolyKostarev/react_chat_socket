import React from "react";
import clsx from "clsx";
import s from "./UserMessage.module.css";

export const UserMessage = ({ children, className }) => {
  return <li className={clsx(s.user__message, className)}>{children}</li>;
};
