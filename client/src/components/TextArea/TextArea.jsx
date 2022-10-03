import React from 'react'
import clsx from 'clsx'
import s from './TextArea.module.css'

export const TextArea = ({
  className,
  rows = 5,
  cols = 63,
  autoComplete = 'off',
  onChange,
  value,
}) => {
  return (
    <textarea
      className={clsx(s.message__field, className)}
      rows={rows}
      cols={cols}
      autoComplete={autoComplete}
      minLength='2'
      maxLength='500'
      onChange={onChange}
      value={value}
      placeholder='Ваше сообщение...'
    ></textarea>
  )
}
