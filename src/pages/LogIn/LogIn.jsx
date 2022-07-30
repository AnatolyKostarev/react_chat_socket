import React from "react";
import { Header } from "../../layouts/Header";
import { Main } from "../../layouts/Main";
import { Footer } from "../../layouts/Footer";
import { Container } from "../../components/Container/Container";
import { FormHeader } from "../../components/FormTitle/FormHeader";
import { Form } from "../../components/Form/Form";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export const LogIn = ({ title, link, path, indent }) => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <FormHeader title={title} link={link} path={path} indent={indent} />
          <Form>
            <Input label="Никнейм" placeholder="Никнейм" />
            <Input type="password" label="Пароль" placeholder="Пароль" />
          </Form>
          <Button pt="15" pr="51" pb="14" pl="50">
            Войти
          </Button>
        </Container>
      </Main>
      <Footer name="Анатолий" />
    </>
  );
};
