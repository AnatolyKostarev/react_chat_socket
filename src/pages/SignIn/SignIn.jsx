import React, { useState } from "react";
import { Header } from "../../layouts/Header";
import { Main } from "../../layouts/Main";
import { Footer } from "../../layouts/Footer";
import { Container } from "../../components/Container/Container";
import { DecorationLine } from "../../components/DecorationLine/DecorationLine";
import { Title } from "../../components/Title/Title";
import { FormHeader } from "../../components/FormTitle/FormHeader";
import { Form } from "../../components/Form/Form";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import s from "./SignIn.module.css";

export const SignIn = ({ setIsAuth }) => {
  const [show, setShow] = useState(true);
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
          <FormHeader
            title={show ? "Регистрация" : "Войти"}
            link={!show ? "Регистрация" : "Войти"}
            indent={show ? 14 : 27}
            onClick={() => setShow(!show)}
          />
          {show ? (
            <Form onSubmit={(e) => e.preventDefault()}>
              <Input label="Никнейм" placeholder="Никнейм" />
              <Input type="password" label="Пароль" placeholder="Пароль" />
              <Button className={s.btn__sign}>Зарегистрироваться</Button>
            </Form>
          ) : (
            <Form onSubmit={(e) => e.preventDefault()}>
              <Input label="Никнейм" placeholder="Никнейм" />
              <Input type="password" label="Пароль" placeholder="Пароль" />
              <Button className={s.btn__login} onClick={() => setIsAuth(true)}>
                Войти
              </Button>
            </Form>
          )}
        </Container>
      </Main>
      <Footer name="Анатолий" />
    </>
  );
};
