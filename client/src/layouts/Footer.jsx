import React from "react";
import clsx from "clsx";
import { Container } from "../components/Container/Container";
import s from "./Footer.module.css";

export const Footer = ({ name, className }) => {
  return (
    <footer className={clsx(s.footer, className)}>
      <Container>
        <p className={clsx(s.footer__text, className)}>
          Сделал с любовью {name}, гордый студент &nbsp;
          <a href="https://saintcode.ru/" target="_blank" rel="noreferrer">
            &reg;SaintCode Bootcamp,
          </a>{" "}
          &nbsp;
          {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
};
