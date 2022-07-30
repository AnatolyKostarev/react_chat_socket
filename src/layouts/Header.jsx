import React from "react";
import { Container } from "../components/Container/Container";
import { Title } from "../components/Title/Title";
import { DecorationLine } from "../components/DecorationLine/DecorationLine";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header id={s.header}>
      <DecorationLine />
      <Container>
        <Title
          caption="Чат чат"
          description="Привет, заходи к нам в чат и мы научим тебя 
программировать на html, css и javascript."
        />
      </Container>
    </header>
  );
};
