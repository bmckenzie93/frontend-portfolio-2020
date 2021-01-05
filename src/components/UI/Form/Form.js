import React from 'react'
import styles from './Form.module.css'

const Form = props => {
  return (
    <form 
      action={props.action}
      id={props.id}
      className={styles.Form}>
        
      {props.children}
    </form>
  )
}

export default Form
