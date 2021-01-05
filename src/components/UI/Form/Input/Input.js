import React from 'react'
import styles from './Input.module.css'

const Input = props => {
  return (
    <input 
      className={styles.Input}
      name={props.name}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder} />
  )
}

export default Input
