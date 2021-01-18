import React from 'react'
import styles from './Flex.module.css'

const Flex = props => {
  return (
    <div 
      className={styles.Flex}
      id={props.id} >
        {props.children}
    </div>
  )
}

export default Flex
