import React from "react";
import clsx from "clsx";
import s from "./Title.module.css";

export const Title = ({ caption, description, className }) => {
  return (
    <>
      <h1 className={clsx(s.title, className)}>{caption}</h1>
      {description && <p className={s.description}>{description}</p>}
    </>
  );
};
