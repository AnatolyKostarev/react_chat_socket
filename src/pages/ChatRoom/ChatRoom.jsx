import React from "react";
import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Title/Title";
import { Header } from "../../layouts/Header";
import { DecorationLine } from "../../components/DecorationLine/DecorationLine";
import { Main } from "../../layouts/Main";
import { UsersList } from "../../components/UsersList/UsersList";
import { UserMessage } from "../../components/UserMessage/UserMessage";
import s from "./ChatRoom.module.css";

export const ChatRoom = ({ title }) => {
  return (
    <>
      <Header className={s.chat__header}>
        <DecorationLine />
        <Container>
          <Title className={s.chat__title} caption={title} />
        </Container>
      </Header>
      <Main>
        <Container>
          <UsersList>
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
            {/* <UserMessage>
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
            <UserMessage>
              <span className={s.user__marker}></span>
              <p className={s.user__name}>Катенька</p>
              <p className={s.user__message}>По фактам, АБАЖАЮ его ❤️</p>
            </UserMessage>
          </UsersList>
          <Form className={s.form__chat} onSubmit={(e) => e.preventDefault()}>
            <TextArea caption="Ваше сообщение..." />
            <Button className={s.btn__chat}>Отправить</Button>
          </Form>
        </Container>
      </Main>
      <Footer className={s.footer__chat} name="Анатолий" />
    </>
  );
};
