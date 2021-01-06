import React from 'react'
import styles from './Button.module.css'

const Link = props => {
  return (
    <a
      className={styles.Button}
      href={props.href} 
      target={props.target} 
      rel={props.rel}
      onMouseEnter={props.onHover}
      onMouseLeave={props.offHover} >

      {props.children}
    </a>
  )
}

export default Link
