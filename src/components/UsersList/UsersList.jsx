import React from "react";
import clsx from "clsx";
import s from "./UsersList.module.css";

export const UsersList = ({ children, className }) => {
  return (
    <>
      <ul className={clsx(s.users__list, className)}>{children}</ul>
    </>
  );
};
