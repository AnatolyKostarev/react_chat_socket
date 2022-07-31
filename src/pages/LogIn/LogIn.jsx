import React from "react";
import { Header } from "../../layouts/Header";
import { Main } from "../../layouts/Main";
import { Footer } from "../../layouts/Footer";
import { Container } from "../../components/Container/Container";
import { FormHeader } from "../../components/FormTitle/FormHeader";
import { DecorationLine } from "../../components/DecorationLine/DecorationLine";
import { Title } from "../../components/Title/Title";
import { Form } from "../../components/Form/Form";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import s from "./LogIn.module.css";

export const LogIn = ({ title, link, path, indent }) => {
  return (
    <>
      <Header>
        <DecorationLine />
        <Container>
          <Title
            caption="Чат чат"
            description="Привет, заходи к нам в чат и мы научим тебя 
программировать на html, css и javascript."
          />
        </Container>
      </Header>
      <Main>
        <Container>
          <FormHeader title={title} link={link} path={path} indent={indent} />
          <Form onSubmit={(e) => e.preventDefault()}>
            <Input label="Никнейм" placeholder="Никнейм" />
            <Input type="password" label="Пароль" placeholder="Пароль" />
            <Button className={s.btn__login}>Войти</Button>
          </Form>
        </Container>
      </Main>
      <Footer name="Анатолий" />
    </>
  );
};
