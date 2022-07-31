import React from "react";
import clsx from "clsx";
import s from "./TextArea.module.css";

export const TextArea = ({
  caption,
  className,
  rows = 5,
  cols = 63,
  autoComplete = "off",
}) => {
  return (
    <textarea
      className={clsx(s.message__field, className)}
      rows={rows}
      cols={cols}
      autoComplete={autoComplete}
      minLength="20"
      maxLength="500"
    >
      {caption}
    </textarea>
  );
};
