import React from 'react'
import styles from './Card.module.css'

const className=()=>{
  return `card ${styles.Card}`
}

const Card = props => {
  return (
    <div className={ className() }>
      {props.children}
    </div>
  )
}

export default Card