import React from 'react'
import styles from './Flex.module.css'

const FlexWrap = props => {
  return (
    <div className={styles.FlexWrap}>
      {props.children}
    </div>
  )
}

export default FlexWrap