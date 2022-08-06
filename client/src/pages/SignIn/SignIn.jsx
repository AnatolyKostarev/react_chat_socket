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

function getData(path, params) {
  const HOST = "http://localhost:5000/api/auth/";
  return fetch(`${HOST}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    ...params,
  }).then((res) => res.json());
}

export const SignIn = ({ onAuth }) => {
  const [isRegistration, setIsRegistration] = useState(true);
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("original");
  const [error, setError] = useState(null);

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: nickName, password }),
  };

  async function register(e) {
    e?.preventDefault();
    setError(null);
    setStatus("loading");
    const data = await getData("register", params);

    if (data?.type === "error") {
      setStatus("error");
      setError(data.message);
    }

    if (data?.type === "success") {
      setStatus("done");
      setIsRegistration(false);
      login();
    }
    setNickName("");
    setPassword("");
  }

  async function login(e) {
    e?.preventDefault();
    setError(null);
    setStatus("loading");
    const data = await getData("login", params);

    if (data?.type === "error") {
      setStatus("error");
      setError(data.message);
    }

    if (data?.type === "success") {
      onAuth({
        token: data.token,
        userId: data.userId,
      });
      setStatus("done");
    }
    setNickName("");
    setPassword("");
  }

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
            title={isRegistration ? "Регистрация" : "Войти"}
            link={!isRegistration ? "Регистрация" : "Войти"}
            indent={isRegistration ? 14 : 27}
            onClick={() => setIsRegistration(!isRegistration)}
          />
          <Form onSubmit={isRegistration ? register : login}>
            <Input
              label="Никнейм"
              value={nickName}
              onChange={(e) => setNickName(e.target.value.trim())}
              placeholder="Никнейм"
              disabled={status === "loading"}
            />
            <Input
              type="password"
              label="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
              placeholder="Пароль"
              autocomplete="current-password"
              disabled={status === "loading"}
            />
            <div className={s.btn_info}>
              <Button
                className={isRegistration ? s.btn__sign : s.btn__login}
                disabled={status === "loading"}
              >
                {isRegistration ? "Зарегистрироваться" : "Войти"}
              </Button>
              <p className={s.status_info}>
                {status === "loading" && "Авторизация..."}
                {status === "error" &&
                  (error ?? "Что-то пошло не так, попробуй еще раз 😞")}
              </p>
            </div>
          </Form>
        </Container>
      </Main>
      <Footer name="Анатолий" />
    </>
  );
};
