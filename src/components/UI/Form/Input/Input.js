import React from 'react'
import styles from './Input.module.css'

const Input = props => {
  return (
    <input 
      className={styles.Input}
      type={props.type} />
  )
}

export default Input
