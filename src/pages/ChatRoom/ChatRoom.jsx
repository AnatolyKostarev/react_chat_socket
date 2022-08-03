import React from "react";
import { useState } from "react";
import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Title/Title";
import { Header } from "../../layouts/Header";
import { DecorationLine } from "../../components/DecorationLine/DecorationLine";
import { Main } from "../../layouts/Main";
import { UsersList } from "../../components/UsersList/UsersList";
import { UserMessage } from "../../components/UserMessage/UserMessage";
import { Form } from "../../components/Form/Form";
import { TextArea } from "../../components/TextArea/TextArea";
import { Footer } from "../../layouts/Footer";
import { Button } from "../../components/Button/Button";
import s from "./ChatRoom.module.css";

export const ChatRoom = ({ title }) => {
  const [value, setValue] = useState("Ваше сообщение...");
  return (
    <>
      <Header className={s.header__chat}>
        <DecorationLine />
        <Container>
          <Title className={s.title__chat} caption={title} />
        </Container>
      </Header>
      <Main className={s.main__chat}>
        <Container>
          <UsersList className={s.users__chat}>
            <UserMessage>
              <span className={s.user__marker}></span>
              <p className={s.user__name}>Васек</p>
              <p className={s.user__message}>
                Нет ну SaintCode конечно крутая школа. А Юрий так вообще
                шикарен, дай бог ему здоровья.
              </p>
            </UserMessage>
            <UserMessage>
              <span className={s.user__marker}></span>
              <p className={s.user__name}>Лерочка</p>
              <p className={s.user__message}>
                Согласна, вот это он конечно молодец
              </p>
            </UserMessage>
            <UserMessage>
              <span className={s.user__marker}></span>
              <p className={s.user__name}>Катенька</p>
              <p className={s.user__message}>По фактам, АБАЖАЮ его ❤️</p>
            </UserMessage>
            <UserMessage>
              <span className={s.user__marker}></span>
              <p className={s.user__name}>Катенька</p>
              <p className={s.user__message}>По фактам, АБАЖАЮ его ❤️</p>
            </UserMessage>
            <UserMessage>
              <span className={s.user__marker}></span>
              <p className={s.user__name}>Катенька</p>
              <p className={s.user__message}>По фактам, АБАЖАЮ его ❤️</p>
            </UserMessage>
            <UserMessage>
              <span className={s.user__marker}></span>
              <p className={s.user__name}>Катенька</p>
              <p className={s.user__message}>По фактам, АБАЖАЮ его ❤️</p>
            </UserMessage>
          </UsersList>
          <Form className={s.form__chat} onSubmit={(e) => e.preventDefault()}>
            <TextArea
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button className={s.btn__chat}>Отправить</Button>
          </Form>
        </Container>
      </Main>
      <Footer className={s.footer__chat} name="Анатолий" />
    </>
  );
};
