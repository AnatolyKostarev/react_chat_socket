import React from "react";
import s from "./Title.module.css";

export const Title = ({ caption, description }) => {
  return (
    <>
      <h1 className={s.title}>{caption}</h1>
      <p className={s.description}>{description}</p>
    </>
  );
};
