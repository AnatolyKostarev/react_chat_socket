import React from "react";
import { Container } from "../components/Container/Container";
import s from "./Footer.module.css";

export const Footer = ({ name }) => {
  return (
    <footer>
      <Container>
        <p className={s.footer__text}>
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
