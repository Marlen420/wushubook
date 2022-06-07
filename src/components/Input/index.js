// import cn from 'classnames'
import React from 'react'
import styles from './style.module.css'

const Input = ({children, type="text", projectType = 'default', ...props}) => {
  return (
    <input
    type={type}
    className={styles.input}
    {...props}>
      {children}
    </input>
  )
}

export default Input;