import React from 'react'
import styles from './Input.module.css'

const TextArea = props => {
  return (
    <textarea 
      className={styles.Input}
      name={props.name} 
      id={props.id} 
      cols="30" 
      rows="8"
      placeholder={props.placeholder}
      value={props.value}
      style={props.style}
      onChange={props.handleChange} >
        
      {props.children}
    </textarea>
  )
}

export default TextArea
