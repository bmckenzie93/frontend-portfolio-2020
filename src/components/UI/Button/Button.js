import React from 'react'
import styles from './Button.module.css'


const Button = props => {
  return (
    <button 
      className={styles.Button}
      onMouseEnter={props.onHover}
      onMouseLeave={props.offHover}>
        {props.children}
    </button>
  )
}

export default Button
