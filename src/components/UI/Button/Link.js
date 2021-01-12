import React from 'react'
import styles from './Button.module.css'

const Link = props => {
  return (
    <a
      className={styles.Button}
      id={props.id}
      href={props.href} 
      target={props.target} 
      rel={props.rel}
      onMouseEnter={props.onHover}
      onMouseLeave={props.offHover}
      style={props.style} >

      {props.children}
    </a>
  )
}

export default Link
