import { useState, useRef, useEffect } from 'react'
import { io } from 'socket.io-client'

const useChat = () => {
  const [users, setUsers] = useState([])
  const [log, setLog] = useState('')
  const [messages, setMessage] = useState([])

  const { current: socket } = useRef(
    io('http://localhost:5000', {
      query: {
        userName: localStorage.getItem('user'),
      },
    })
  )

  useEffect(() => {
    socket.emit('user:add', { name: localStorage.getItem('user') })

    socket.on('log', log => {
      setLog(log)
    })

    socket.on('user_list:update', users => {
      setUsers(users)
    })

    socket.on('message_list:update', messages => {
      setMessage(messages)
    })
  }, [socket])

  const sendMessage = messages => {
    socket.emit('message:add', messages)
  }

  return { users, messages, log, sendMessage }
}

export default useChat
