import React from 'react'
import styles from './Input.module.css'

const TextArea = props => {
  return (
    <textarea 
      className={styles.Input}
      name="contactForm" 
      id="message" 
      cols="30" 
      rows="10">
        
      {props.children}
    </textarea>
  )
}

export default TextArea
