import React from 'react'
import Underline from '../Underline/Underline'
import styles from './Heading.module.css'

const Heading = props => {

  return (
    <>
      <h2 className={styles.Heading}>
        {props.title.toUpperCase()}
      </h2>
      <Underline color={props.color}/>
    </>
  )
}

export default Heading
