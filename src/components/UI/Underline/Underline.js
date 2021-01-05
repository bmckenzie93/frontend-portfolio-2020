import React from 'react'
import styles from './Underline.module.css'

const Underline = props => <div 
  className={styles.Underline}
  style={{backgroundColor:`${props.color}`}}></div>

export default Underline
