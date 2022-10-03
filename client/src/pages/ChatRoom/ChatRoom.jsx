import React from 'react'
import { useState } from 'react'
import { Container } from '../../components/Container/Container'
import { Title } from '../../components/Title/Title'
import { Header } from '../../layouts/Header'
import { DecorationLine } from '../../components/DecorationLine/DecorationLine'
import { Main } from '../../layouts/Main'
import { UsersList } from '../../components/UsersList/UsersList'
import { UserMessage } from '../../components/UserMessage/UserMessage'
import { Form } from '../../components/Form/Form'
import { TextArea } from '../../components/TextArea/TextArea'
import { Footer } from '../../layouts/Footer'
import { Button } from '../../components/Button/Button'
import useChat from '../../hooks/useChat'
import s from './ChatRoom.module.css'

export const ChatRoom = ({ title }) => {
  const [value, setValue] = useState('')
  const { sendMessage, messages, log } = useChat()

  console.log(log)
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
            {messages.map((elem, index) => (
              <UserMessage key={index}>
                <span className={s.user__marker}></span>
                <p className={s.user__name}>{elem.name}</p>
                <p className={s.user__message}>{elem.value}</p>
              </UserMessage>
            ))}
          </UsersList>
          <Form
            className={s.form__chat}
            onSubmit={e => {
              e.preventDefault()
              setValue('')
              sendMessage({ name: localStorage.getItem('user'), value })
            }}
          >
            <TextArea
              value={value}
              onChange={e => {
                setValue(e.target.value)
              }}
            />
            <Button className={s.btn__chat}>Отправить</Button>
          </Form>
        </Container>
      </Main>
      <Footer className={s.footer__chat} name='Анатолий' />
    </>
  )
}
