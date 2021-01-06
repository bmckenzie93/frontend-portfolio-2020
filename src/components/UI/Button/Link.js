import React from 'react'
import styles from './Button.module.css'

const Link = props => {
  return (
    <a
      className={styles.Button}
      href={props.href} 
      target="_blank" 
      rel="external">

      {props.children}
    </a>
  )
}

export default Link
