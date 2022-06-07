// import cn from 'classnames'
import React from 'react'
import styles from './style.module.css'

const Button = ({children, type="button", projectType = 'primary', ...props}) => {
  return (
    <button 
    type={type} 
    className={styles[projectType]} 
    {...props}>
      {children}
    </button>
  )
}

export default Button