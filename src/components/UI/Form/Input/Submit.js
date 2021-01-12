import React from 'react'
import styles from '../../Button/Button.module.css'

const Submit = props => {
  return (
    <input 
      className={styles.Button}
      type="submit" 
      value="submit"
      onClick={props.onClick}
      disabled={props.disabled} />
  )
}

export default Submit
